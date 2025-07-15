const express = require('express');
const { ObjectId, MongoClient } = require('mongodb');
const cors = require('cors');
require('dotenv').config()

const app = express();
app.use(express.json());
app.use(cors());

let client;
const initializeDBAndServer = async () => {
    const username = encodeURIComponent(process.env.USER_NAME);
    const password = encodeURIComponent(process.env.PASSWORD);

    const uri = `mongodb+srv://${username}:${password}@cluster0.yqd3ckv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

    client = new MongoClient(uri);

    try {
        await client.connect();
        console.log("Connected to MongoDB.....");
        app.listen(3000, () => {
            console.log('Server running on port: 3000');
        });
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
        process.exit(1);
    }
};

initializeDBAndServer();


app.post("/add-heading", async (request, responce)=>{
    try{
        const collection = client.db(process.env.DATABASE_NAME).collection(process.env.COLLECTION_NAME); 
        const {heading} = request.body
        if(!heading){
            return responce.status(401).send({error : "Heading cannot be empty"})
        }

        const result = await collection.updateOne(
            { _id: new ObjectId("6875a4659c5091c928b71236") }, 
            { $set: { heading: heading } } 
            );
        responce.send({result})

    }catch(e){
        console.log({error : e.message})
    }
} )

app.get("/", async (request, responce)=>{
    try{
        const collection = client.db(process.env.DATABASE_NAME).collection(process.env.COLLECTION_NAME); 
        const data = await collection.findOne()

        responce.send(data)

    }catch(e){
        console.log({error : e.message})
    }
} )