const mongoose = require('mongoose');

const username = "ShivamVish9450";
const password = "ShivamVish%409450";
const cluster = "clustershivam.j2zze";
const dbname = "vehicles_dms_db";

const uri = `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`;

mongoose.connect(uri, {
    useNewUrlParser: true, useUnifiedTopology: true
});

const mongodb = mongoose.connection;
console.log(`Mongoose Connection Ready State : ${mongoose.connection.readyState}`);
mongodb.on("error", console.error.bind(console, "connection error: "));
mongodb.once("open", function () {
  console.log("Mongo DB Connected successfully");
});

module.exports = mongodb;