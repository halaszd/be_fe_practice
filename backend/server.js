const path = require('path')
const express = require('express');
const server = express();
const formidable = require('formidable')
const port = 3000;

// Create frontend and backend folder
// index.html, style.js, index.js into frontend
// Cd backend, 
// Create server.js
// init npm
// npm install express –save

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
// arra készíti fel a szervert, hogy JSON fálj jön
// ha nested json jönne
server.post('/', (req, res, next) => {
	const form = formidable({ multiples: true, uploadDir: path.join(__dirname, './upload/') }) ;
   
	form.parse(req, (err, fields, files) => {
	  if (err) {
		next(err);
		return;
	  }
	  res.json({ fields, files });
	  console.log(fields);
	  console.log(files);
	  const userFields = JSON.parse(fields.userJson);
	  console.log(userFields.firstname);
	});
  });

server.listen(port, () => {
	console.log(`Example app listening at
	http://localhost:${port}`)
})

