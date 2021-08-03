const path = require('path')
const express = require('express');
const server = express();
const port = 3000;

server.use('/public', express.static(path.join("../", "frontend", "public")));

server.get('/', (req, res) => {
	res.sendFile(
		path.join(__dirname, './../frontend/index.html')
	)
})

server.post('/', (req, res) => {
	
	res.send("Welcome");
})

server.listen(port, () => {
	console.log(`Example app listening at
	http://localhost:${port}`)
})

