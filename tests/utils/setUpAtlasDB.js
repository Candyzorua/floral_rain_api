
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://jiaying:M-Feb-1475-0122@floralrain.ctccrqt.mongodb.net/v1?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");

        // configs
        const dbName = "v1";
        const collectionName = "translations";

        // create references to the database and collection in order to run
        // operations on them.
        const database = client.db(dbName);
        const collection = database.collection(collectionName);

        // get dictionary data
        cedict = require('../../src/assets/cedict.js')

        try {
            const insertManyResult = await collection.insertMany(cedict);
            console.log(`${insertManyResult.insertedCount} documents successfully inserted.\n`);
        } catch (err) {
            console.error(`Something went wrong trying to insert the new documents: ${err}\n`);
        }
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);