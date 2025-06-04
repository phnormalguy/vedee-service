import express from 'express';
import { initialize } from 'express-openapi';
import router from './src/route';

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());

app.use("/",router)

const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger-output.json')


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.listen(5000,()=>{
    console.log(`Server is running on port ${5000}`)
});
 


