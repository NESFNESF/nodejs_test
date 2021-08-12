
{

/**
*  @swagger
*  tags:
*    name: Produit
*    description: API pour gérer les Produits
*/

/** 
*  @swagger
*   components:
*     schemas:
*       Produit:
*         type: object
*         required:
*           - name
*           - description
*           - imageUrl
*           - price
*           - shopid
*         properties:
*           id:
*             type: integer
*             description: L'identifiant généré automatiquement.
*           name:
*             type: string
*             description: Le nom d'un Produit
*           description:
*             type: string
*             description: La description d'un Produit
*           imageUrl:
*             type: string
*             description: Le lien vers l'image d'un Produit
*           price:
*             type: number
*             description: Le prix d'un Produit
*           shopid:
*             type: number
*             description: l'identifiant de la boutique du produit
*          
*         example:
*            name: Carreau white 
*            description: Permet d'eclaircir la peau
*            imageUrl: https//:belimages.com/imagebeaute/beaute.png
*            price: 45
*            shopid: 13
*/

/**
* 
*  @swagger
*  paths:
*   /produit:
*     get:
*       summary: Liste toutes les Produit
*       tags: [Produit]
*       responses:
*         "200":
*           description: La liste des Produits.
*           content:
*             application/json:
*               schema:
*                 $ref: '#/components/schemas/Produit'
*     post:
*       summary: Création d'une nouvelle Produit
*       tags: [Produit]
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Produit'
*       responses:
*         "200":
*           description: Le nouveau Produit crée.
*           content:
*             application/json:
*               schema:
*                 $ref: '#/components/schemas/Produit'
*   /produit/{id}:
*     get:
*       summary: Donne le produit dont l'identifiant est "id"
*       tags: [Produit]
*       parameters:
*         - in: path
*           name: id
*           schema:
*             type: integer
*           required: true
*           description: l'identifiant d'un produit
*       responses:
*         "200":
*           description: Le contenu .
*           content:
*             application/json:
*               schema:
*                 $ref: '#/components/schemas/Produit'
*         "404":
*           description: Erreur.
*     put:
*       summary: Mise à jour d'un Produit
*       tags: [Produit]
*       parameters:
*         - in: path
*           name: id
*           schema:
*             type: integer
*           required: true
*           description: Le contenu .
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Produit'
*       responses:
*         "204":
*           description: Mise à jour reussi !.
*         "404":
*           description:Erreur.
*     delete:
*       summary: Supprimer un Produit dont l'identifiant est "id"
*       tags: [Produit]
*       parameters:
*         - in: path
*           name: id
*           schema:
*             type: integer
*           required: true
*           description: l'identifiant d'un Produit
*       responses:
*         "204":
*           description: Suppression réussi .
*         "404":
*           description: Erreur.
* 
*   /produit/shop/{id}:
*     get:
*       summary: Liste de tous les Produits d'une boutique
*       tags: [Produit]
*       responses:
*         "200":
*           description: La liste des Produits d'une boutique d'ID .
*           content:
*             application/json:
*               schema:
*                 $ref: '#/components/schemas/Produit'
*     
*/

}
