import express from 'express';

const app = express();

app.get('/', (request, response) => response.send('<h1>Hi</h1>'));

app.listen(8080);

console.log('server is up and runing');


import http from 'http';
import qs from 'querystringify';
import fs from 'fs';