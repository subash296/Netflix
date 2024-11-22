import path from "path";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";


import authRoute from "./routes/authRoute.js"; 
import db  from "./config/db.js";
import {ENV_VARS} from "./config/envVars.js";
import movieRoute from "./routes/movieRoute.js";
import tvRoute from "./routes/tvRoute.js";
import searchRoute from "./routes/searchRoute.js";



const app=express();
const __dirname=path.resolve();
const PORT=ENV_VARS.PORT;



app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({extended:true}));

app.use("/api/v1/auth",authRoute)
app.use("/api/v1/movie",movieRoute)
app.use("/api/v1/tv",tvRoute)
app.use("/api/v1/search",searchRoute)
if (ENV_VARS.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/frontend/dist")));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
	});
}

app.listen(5000,()=>{
    db();
    
    console.log(`server is run on port ${PORT}`)
});


