const { MongoClient } = require("mongodb");
require("dotenv").config();
const client = new MongoClient(process.env.Local_Database);
console.log(client);
module.exports = { client };