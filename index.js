let express = require("express");
let mongoose = require("mongoose");
const bodyParser = require('body-parser');
require('./connection');
let UserModel = require('./models/user');
let ExpenseModel = require('./models/expense');

let endOfDay = require('date-fns/endOfDay');
let startOfDay = require('date-fns/startOfDay');

const app = express();
app.use(bodyParser.json());

app.use(express.static('./static'));

app.post('/expenses', async (req, res) => {
    try {
        await ExpenseModel.insertMany(req.body);
        console.log("Saved");
        res.send("Data saved.");
    } catch (error) {
        console.log(error);
    }
});

app.get('/expenses', async (req, res) => {
    try {
        const expenses = await ExpenseModel.find({
            date: {
                $gte: startOfDay(new Date()),
                $lte: endOfDay(new Date())
            }
        });
        res.send(expenses);


    } catch (error) {
        console.log(error);
    }
});


app.listen("3000", () => {
    console.log("Running on port 3000");
});
