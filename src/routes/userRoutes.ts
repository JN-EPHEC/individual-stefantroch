import express from 'express'
import type { Request, Response } from 'express';
const router = express.Router();
import User from '../models/User.js'
//tab objet users statique
/*const users = [
{ id: 1, name: "Alice" },
{ id: 2, name: "Bob" },
];*/

// will handle any request that ends in /events
// depends on where the router is "use()'d"

router.get('/users', async (req : Request, res : Response) => {
    try {
        const users = await User.findAll();
        res.json(users);

    } 
    catch(error){
        res.status(500).json({error: "Erreur serveur"});
    }

});
router.post('/users', async (req : Request, res : Response)=>{
    console.log("jusqu'ici ca marche", req.body)
    try{
        const user = await User.create(req.body);
        
        res.status(201).json(user);

    }
    catch(error){
        res.status(500).json({error : 'Erreur du serveur'})
    }

}




);

export default router;