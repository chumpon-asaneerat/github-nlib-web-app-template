const path = require("path");
//const nlib = require("./nlib/nlib");
const WebServer = require('./nlib/nlib-express');

const wsvr = new WebServer();

const routes = {
    /** @type {WebServer.RequestHandler} */
    home: (req, res, next) => {
        res.sendFile(__dirname + '/index.html')
    },
    /** @type {WebServer.RequestHandler} */
    getJson: (req, res, next) => {
        let data = {
            name: 'joe',
            value: Date.now()
        }
        wsvr.sendJson(req, res, data);
    },
    /** @type {WebServer.RequestHandler} */
    postJson: (req, res, next) => {
        let data = { result: 'success' }
        wsvr.sendJson(req, res, data);
    }
}

wsvr.get('/', routes.home);
wsvr.get('/getJson', routes.getJson);
wsvr.post('/postJson', routes.postJson);

wsvr.listen();
