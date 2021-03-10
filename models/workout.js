var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var workoutSchema = new Schema({
  day: { type: Date, default: new Date() },
  exercise: [
    {
      type: {
        type: String,
        //enum: specifies the set of allowed values for the field.
        enum: ["Resistance", "Cardio"],
        //don't think i will need thes due to the front end already provided
        // lowercase: true,
        // trim: true,
        required: [true, "An exercise type is required"],
      },
      name: {
        type: String,
        lowercase: true,
        trim: true,
        required: [true, "What is the name of the exercise?"],
      },
      duration: {
        type: Number,
        min: 1,
        max: 60,
        required: true,
      },
      weight: {
        type: Number,
        min: 0,
        max: 1000,
      },
      reps: {
        type: Number,
        min: 1,
        max: 100,
      },
      sets: {
        type: Number,
        min: 1,
        max: 50,
      },
      distance: {
        type: Number,
        min: 1,
        max: 1000,
      },
    },
  ],
});

var Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
