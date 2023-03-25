exports.examplePost = function examplePost(req, res) {
    const file = req.file

    if (!file) return res.status(400).json({ message: 'File is required' })

    res.send('Hello World!')
}