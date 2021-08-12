const uuidv4 = require('uuid').v4();

const categoryModel = require("../models/categoryModel");

function generateId(){
    var found = false,
        sym ='azertyuiopmlkjhgfdsqwxcvbn',
        str = '';

        for(var i = 0; i< 14 ; i++){
            str += sym[parseInt(Math.random()*(sym.length))];
        }
        return str;
}



const createCategory =  function (req , res){
     const id = require('uuid').v4();
     const category = {
        id,
        name : req.body.name,
        description : req.body.description,
        imageUrl : req.body.imageUrl
     };
     var newCategory = new categoryModel(category);
     newCategory.save(function (err) {
    if (err) {
      return err;
    }
    console.log('New category: ' + newCategory );
  } );
     return res.send( req.Body); 
};
const listCategory = function (req , res){
    categories =  req.context.category.find(function(err,categories){
        if(err){
            return  err;
        }
         return  res.send(categories);
    });
    
};
const deleteCategory =  function (req , res){
    req.context.category.remove({id : req.params.id},function(err){
         if(err){
            return  err;
        };
        console.log("l'élement d'ID " + req.params.id +" a bien été supprimer");
    });
}

const updateCategorie = function (req , res){
    req.context.category.findOne({'id' : req.params.id},function(err,elem){
        if(err){
            return  err;
        }
        elem.name = req.body.name;
        elem.description = req.body.description;
        elem.imageUrl = req.body.imageUrl;

        elem.save(function (err) {
    if (err) {
      return err;
    }
    console.log('Update category: ' + req.body );
  } );

        return res.send(req.body);
    })
}

const oneCategory = function (req , res){
    elem =  req.context.category.find({'id' : req.params.id},function(err){
        if(err){
            return  err;
        }
    });
      return res.send(elem);
}

module.exports = {
    oneCategory,deleteCategory,createCategory,updateCategorie,listCategory
}
