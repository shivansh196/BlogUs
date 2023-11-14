import app from './server.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

async function main(){
    dotenv.config();
    const url = process.env.CONNECTION_STRING;
    const port = process.env.PORT || 5000;
    
    try {
        //connect to the mongoDB cluster
        await mongoose.connect(url);
        
        console.log("Connected to mongodb_atlas");
        app.listen(port,()=>{
            console.log(`server is running on port : ${port}`);
        })
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
}

main().catch(console.error);