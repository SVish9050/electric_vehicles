const { MongoClient, ServerApiVersion } = require('mongodb');

const username = "ShivamVish9450";
const password = "ShivamVish%409450";
const cluster = "clustershivam.j2zze";
const dbname = "vehicles_dms_db";

const uri = `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/?retryWrites=true&w=majority`;
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1
  };
  let db;
  
MongoClient.connect(uri, options,(err, client) => {
    if (err) throw err;
    console.log("Connected successfully to Mongo Server");
    db = client.db(database);
});

module.exports = {
    getDb: function() {
      return db;
    }
};