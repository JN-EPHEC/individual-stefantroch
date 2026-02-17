
// -------------------- imports --------------------
import express from 'express'
import type { Request, Response } from 'express';
import User from '../models/User.js'
import { INTEGER } from 'sequelize';
const router = express.Router();



// -------------------- Ancien tableau statique (peut etre supprimé) --------------------
/*const users = [
{ id: 1, name: "Alice" },
{ id: 2, name: "Bob" },
];*/


// -------------------- GET --------------------
router.get('/users', async (req: Request, res: Response) => {
    try {
        const users = await User.findAll(); // récupère tous les utilisateurs
        res.status(200).json(users);        // réponse coté client
    } 
    catch (error) {
        
        res.status(500).json({ error: "Erreur serveur" });
    }
});

// -------------------- POST --------------------
router.post('/users', async (req: Request, res: Response) => {
    if (!req.body){
        res.status(400).json({error : 'body vide'})
    }

    try {
        const newUSer = await User.create(req.body); // On recupere le body
        res.status(201).json({newUser : "utilisateur ajouté"}); // réponse coté client
    } 
    catch (error) {
        res.status(500).json({ error: "Impossible de créer l'utilisateur" });
    }
});

// -------------------- PUT --------------------
router.put('/users/:id', async (req: Request, res: Response) => {
    const id = Number(req.params.id);        // ID = Number !!!! (sinon chaine txt)
    try {
        const updatedUser = await User.update(
            req.body,   // données à mettre à jour
            { where: { id } }  // condition
        );

        res.status(200).json({ message: "Utilisateur mis à jour" });
    } catch (error) {
        res.status(500).json({ error: "Impossible de mettre à jour l'utilisateur" });
    }
});


// -------------------- DELETE --------------------
router.delete('/users/:id', async (req: Request, res : Response) =>{
    const id = Number(req.params.id);        // ID = Number !!!! (sinon chaine txt)
    try {
        const delUser = await User.destroy({
            where : {id : id}
        });
        if (delUser === 0){
            return res.status(404).json({message : "utilisateur n'existe pas"});
        }
        res.status(200).json({message : "Utilisateur supprimé"});
    }
    catch(error){
        res.status(500).json( {error : 'Erreur serveur '});
    }


});



export default router;





//Invoke-RestMethod -Uri http://localhost:3000/api/users/2 -Method DELETE
/*Invoke-RestMethod -Uri http://localhost:3000/api/users `
>> -Method POST `
>> -Headers @{"Content-Type"="application/json"} `
>> -Body '{"nom":"Troch","prenom":"Stefan"}'*/

