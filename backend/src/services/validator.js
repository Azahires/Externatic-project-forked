const Joi = require("joi");

const userSchema = Joi.object({
  lastname: Joi.string().max(64).required(),
  firstname: Joi.string().max(64).required(),
  email: Joi.string().email().max(320).required(),
  password: Joi.string().max(45).required(),
  phonenumber: Joi.string().max(10),
  linkedinlink: Joi.string().max(45),
  githublink: Joi.string().max(45),
  city: Joi.string().max(45),
  postalcode: Joi.number().max(5),
});

const validateUserCreation = (req, res, next) => {
  const { lastname, firstname, email, password } = req.body;
  const { error } = userSchema.validate(
    { lastname, firstname, email, password },
    { abortEarly: false }
  );

  if (error) {
    res.status(422).json({ validationErrors: error.details });
  } else {
    next();
  }
};

module.exports = {
  validateUserCreation,
};
