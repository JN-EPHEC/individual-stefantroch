import type {Request, Response} from "express";
import User from '../models/User';


export const getAllUsers = async (req: Request, res: Response) => {
const users = await User.findAll();
res.status(200).json(users);

};


export const postNewUser = async (req:Request,res : Response) =>{
    if (!req.body){
        res.status(400).json({error : 'body vide'})
    }
        const newUSer = await User.create(req.body); // On recupere le body
        res.status(201).json({newUser : "utilisateur ajouté"}); // réponse coté client
};


export const updatedUser = async (req : Request, res : Response) =>{
    const id = Number(req.params.id);        // ID = Number !!!! (sinon chaine txt)
        const updatedUser = await User.update(
            req.body,   // données à mettre à jour
            { where: { id } }  // condition
        );

        res.status(200).json({ message: "Utilisateur mis à jour" });
};

export const deleteUser = async (req :Request, res : Response) =>{
    const id = Number(req.params.id);        // ID = Number !!!! (sinon chaine txt)
        const deleteUser = await User.destroy({
            where : {id} 
        });
        if (deleteUser === 0){
            return res.status(404).json({message : "Cet utilisateur n'existe pas"});
        
        }
        res.status(200).json({message : "Utilisateur supprimé"});
};

