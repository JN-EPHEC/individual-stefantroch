
// -------------------- imports --------------------
import express from 'express'
import type { Request, Response } from 'express';
import User from '../models/User.js'
import { INTEGER } from 'sequelize';
import * as userController from "../controllers/userControllers.js"
const router = express.Router();



// -------------------- Ancien tableau statique (peut etre supprimé) --------------------
/*const users = [
{ id: 1, name: "Alice" },
{ id: 2, name: "Bob" },
];*/
//console.log(userController)
// -------------------- GET --------------------
router.get('/', userController.getAllUsers);

// -------------------- POST --------------------
router.post('/', userController.postNewUser)

// -------------------- PUT --------------------
router.put('/:id', userController.updatedUser )

// -------------------- DELETE --------------------
router.delete('/:id',userController.deleteUser)



export default router;





//Invoke-RestMethod -Uri http://localhost:3000/api/users/2 -Method DELETE
/*Invoke-RestMethod -Uri http://localhost:3000/api/users `
>> -Method POST `
>> -Headers @{"Content-Type"="application/json"} `
>> -Body '{"nom":"Troch","prenom":"Stefan"}'*/

