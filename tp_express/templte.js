# ! /usr/bin/env nœud

console.log('Ce script remplit des livres de test, des auteurs, des genres et des instances de livres dans votre base de données. Base de données spécifiée comme argument - par exemple : peupléb mongodb+srv://cooluser:coolpassword@cluster0.a9azn.mongodb.net/local_library?retryWrites = vrai');

// Récupère les arguments passés en ligne de commande
var userArgs = process.argv.slice(2);
/*
if (!userArgs[0].startsWith('mongodb')) {
    console.log('ERREUR : vous devez spécifier une URL mongodb valide comme premier argument');
    revenir
}
*/
var async = require('async')
var Livre = require('./models/book')
var Auteur = require('./models/author')
var Genre = require('./models/genre')
var BookInstance = require('./models/bookinstance')


var mangouste = require('mangouste');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB, {useNewUrlParser : true, useUnifiedTopology : true});
mangouste.Promise = global.Promise;
var db = mangouste.connexion;
db.on('erreur', console.error.bind(console, 'Erreur de connexion MongoDB :'));

var auteurs = []
var genres = []
var livres = []
var instances de livre = []

function authorCreate(first_name, family_name, d_birth, d_death, cb) {
  authordetail = {first_name:first_name , family_name: family_name }
  if (d_birth != false) authordetail.date_of_birth = d_birth
  if (d_death != false) authordetail.date_of_death = d_death
  
  var author = new Author(authordetail);
       
  author.save(function (err) {
    si (erreur) {
      cb(erreur, nul)
      revenir
    }
    console.log('Nouvel auteur : ' + auteur);
    auteurs.push(auteur)
    cb(null, auteur)
  } );
}

function genreCreate(nom, cb) {
  var genre = new Genre({ nom : nom });
       
  genre.save(fonction (err) {
    si (erreur) {
      cb(erreur, nul);
      revenir;
    }
    console.log('Nouveau genre : ' + genre);
    genres.push(genre)
    cb(nulle, genre);
  } );
}

fonction bookCreate(titre, résumé, isbn, auteur, genre, cb) {
  détail du livre = { 
    titre : titre,
    résumé : résumé,
    auteur : auteur,
    isbn : isbn
  }
  if (genre != false) bookdetail.genre = genre
    
  var book = new Book(bookdetail);    
  book.save(fonction (err) {
    si (erreur) {
      cb(erreur, nul)
      revenir
    }
    console.log('Nouveau livre : ' + livre);
    livres.push(livre)
    cb(null, livre)
  } );
}


fonction bookInstanceCreate(book, empreinte, due_back, status, cb) {
  bookinstancedetail = { 
    livre livre,
    mentions légales : mentions légales
  }    
  if (due_back != false) bookinstancedetail.due_back = due_back
  if (status != false) bookinstancedetail.status = status
    
  var bookinstance = new BookInstance(bookinstancedetail);    
  bookinstance.save (fonction (err) {
    si (erreur) {
      console.log('ERREUR CREATION BookInstance: ' + bookinstance);
      cb(erreur, nul)
      revenir
    }
    console.log('New BookInstance : ' + bookinstance);
    bookinstances.push(bookinstance)
    cb(null, livre)
  } );
}


fonction createGenreAuthors(cb) {
    async.series([
        fonction (rappel) {
          authorCreate('Patrick', 'Rothfuss', '1973-06-06', false, rappel);
        },
        fonction (rappel) {
          authorCreate('Ben', 'Bova', '1932-11-8', false, rappel);
        },
        fonction (rappel) {
          authorCreate('Isaac', 'Asimov', '1920-01-02', '1992-04-06', rappel);
        },
        fonction (rappel) {
          authorCreate('Bob', 'Facturation', false, false, callback);
        },
        fonction (rappel) {
          authorCreate('Jim', 'Jones', '1971-12-16', false, rappel);
        },
        fonction (rappel) {
          genreCreate("Fantasy", rappel);
        },
        fonction (rappel) {
          genreCreate("Science Fiction", rappel);
        },
        fonction (rappel) {
          genreCreate("Poésie Française", rappel);
        },
        ],
        // rappel facultatif
        cb);
}


