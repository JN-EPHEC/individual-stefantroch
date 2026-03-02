
import express from 'express';
import type { Request, Response } from 'express';
import userRoutes from './routes/userRoutes.js';
import etudiantsRoutes from './routes/etudiantsRoutes.js'
import sequelize from './config/database.js';
import './models/User.js'
import { requestLogger } from './middlewares/logger.js';
import { error } from 'node:console';
import { errorHandler } from './middlewares/errorHandler.js';
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./config/swagger";




const app = express();
const port = 3000;


/*app.get('/',(req : Request,res:Response) => {
    res.send('Bienvenue sur mon serveur API');
});*/
/*app.use((req,res,next)=>{
    console.log("REQUEST:", req.method, req.url);
    next();
});*/
// En premier de la liste des routes server.ts
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(requestLogger);
app.use('/',express.static('public'));
app.use(express.json());
app.use('/api/users',userRoutes);
app.use('/api',etudiantsRoutes );


app.use('/',express.static('public'));
app.use(express.json());
app.use('/api/users',userRoutes);
app.use('/api',etudiantsRoutes );


//base de données.
const startServer = async () =>{ 
    try {
        await sequelize.authenticate();
        console.log('connection reussie a la base de donnée');
        await sequelize.sync();
        console.log('All models were synchronized successfully.');
        app.listen(port,() =>{
        console.log(`Serveur lancé sur http://localhost:${port}`);
});
    }
    catch(error){
        console.log('Error connection base de donée', error);
    }
};
 

app.use(errorHandler);
//listenner


startServer()










/*function greet(name: string) : string {
    return `Salut c'est  ${name}!`;
}

let message = greet('Johnny')

console.log(message)*/



/* Pas noté dans les slides :

app.delete /personne /:id)
let id = req.param.id
gestion DB => dynamiser une route

middlewhere de validation

*/