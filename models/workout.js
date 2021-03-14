const mongoose = require("mongoose");
//const Schema = mongoose.Schema;
const { Schema } = mongoose;

const workoutSchema = new Schema({
  day: { type: Date, default: () => new Date() },
  exercises: [
    {
      type: {
        type: String,

        trim: true,
        required: "An exercise type is required",
      },
      name: {
        type: String,
        trim: true,
        required: "An exercise type is required",
      },
      duration: {
        type: Number,
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      distance: {
        type: Number,
      },
    },
  ],
});

console.log("im the wokout");
const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
