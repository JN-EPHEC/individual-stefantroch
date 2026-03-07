// Dans src/config/swagger.ts
import swaggerJsdoc from "swagger-jsdoc";


const swaggerOptions = {
definition: {
openapi: "3.0.0",
info: {
title: "Mon API woup woupp",
version: "1.0.0",
},
},
// Chemin vers les fichiers contenant les annotations
apis: ["server/src/routes/*.ts"],
};


export const swaggerSpec = swaggerJsdoc(swaggerOptions);

