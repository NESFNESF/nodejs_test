const uuidv4 = require('uuid').v4();

const ProduitModel = require("../models/productModel");

function generateId(){
    var found = false,
        sym ='azertyuiopmlkjhgfdsqwxcvbn',
        str = '';

        for(var i = 0; i< 14 ; i++){
            str += sym[parseInt(Math.random()*(sym.length))];
        }
        return str;
}

const createProduit =  function  (req , res){
     const id =  require('uuid').v4();
     const Produit = {
        id,
        name : req.body.name,
        description : req.body.description,
        imageUrl : req.body.imageUrl,
        price : req.body.price,
        shopid : req.body.shopid

     };
     var newProduit = new ProduitModel(Produit);
     newProduit.save(function (err) {
    if (err) {
      return err;
    }
    console.log('New Produit: ' + newProduit );
  } );
     return res.send( req.Body);
};
const listProduit = function (req , res){
    Produits =  req.context.Produit.find(function(err,Produits){
        if(err){
            return  err;
        }
      
         return  res.send(Produits);
    });
   
};
const deleteProduit= function (req , res){
    req.context.produit.remove({id : req.params.id},function(err){
         if(err){
            return  err;
        };
        console.log("le Produit d'ID " + req.params.id +" a bien été supprimer");
    });
}

const updateProduit = function (req , res){
    req.context.produit.findOne({'id' : req.params.id},function(err,elem){
        if(err){
            return  err;
        }
        elem.name = req.body.name;
        elem.description = req.body.description;
        elem.imageUrl = req.body.imageUrl;
        elem.price = req.body.price;

        elem.save(function (err) {
    if (err) {
      return err;
    }
    console.log('Update Produit: ' + req.body );
  } );

        return res.send(req.body);
    })
}

const oneProduit = function (req , res){
    elem =  req.context.produit.find({'id' : req.params.id},function(err){
        if(err){
            return  err;
        }
    });
      return res.send(elem);
}

const liste_produit_boutique = function(req , res) {

     elem =  req.context.produit.find({'shopid' : req.params.id},function(err){
        if(err){
            return  err;
        }
    });
      return res.send(elem);
}


module.exports = {
    oneProduit,updateProduit,createProduit,deleteProduit,listProduit,liste_produit_boutique
}


