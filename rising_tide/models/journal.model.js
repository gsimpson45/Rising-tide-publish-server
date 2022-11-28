const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// const dateSchema= new Schema({
//     day:{type: Number, required: true},
//     month:{type: String, required: true},
//     year:{type: Number, required: true}
// });
const journalSchema = new Schema(
  {
    username:{type: String, required: true},
    date: { type: Date, required: true },
    freeResponse: { type: String, required: true },
    mood: { type: String, required: true }
    
  },
  {
    timestamps: true,
  }
);

const journal = mongoose.model("journal", journalSchema);
module.exports = journal;
