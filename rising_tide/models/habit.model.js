const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// const dateSchema= new Schema({
//     day:{type: Number, required: true},
//     month:{type: String, required: true},
//     year:{type: Number, required: true}
// });
const habitSchema = new Schema(
  {
    username: {type: String, required: true},
    activity: { type: String, required: true },
    isCompleted: { type: Boolean, required: true },
    date: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

const habit = mongoose.model("habit", habitSchema);
module.exports = habit;
