const http = require('http');
let port = 8080;
const fs = require('fs');
const app = http.createServer((req, res) => {
    let fileName = '';
    switch (req.url) {
        case '/':
            fileName = './index.html';
            break;
        case '/about':
            fileName = './about.html';
            break;
        case '/contact':
            fileName = './contact.html';
            break;
        default:
            fileName = './404.html'
    }
    fs.readFile(fileName, (err, page) => {
        if (err) {
            console.log(err);
            return false;
        }
        res.end(page);
    })
})
app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false;
    };
    console.log(`Server running on port ${port}`);
})