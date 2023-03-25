function validateRequestMiddleware(schema) {
    if(!schema) throw new Error('Schema is required')

    return (req, res, next) => {
        const { error } = schema.validate(req.body)

        if (error) {
            return res.status(400).json({ message: error.details[0].message })
        }

        next()
    };
}


module.exports = validateRequestMiddleware