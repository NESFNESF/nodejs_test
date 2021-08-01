/
  @swagger
   composants :
     schémas :
       Réserver :
         type : objet 
         requis :
           - titre
           - auteur
           - fini
         propriétés :
           identifiant :
             type : entier 
             Description : L' auto - id généré du livre .  
           titre :
             type : chaîne 
             description : Le titre de votre livre . 
           auteur :
             type : chaîne 
             description : Qui a écrit le livre ? 
           fini :
             type : booléen 
             description : Avez- vous fini de le lire ? 
           créé à :
             type : chaîne 
             format : date
             description : La date de création de l'enregistrement . 
         exemple :
            titre : Le programmeur pragmatique   
            auteur : Andy Hunt \/ Dave Thomas     
            fini : vrai 
 /









const express = require("express");
const router = express.Router();

const books = require("../util/data");

router.get("/", function (req, res) {
	res.status(200).json(books);
});

router.get("/:id", function (req, res) {
	let book = books.find(function (item) {
		return item.id == req.params.id;
	});

	book ? res.status(200).json(book) : res.sendStatus(404);
});

router.post("/", function (req, res) {
	const { title, author, finished } = req.body;

	let book = {
		id: books.length + 1,
		title: title,
		author: author,
		finished: finished !== undefined ? finished : false,
		createdAt: new Date(),
	};

	books.push(book);

	res.status(201).json(book);
});

router.put("/:id", function (req, res) {
	let book = books.find(function (item) {
		return item.id == req.params.id;
	});

	if (book) {
		const { title, author, finished } = req.body;

		let updated = {
			id: book.id,
			title: title !== undefined ? title : book.title,
			author: author !== undefined ? author : book.author,
			finished: finished !== undefined ? finished : book.finished,
			createdAt: book.createdAt,
		};

		books.splice(books.indexOf(book), 1, updated);

		res.sendStatus(204);
	} else {
		res.sendStatus(404);
	}
});

router.delete("/:id", function (req, res) {
	let book = books.find(function (item) {
		return item.id == req.params.id;
	});

	if (book) {
		books.splice(books.indexOf(book), 1);
	} else {
		return res.sendStatus(404);
	}

	res.sendStatus(204);
});

module.exports = router;
