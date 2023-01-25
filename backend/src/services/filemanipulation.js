const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const constants = require("node:fs/promises");

const renameAndMoveFile = (req, res, next) => {
  const { originalname, filename, fieldname } = req.file;
  const [originalfilename, fileextension] = originalname.split(".");
  const newname = `${uuidv4()}-${originalfilename}.${fileextension}`;
  fs.rename(
    `uploads/${fieldname}/${filename}`,
    `uploads/${fieldname}/${newname}`,
    (err) => {
      if (err) {
        res.send(err);
      }
      fs.copyFile(
        `uploads/${fieldname}/${newname}`,
        `public/assets/connecteduserfiles/user${fieldname}.${fileextension}`,
        constants.COPYFILE_FICLONE,
        () => {
          if (err) {
            res.send(err);
          }
          req.file.newname = newname;
          next();
        }
      );
    }
  );
};

const moveFiles = async (req, res) => {
  if (req.user.avatar) {
    const [, avatarFileExtension] = req.user.avatar.split(".");
    await fs.copyFile(
      `uploads/avatar/${req.user.avatar}`,
      `public/assets/connecteduserfiles/useravatar.${avatarFileExtension}`,
      constants.COPYFILE_FICLONE,
      (err) => {
        if (err) {
          res.send(err);
        }
      }
    );
  }
  if (req.user.CV) {
    const [, CVFileExtension] = req.user.CV.split(".");
    await fs.copyFile(
      `uploads/CV/${req.user.CV}`,
      `public/assets/connecteduserfiles/userCV.${CVFileExtension}`,
      constants.COPYFILE_FICLONE,
      (err) => {
        if (err) {
          res.send(err);
        }
      }
    );
  }
};

module.exports = { renameAndMoveFile, moveFiles };
