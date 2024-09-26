import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log("server is running at port ", process.env.PORT); 
    })
})
.catch((error)=>{
    console.error("MONGO db connection failed : ", error); 

})













//const app = express()

//IIFE
// (async ()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//         app.on("error ", (error)=>{
//             console.error("Error : ", error)
//             throw error
//     })

//     app.listten(process.env.PORT, ()=>{
//         console.log(`app is listening on port ${process.env.PORT}`); 
//     })
//     }    catch (error) {
//         console.error("Error : ", error)
//         throw error
//     }

// })()