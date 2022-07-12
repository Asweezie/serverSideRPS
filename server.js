const http = require('http')
const fs = require('fs')
const url = require('url')
const querystring = require('querystring');

const server = http.createServer(function(req, res) {

    const params = querystring.parse(url.parse(req.url).query);
    const page = url.parse(req.url).pathname;
    if (page == '/') {
        fs.readFile('index.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data)
            res.end()
        });
    }
    else if (page == '/index.js'){
        fs.readFile('index.js', function(err, data) {
            res.writeHead(200, {'Content-Type': 'html/javascript'})
            res.write(data)
            res.end()
        })
    }
    else if (page == '/index.css'){
        fs.readFile('index.css', function(err, data) {
            res.write(data)
            res.end()
        })
    }  
    else if (page == '/api') {
        
        const rpsObject = {
            rpsResults: (() => {
                let rng = Math.ceil(Math.random() *3)
                    if (rng == 1) return 'scissors'
                    if (rng == 2) return 'rock'
                    if (rng == 3) return 'paper'
            })()
        }
        res.end(JSON.stringify(rpsObject));
    }
   
    
})

server.listen(8000, (error) => {
    if (error) console.log('Something went wrong...')
    else console.log(`Listening on port 8000`)
})