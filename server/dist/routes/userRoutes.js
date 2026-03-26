// -------------------- imports --------------------
import express from 'express';
import User from '../models/User.js';
import { INTEGER } from 'sequelize';
import * as userController from "../controllers/userControllers.js";
import checkIdParam from "../middlewares/checkIdParam.js";
const router = express.Router();
// -------------------- GET --------------------
/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Récupère la liste des utilisateurs
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Succès
 *       500:
 *         description : Erreur du serveur
 */
router.get('/', userController.getAllUsers);
// -------------------- POST --------------------
/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Ajoute un nouvel utilisateur
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: John
 *     responses:
 *       201:
 *         description: Utilisateur créé
 *       400:
 *         description: Données non conformes
 *       500:
 *         description: Erreur du serveur
 */
router.post('/', userController.postNewUser);
// -------------------- PUT --------------------
/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     summary: Modifie un utilisateur
 *     tags: [Users]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID de l'utilisateur
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Bob
 *     responses:
 *       200:
 *         description: Utilisateur modifié
 *       404:
 *         description: Utilisateur non trouvé
 *       400:
 *         description: Données invalides
 *       500:
 *         description: Erreur serveur
 */
router.put('/:id', checkIdParam, userController.updatedUser);
// -------------------- DELETE --------------------
/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: Supprime un utilisateur
 *     tags: [Users]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID de l'utilisateur
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Utilisateur supprimé
 *       404:
 *         description: Utilisateur non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.delete('/:id', checkIdParam, userController.deleteUser);
export default router;
//Invoke-RestMethod -Uri http://localhost:3000/api/users/2 -Method DELETE
/*Invoke-RestMethod -Uri http://localhost:3000/api/users `
>> -Method POST `
>> -Headers @{"Content-Type"="application/json"} `
>> -Body '{"nom":"Troch","prenom":"Stefan"}'*/
//# sourceMappingURL=userRoutes.js.map