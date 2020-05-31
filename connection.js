let mongoose = require("mongoose");
let conf = require('./conf');
let collection = "home-budget-test";
const connectionString = `mongodb+srv://jeetendra:${conf["mongo-password"]}@cluster0-s5s48.mongodb.net/${collection}?retryWrites=true&w=majority`;
async function connectMongo() {
    try {
        await mongoose.connect(connectionString, {
            useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
        });
    } catch(error) {
        console.log(error)
    }
}

connectMongo();