
import express from 'express';
import type { Request, Response } from 'express';
import userRoutes from './routes/userRoutes.js';
import sequelize from './config/database.js';

const app = express();
const port = 3000;
const etudiants =[ 
    {id : 1, nom : "Dupond", prenom : 'Jean'},
    { id: 2, nom: "Martin", prenom: "Sophie" },
    { id: 3, nom: "Doe", prenom: "John" },
];

app.get('/',(req : Request,res:Response) => {
    res.send('Bienvenue sur mon serveur API');
});

app.use('/api',userRoutes);
app.get('/api/data', (req : Request, res: Response) =>
{res.json(etudiants);

});
//base de données.
const startServer = async () =>{ 
    try {
        await sequelize.authenticate();
        console.log('connection reussie a la base de donnée');
    }
    catch(error){
        console.log('Error connection base de donée', error);
    }
};



//listenner
app.listen(port,() =>{
    console.log(`Serveur lancé sur http://localhost:${port}`);
});

startServer()










/*function greet(name: string) : string {
    return `Salut c'est  ${name}!`;
}

let message = greet('Johnny')

console.log(message)*/