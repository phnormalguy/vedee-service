import { Router } from "express";
import { userController } from "./controller"; // Export an instance of UserController

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

router.post("/", (req, res) => {userController.createUser(req, res),console.log(req)});
router.get("/:id",(req,res)=>{
    userController.getOne(req,res),console.log('respone is :'),console.log(`${res.json}`)
});
router.get("/getDataTable",(req,res)=>{
    userController.getDataTable(req,res)
      
});
router.post("/login",(req,res)=>{
    userController.login(req,res);
    console.log(`${res.json}`)
})



export default router;