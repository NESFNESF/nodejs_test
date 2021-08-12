
{

/**
*  @swagger
*  tags:
*    name: Boutique
*    description: API pour gérer les boutiques
*/

/** 
*  @swagger
*   components:
*     schemas:
*       Shop:
*         type: object
*         required:
*           - name
*           - description
*           - imageUrl
*           - ref
*           - longitude
*           - latitude
*           - categoriesList
*         properties:
*           id:
*             type: integer
*             description: L'identifiant généré automatiquement.
*           name:
*             type: string
*             description: Le nom d'une categorie
*           description:
*             type: string
*             description: La description d'une categorie
*           imageUrl:
*             type: string
*             description: Le lien vers l'image d'une categorie
*           ref:
*             type: string
*             description: reference
*           longitude:
*             type: string
*             description: La longitude
*           latitude:
*             type: string
*             description: La latitude
*           categoriesList:
*             type: string
*             description: Tableau contenant les identifiants des categories
* 
*          
*         example:
*            name: Boutique de cosmetique 
*            description: ici tout vos produits cosmetiques
*            imageUrl: https//:belimages.com/imagebeaute/consmetique.png 
*            ref: reference
*            longitude: 23_56_56
*            latitude: 34_56_24
*            categoriesList: [1,2,3,4]
* 
*/

/**
* 
*  @swagger
*  paths:
*   /shop:
*     get:
*       summary: Liste toutes les Boutiques
*       tags: [Boutique]
*       responses:
*         "200":
*           description: La liste des Boutiques.
*           content:
*             application/json:
*               schema:
*                 $ref: '#/components/schemas/shop'
*     post:
*       summary: Création d'une nouvelle Boutique
*       tags: [Boutique]
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/shop'
*       responses:
*         "200":
*           description: La nouvelle Boutique crée.
*           content:
*             application/json:
*               schema:
*                 $ref: '#/components/schemas/shop'
*   /shop/{id}:
*     get:
*       summary: Donne la Boutique dont l'identifiant est "id"
*       tags: [Boutique]
*       parameters:
*         - in: path
*           name: id
*           schema:
*             type: integer
*           required: true
*           description: l'identifiant d'une Boutique
*       responses:
*         "200":
*           description: Le contenu .
*           content:
*             application/json:
*               schema:
*                 $ref: '#/components/schemas/shop'
*         "404":
*           description: Erreur.
*     put:
*       summary: Mise à jour d'une Boutique
*       tags: [Boutique]
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
*               $ref: '#/components/schemas/shop'
*       responses:
*         "204":
*           description: Mise à jour reussi !.
*         "404":
*           description:Erreur.
*     delete:
*       summary: Supprimer une Boutique dont l'identifiant est "id"
*       tags: [Boutique]
*       parameters:
*         - in: path
*           name: id
*           schema:
*             type: integer
*           required: true
*           description: l'identifiant d'une Boutique
*       responses:
*         "204":
*           description: Suppression réussi .
*         "404":
*           description: Erreur.
*
*   //shop_by_category:
*     get:
*       summary: Liste des boutiques par categories
*       tags: [Boutique]
*       responses:
*         "200":
*           description: La liste des produits d'une boutique.
*           content:
*             application/json:
*               schema:
*                 $ref: '#/components/schemas/shop'
* 
*   
*  
* 
* 
* 
*/

}
