import express from 'express'
import type { Request, Response } from 'express';
const router = express.Router();
const users = [
{ id: 1, name: "Alice" },
{ id: 2, name: "Bob" },
];



// will handle any request that ends in /events
// depends on where the router is "use()'d"

router.get('/users',(req : Request, res : Response) =>
{res.json(users);

});

export default router;