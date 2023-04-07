const Joi = require('joi');

const userSchema = Joi.object({
  displayName: Joi.string().min(8).required().label('displayName'),
  email: Joi.string().required().email().label('email'),
  password: Joi.string().min(6).required().label('password'),
  image: Joi.string(),
}).messages({
  'string.min': '{{#label}} length must be at least {{#limit}} characters long',
  email: '{{#label}} must be a valid email',
});

const usersValidation = (user) => userSchema.validate(user);

module.exports = { usersValidation };