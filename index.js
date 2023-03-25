const http = require('http')
const app = require('./src/app')


const server = http.createServer(app)

server
    .listen(8080, () => {
        console.log('Server running on port 8080')
    })
    .on('error',console.error)