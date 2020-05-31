const mongoose = require("mongoose");
const { format } = require('date-fns');

const ExpenseSchema = mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        min: 1,
    },
    // total: {
    //     type: Number,
    //     min: 1,
    //     validate(value) {
    //         if(value < 0) 
    //         throw new Error("Total must me greater than zero");
    //     }
    // },
    date: {
        type: Date,
        default: format(new Date(), 'yyyy-MM-dd'),
    }
});

const Expense = new mongoose.model('Expense', ExpenseSchema);

module.exports = Expense;