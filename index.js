const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const hostname = '127.0.0.1';
const port = 3000;

app.use(express.static('dist'));
//app.set("servicios", path.join(__dirname('/dist/public/servicios/portafolio.json')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname('/dist/index.html')));
});

app.get('/api', (req, res) => {
    let reqPath = path.join(__dirname, './dist/public/servicios/portafolio.json');
    fs.readFile(reqPath, 'utf8', function (err, data) {
        if(!err){
            console.log("Exito" + data);
            let jsonObj = JSON.parse(data);
            res.end(data);
        } else {
            res.end("Error: " + err);
        }
    })
});
app.listen(port, () => {
    console.log(`Servidor corriendo en http://${hostname}:${port}`);
});