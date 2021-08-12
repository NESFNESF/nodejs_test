const uuidv4 = require('uuid').v4();

const shopModel = require("../models/shopModel");
const createshop = function  (req , res){
     const id =  require('uuid').v4();
     const shop = {
        id,
        name : req.body.name,
        description : req.body.description,
        imageUrl : req.body.imageUrl,
        ref : req.body.ref,
        longitude : req.body.longitude,
        latitude : req.body.latitude,
        categoryList : req.body.tab
     };
     var newshop = new shopModel(shop);
     newshop.save(function (err) {
    if (err) {
      return err;
    }
    console.log('New shop: ' + newshop );
  } );
     return res.send( req.Body);
};
const listshop =  function (req , res){
    shops =  req.context.shop.find(function(err,shops){
        if(err){
            return  err;
        }
        return shops;
    });
    return  res.send(shops);
};
const deleteshop = function (req , res){
    req.context.shop.remove({id : req.params.id},function(err){
         if(err){
            return  err;
        };
        console.log("la boutique d'ID " + req.params.id +" a bien été supprimer");
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
       

        elem.save(function (err) {
    if (err) {
      return err;
    }
    console.log('Update Boutique: ' + req.body );
  } );

        return res.send(req.body);
    })
}

const oneshop= function (req , res){
    elem =  req.context.shop.find({'id' : req.params.id},function(err){
        if(err){
            return  err;
        }
    });
      return res.send(elem);
}

const shop_by_category = function (req , res){
   const liste_element = [];
    categories =  req.context.category.find({},'id name',function(err,categories){
        if(err){
            return  err;
        }
         return  categories;
    });
    var  shops =  req.context.shop.find({},'categoryList name',function(err,shops){
        if(err){
            return  err;
        }
        return shops;
    });

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

    }

    return res.status(200).json(liste_element);


}

module.exports = {
    oneshop,updateshop,createshop,deleteshop,listshop,shop_by_category
}


