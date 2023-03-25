const Joi = require('joi')


const exampleSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
})

module.exports = exampleSchema