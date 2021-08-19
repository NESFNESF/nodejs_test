

const shopModel = require("../models/shopModel");
const createshop = function  (req , res){

    req.context.shop.find(function(err,shops){
        if(err){
            return  err;
        }
       

        const ids =  shops.length + 1;
     const shop = {
        id : ids,
        name : req.body.name,
        description : req.body.description,
        imageUrl : req.body.imageUrl,
        ref : req.body.ref,
        longitude : req.body.longitude,
        latitude : req.body.latitude,
        categoryList : req.body.categoryList
     };
     var newshop = new shopModel(shop);
     newshop.save(function (err) {
    if (err) {
      return err;
    }
    console.log('New shop: ' + shop );
    return res.send( shop);
  } );
     
    });
   

    
};


     

const listshop =  function (req , res){
   req.context.shop.find(function(err,shops){
        if(err){
            return  err;
        }
         return  res.send(shops);
    });
   
};
const deleteshop = function (req , res){
    req.context.shop.remove({id : req.params.id},function(err,elem){
         if(err){
            return  err;
        };
        console.log("la boutique d'ID " + req.params.id +" a bien été supprimer");
        return res.send(elem);
    });
}

const updateshop = function (req , res){
    req.context.shop.findOne({'id' : req.params.id},function(err,elem){
        if(err){
            return  err;
        }
        elem.name = req.body.name;
        elem.description = req.body.description;
        elem.imageUrl = req.body.imageUrl;
        elem.ref = req.body.ref;
        elem.longitude = req.body.longitude;
        elem.latitude = req.body.latitude;
       

        elem.save(function (err) {
    if (err) {
      return err;
    }
    console.log('Update Boutique: ' + elem );
    return res.send(elem);
  } );

        
    })
}

const oneshop= function (req , res){
    req.context.shop.find({'id' : req.params.id},function(err,elem){
        if(err){
            return  err;
        }
         return res.send(elem);
    });
     
}

const shop_by_category = function (req , res){
   let liste_element = [];
    req.context.category.find({},'id name',function(err,categorie){
        if(err){
            return  console.log(err);
        }
        const categories = categorie;
        req.context.shop.find({},'categoryList name',function(err,shop){
                if(err){
                    return  console.log(err);
                }
                const shops = shop;
                
    for (var i = 0 ; i < categories.length; i ++){
        var cat = categories[i].id;
        var l_e = [];
         for (var k = shops.length - 1; k >= 0; k--) {
             var l_c = shops[k].categoryList;
             for (var j = l_c.length - 1; j >= 0; j--) {
                 if(l_c[j]=== cat){
                    l_e.push(shops[k].name);
                 }

             }
     }

     liste_element.push({Category : categories.name , shops : l_e});
    console.log(liste_element);
    }
    return res.send(liste_element);
            });

    });
    


    


}

module.exports = {
    oneshop,updateshop,createshop,deleteshop,listshop,shop_by_category
}


