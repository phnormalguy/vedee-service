import { Router } from "express";
import { postController } from "./controller"; // Export an instance of UserController

const router = Router();

// /**
//  * @swagger
//  * /users/:
//  *   post:
//  *     summary: Create a new user
//  *     consumes:
//  *       - application/json
//  *     parameters:
//  *       - in: body
//  *         name: body
//  *         required: true`
//  *         schema:
//  *           type: object
//  *           properties:
//  *             username:
//  *               type: string
//  *             email:
//  *               type: string
//  *             password:
//  *               type: string
//  *             display_name:
//  *               type: string
//  *     responses:
//  *       200:
//  *         description: User created
//  */

router.post("/", (req, res) => {postController.create(req, res),console.log(req)});




export default router;