const jwt = require("jsonwebtoken");
const models = require("../models");

const browse = (req, res) => {
  models.user
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.user
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const add = (req, res) => {
  const user = req.body;
  models.user
    .insert(user)
    .then(([result]) => {
      user.id = result.insertId;
      delete user.hashedPassword;
      const token = jwt.sign(user, process.env.JWT_SECRET);
      res.status(201).send({ user, token });
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};
const edit = (req, res) => {
  const user = req.body;
  user.id = parseInt(req.params.id, 10);
  models.user
    .update(user)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const editFile = (req, res) => {
  const { newname, fieldname } = req.file;
  const id = parseInt(req.params.id, 10);
  models.user
    .updateFile(fieldname, newname, id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.send(newname).status(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};
const destroy = (req, res) => {
  models.user
    .delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
  editFile,
};
