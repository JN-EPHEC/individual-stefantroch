
import express from 'express';
import userRoutes from './routes/userRoutes.js';
import etudiantsRoutes from './routes/etudiantsRoutes.js'
import sequelize from './config/database.js';
import './models/User.js'
import { requestLogger } from './middlewares/logger.js';
import { errorHandler } from './middlewares/errorHandler.js';
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./config/swagger.js";
import cors from 'cors';
import User from './models/User.js';

const app = express();
const port = 3000;

// ----------------- MIDDLEWARES -----------------
app.use(cors()); // Autorise tout le monde (dev)
app.use(express.json());
app.use(requestLogger);


// ----------------- SWAGGER -----------------
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));


// ----------------- ROUTES -----------------
app.use('/', express.static('public'));
app.use('/api/users',userRoutes);
app.use('/api',etudiantsRoutes );


// Errorhandler

app.use(errorHandler);


// ----------------- START SERVER -----------------
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
 


startServer()

