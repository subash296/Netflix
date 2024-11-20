import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";


import authRoute from "./routes/authRoute.js"; 
import db  from "./config/db.js";
import {ENV_VARS} from "./config/envVars.js";
const app=express();
const PORT=ENV_VARS.PORT;



app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({extended:true}));

app.use("/api/v1/auth",authRoute)

app.listen(5000,()=>{
    db();
    
    console.log(`server is run on port ${PORT}`)
});