const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//const { Schema } = mongoose;

const workoutSchema = new Schema({
  day: { type: Date, default: Date.now },
  exercises: [
    {
      type: {
        type: String,
        //enum: specifies the set of allowed values for the field.
        // enum: ["Resistance", "Cardio"],
        //don't think i will need thes due to the front end already provided
        // lowercase: true,
        // trim: true,
        // required: [true, "An exercise type is required"],
      },
      name: {
        type: String,
        // lowercase: true,
        // trim: true,
        // required: [true, "What is the name of the exercise?"],
      },
      duration: {
        type: Number,
        // min: 1,
        // max: 60,
        // required: true,
      },
      weight: {
        type: Number,
        // min: 0,
        // max: 1000,
      },
      reps: {
        type: Number,
        // min: 1,
        // max: 100,
      },
      sets: {
        type: Number,
        // min: 1,
        // max: 50,
      },
      distance: {
        type: Number,
        // min: 1,
        // max: 1000,
      },
    },
  ],

  //If you want the virtual field to be displayed on client side,
  // then set {virtuals: true} for toObject and toJSON in schema
  // },
  // { toJSON: { virtuals: true } }
});

// //mdn reduce, array.map
// workoutSchema.virtual("totalDuration").get(function () {
//   const duration = this.exercises.reduce((acc, cur) => {
//     return acc + cur.duration;
//   }, 0);

//   return duration;
// });

// //acc = accumulator, cur = current value
// workoutSchema.virtual("totalDistance").get(function () {
//   const distance = this.exercises.reduce((acc, cur) => {
//     if (cur.age) {
//       return acc + cur.distance;
//     }

//     return acc;
//   }, 0);

//   return distance;
// });

//the total duration was not showing so we set a virtual field which will create the
//duration but not send it or store it in the db

//workoutSchema.virtual("totalDuration").get(function () {});

// adds a dynamically-created property to schema
// workoutSchema.virtual("totalDuration").get(function () {
//   // "reduce" array of exercises down to just the sum of their durations
//   return this.exercises.reduce((total, exercise) => {
//     return total + exercise.duration;
//   }, 0);
// });

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
