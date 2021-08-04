const path = require('path')
const express = require('express');
const server = express();
const port = 3000;

server.use('/public', express.static(path.join("../", "frontend", "public")));
// ha react lenne a frontend és buildelt verziót szeretnénk importálni:
// frontend-en belül create-react, build után  frontend/build/index.html-t kell átadni a szervernek
server.get('/', (req, res) => {
	res.sendFile(
		path.join(__dirname, './../frontend/index.html')
	)
})
// server.set('json spaces', 40);
// a headert elsőként kapja meg mind a kliens mind a szerver
// a küldött csomag slice-olva van nem egyben adódik át
// a feljécben (header): mekkora az adat, hány csomagot vár a másik
// a bejövő fejlécet meg tudjuk változtatni arra, amire akarjuk
// így lehetne:
server.use(function (req, res, next) {
	req.headers['content-type'] = 'application/json';
	next();
  });

// arra készíti fel a szervert, hogy JSON fálj jön
server.use(express.json());
// ha nested json jönne
server.use(express.urlencoded({ extended:true }))
server.post('/', (req, res) => {
	// req.header("Content-Type", "application/json")
	console.log(req.body.firstname)
	res.send("Welcome");
})

server.listen(port, () => {
	console.log(`Example app listening at
	http://localhost:${port}`)
})