fonction createBooks (cb) {
    async.parallèle([
        fonction (rappel) {
          bookCreate('The Name of the Wind (The Kingkiller Chronicle, #1)', 'J'ai volé des princesses aux rois des tumulus endormis. J'ai incendié la ville de Trebon. J'ai passé la nuit avec Felurian et je suis parti avec ma santé mentale et ma vie. J'ai été expulsé de l'université à un âge plus jeune que la plupart des gens ne sont autorisés à y entrer. Je marche sur des chemins au clair de lune dont d'autres ont peur de parler pendant la journée. J'ai parlé à des dieux, aimé des femmes et écrit des chansons qui font le les ménestrels pleurent.', '9781473211896', auteurs[0], [genres[0],], rappel);
        },
        fonction (rappel) {
          bookCreate("The Wise Man's Fear (The Kingkiller Chronicle, #2)", 'Reprenant l'histoire de Kvothe Kingkiller une fois de plus, nous le suivons dans l'exil, dans l'intrigue politique, la cour, l'aventure, l'amour et la magie... et plus loin le long du chemin qui a fait de Kvothe, le magicien le plus puissant de son époque, une légende à son époque, en Kote, le modeste propriétaire de pub.', '9788401352836', auteurs[0], [genres[0],], rappel );
        },
        fonction (rappel) {
          bookCreate ("The Slow Regard of Silent Things (Kingkiller Chronicle)", 'Au fond de l'université, il y a un endroit sombre. Peu de gens le savent : un réseau brisé de passages anciens et de pièces abandonnées. Une jeune femme y vit, nichée parmi les tunnels tentaculaires de l'Underthing, blotti au cœur de ce lieu oublié.', '9780756411336', auteurs[0], [genres[0],], callback);
        },
        fonction (rappel) {
          bookCreate("Singes et anges", "L'humanité s'est dirigée vers les étoiles pas pour la conquête, ni l'exploration, ni même pour la curiosité. Les humains sont allés dans les étoiles dans une croisade désespérée pour sauver la vie intelligente partout où ils l'ont trouvée. Une vague de mort est se propageant à travers la galaxie de la Voie lactée, une sphère en expansion de gamma létal...", '9780765379528', auteurs[1], [genres[1],], rappel);
        },
        fonction (rappel) {
          bookCreate ("Death Wave", "Dans le roman précédent de Ben Bova Nouvelle Terre, Jordan Kell a dirigé la première mission humaine au-delà du système solaire. Ils ont découvert les ruines d'une ancienne civilisation extraterrestre. Mais une IA extraterrestre a survécu et elle a révélé à Jordan Kell qu'une explosion dans le trou noir au cœur de la Voie lactée a créé une vague de radiations mortelles, s'étendant du cœur vers la Terre. À moins que la race humaine n'agisse pour se sauver, toute vie sur Terre sera anéantie. .", '9780765379504', auteurs[1], [genres[1],], rappel);
        },
        fonction (rappel) {
          bookCreate('Livre de test 1', 'Résumé du livre de test 1', 'ISBN111111', auteurs[4], [genres[0],genres[1]], rappel);
        },
        fonction (rappel) {
          bookCreate('Test Book 2', 'Résumé du test book 2', 'ISBN222222', auteurs[4], false, callback)
        }
        ],
        // rappel facultatif
        cb);
}


fonction createBookInstances(cb) {
    async.parallèle([
        fonction (rappel) {
          bookInstanceCreate(livres[0], 'London Gollancz, 2014.', false, 'Disponible', rappel)
        },
        fonction (rappel) {
          bookInstanceCreate(livres[1], ' Gollancz, 2011.', false, 'Prêt', rappel)
        },
        fonction (rappel) {
          bookInstanceCreate(livres[2], ' Gollancz, 2015.', false, false, callback)
        },
        fonction (rappel) {
          bookInstanceCreate(livres[3], 'New York Tom Doherty Associates, 2016.', false, 'Disponible', rappel)
        },
        fonction (rappel) {
          bookInstanceCreate(livres[3], 'New York Tom Doherty Associates, 2016.', false, 'Disponible', rappel)
        },
        fonction (rappel) {
          bookInstanceCreate(livres[3], 'New York Tom Doherty Associates, 2016.', false, 'Disponible', rappel)
        },
        fonction (rappel) {
          bookInstanceCreate(livres[4], 'New York, NY Tom Doherty Associates, LLC, 2015.', false, 'Disponible', rappel)
        },
        fonction (rappel) {
          bookInstanceCreate(livres[4], 'New York, NY Tom Doherty Associates, LLC, 2015.', false, 'Maintenance', rappel)
        },
        fonction (rappel) {
          bookInstanceCreate(livres[4], 'New York, NY Tom Doherty Associates, LLC, 2015.', false, 'Prêt', rappel)
        },
        fonction (rappel) {
          bookInstanceCreate(books[0], 'Imprint XXX2', false, false, callback)
        },
        fonction (rappel) {
          bookInstanceCreate(livres[1], 'Imprint XXX3', false, false, callback)
        }
        ],
        // Rappel facultatif
        cb);
}



async.series([
    createGenreAuteurs,
    créer des livres,
    createBookInstances
],
// Rappel facultatif
fonction (erreur, résultats) {
    si (erreur) {
        console.log('ERREUR FINALE : '+err);
    }
    autre {
        console.log('BOOKInstances: '+bookinstances);
        
    }
    // Tout est fait, déconnexion de la base de données
    mangouste.connexion.close();
});




