require("dotenv").config(); 

const {MongoClient, ServerDescription} = require("mongodb")

const client = new MongoClient(process.env.MONGO_URI)

const connection = async()=>{
    try{
        await client.connect();
        console.log("success");
        const db = client.db("Films");
        return db.collection("Films")
    } catch(error){
        console.log(error);
    }
};

//test to check connection.
// connection();

module.exports = {connection, client}