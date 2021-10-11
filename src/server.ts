import express from "express";
import * as dotenv from "dotenv";

import {router} from "./routes/sanseRoutes"
import { database } from "./config/database"

const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());

dotenv.config({path:"./config/configure.env"})

database();


//*routes
app.use(router);

const port:number = parseInt(process.env.PORT || "5000")
//console.log(process.env.PORT);

app.listen(port , ():void => {console.log(`server is running on ${port}`)})