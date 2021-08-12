
{

/**
*  @swagger
*  tags:
*    name: Category
*    description: API pour gérer les categorie
*/

/** 
*  @swagger
*   components:
*     schemas:
*       Category:
*         type: object
*         required:
*           - name
*           - description
*           - imageUrl
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
*          
*         example:
*            name: Produits de beaute 
*            description: Permet de définir un contenu pour la peau
*            imageUrl: https//:belimages.com/imagebeaute/beaute.png
*/

/**
* 
*  @swagger
*  paths:
*   /category:
*     get:
*       summary: Liste toutes les categorie
*       tags: [Category]
*       responses:
*         "200":
*           description: La liste des categorie.
*           content:
*             application/json:
*               schema:
*                 $ref: '#/components/schemas/Category'
*     post:
*       summary: Création d'une nouvelle categorie
*       tags: [Category]
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Category'
*       responses:
*         "200":
*           description: La nouvelle categorie crée.
*           content:
*             application/json:
*               schema:
*                 $ref: '#/components/schemas/Category'
*   /category/{id}:
*     get:
*       summary: Donne la categorie dont l'identifiant est "id"
*       tags: [Category]
*       parameters:
*         - in: path
*           name: id
*           schema:
*             type: integer
*           required: true
*           description: l'identifiant d'une categorie
*       responses:
*         "200":
*           description: Le contenu .
*           content:
*             application/json:
*               schema:
*                 $ref: '#/components/schemas/Catégory'
*         "404":
*           description: Erreur.
*     put:
*       summary: Mise à jour d'une categorie
*       tags: [Category]
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
*               $ref: '#/components/schemas/Category'
*       responses:
*         "204":
*           description: Mise à jour reussi !.
*         "404":
*           description:Erreur.
*     delete:
*       summary: Supprimer une categorie dont l'identifiant est "id"
*       tags: [Category]
*       parameters:
*         - in: path
*           name: id
*           schema:
*             type: integer
*           required: true
*           description: l'identifiant d'une categorie
*       responses:
*         "204":
*           description: Suppression réussi .
*         "404":
*           description: Erreur.
*/

}
