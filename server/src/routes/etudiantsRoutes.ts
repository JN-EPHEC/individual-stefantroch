
//importer module express from 'express' depuis nodes_modules
import express from 'express'
//importer uniquement les types voulus de express
import type {Request, Response} from 'express'
//definir une instance de router pour gérer les routes
const router = express.Router();
//constante pour les données des étudiants
const etudiants =[ 
    {id : 1, nom : "Dupond", prenom : 'Jean'},
    { id: 2, nom: "Martin", prenom: "Sophie" },
    { id: 3, nom: "Doe", prenom: "John" },
];

//defini la route etdudiant
router.get('/etudiants', (req : Request, res : Response)=>{
    res.json(etudiants)
});


// a définir pour bonus, methode get et post pour bonus. ca sera stylé

export default router