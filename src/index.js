const express = require('express');
const { pathToFileURL } = require('url');
const path = require('path');

const app = express();
const router = express.Router();
const parent = path.resolve(__dirname, '..');

router.use('/products', (req, res, next) => {
    console.log('request: ', req.originalUrl);
    console.log('method: ', req.method);
    res.json({
        'url':req.originalUrl,
        'method': req.method,
        'item':'Tas Mahal',

    });
    next();
})

router.use('/home', (req, res, next) => {
    res.sendFile(parent +'/template/index.html');
    console.log(path.resolve(parent +'/template/index.html'));

});


app.use('/', router);

app.listen(4000);