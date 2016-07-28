'use strict';
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('dist'));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const server = app.listen(process.env.PORT || 3000, () => {
	console.log('Magic is happening on ' + server.address().port);
});
