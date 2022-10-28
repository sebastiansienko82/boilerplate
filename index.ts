import express from 'express';
import http from 'http';
import path from 'path';

const app = express();
const port: string | number = process.env.PORT ? process.env.PORT : 3000;
const protocol: any = http;
const options: object = {};

app.use(express.static('build/client'));
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client', 'index.html'));
});
  

protocol.createServer(options, app).listen(port);
