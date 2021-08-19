

const categoryModel = require("../models/categoryModel");




const createCategory =  function (req , res){
    req.context.category.find(function(err,categories){
        if(err){
            return  err;
        }
         
        const idl = categories.length + 1 ;
     const category = {
        id : idl,
        name : req.body.name,
        description : req.body.description,
        imageUrl : req.body.imageUrl
     };
     var newCategory = new categoryModel(category);
     newCategory.save(function (err) {
    if (err) {
      return consloe.log(err);
    }
    console.log('New category: ' + category );
    return res.send( category);
  } );
      
    });

    

};
const listCategory = function (req , res){
    req.context.category.find(function(err,categories){
        if(err){
            return  err;
        }
         return  res.send(categories);
    });
    
};
const deleteCategory =  function (req , res){
    req.context.category.remove({id : req.params.id},function(err,elem){
         if(err){
            return  err;
        };
        console.log("l'élement d'ID " + req.params.id +" a bien été supprimer");
         return res.send(elem);
    });
}

const updateCategorie = function (req , res){
    req.context.category.findOne({id : req.params.id},function(err,elem){
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
    console.log('Update category: ' + elem );
    return res.send(elem);
  } );

        
    });
}

const oneCategory = function (req , res){
    req.context.category.find({id : req.params.id},function(err,elem){
        if(err){
            return  console.log(err);
        }
        return res.send(elem);
    });
      
}

module.exports = {
    oneCategory,deleteCategory,createCategory,updateCategorie,listCategory
}
