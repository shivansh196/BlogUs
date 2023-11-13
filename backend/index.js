//import dotenv module for environment varables
const dotenv = require('dotenv');
const mongodb = require('mongodb');
const app = require('./server');
const UserDAO = require('./dao/userDAO');

dotenv.config();
const uri = process.env.CONNECTION_STRING;
const port = process.env.PORT || 5000;

const main = async ()=> {
  // Create a MongoClient with a MongoClientOptions object to set the Stable API version
  const client = new mongodb.MongoClient(uri, {
    serverApi: {
      version: mongodb.ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

  try {
    // Connect the client to the server
    await client.connect();
    await UserDAO.injectDB(client);
    
    app.listen(port,()=> {
      console.log(`Backend is running on port: ${port}`);
    })
    console.log("You successfully connected to MongoDB!");
  } catch(e) {
    console.error(e);
    process.exit(1)
  }
}

main().catch(console.error);