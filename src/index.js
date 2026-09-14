import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

import connectDB from "./db/index.js";
import { app } from "./app.js";

const PORT = Number(process.env.PORT) || 7000;

connectDB()
    .then(() => {

        const server = app.listen(PORT, "0.0.0.0", () => {
            console.log("=================================");
            console.log("SERVER STARTED");
            console.log("PORT:", PORT);
            console.log("ADDRESS:", server.address());
            console.log("=================================");
        });

        server.on("error", (error) => {
            console.log("SERVER ERROR:", error);
        });
    })
    .catch((err) => {
        console.log("MONGODB CONNECTION FAILED:", err);
    });






    
// import expres from 'express'
// const app = expres()

// (async () => {
// try {
//  await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//  app.on("error", error => {
//     console.log("ERROR :",error );
//     throw error
//  })

//  app.listen(process.env.PORT, () => {
//     console.log(`app is listening....`);
    
//  })
// } catch (error) {
//     console.error("ERROR : ", error);
//     throw error
// }
// })()

