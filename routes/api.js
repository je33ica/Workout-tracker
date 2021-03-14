const router = require("express").Router();
const db = require("../models/index");
//psuedo code for api routes to create that correspond with api.js in public

//getLastWorkout
router.get("/api/workouts", (req, res) => {
  db.Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: "$exercises.duration",
        },
      },
    },
  ])
    .then((dbWorkouts) => {
      console.log("workouts duration", dbWorkouts);
      res.json(dbWorkouts);
    })
    .catch((err) => {
      res.json(err);
    });
});

//addExercise  method: "PUT",
router.put("/api/workouts/:id", ({ body, params }, res) => {
  console.log("response in api", { body, params });
  db.Workout.findByIdAndUpdate(
    params.id,
    { $push: { exercises: body } },
    //findByIdAndUpdate(), etc. new option is now false by default.
    //The MongoDB server assumes false by default, this change is so
    // mongoose is more consistent with the server's API.
    //need to explicitly set the option to true to get the new version of
    // the doc, after the update is applied:
    { new: true }
  )
    .then((dbWorkouts) => {
      res.json(dbWorkouts);
    })
    .catch((err) => {
      res.json(err);
    });
});

//createWorkout method: "POST",
router.post("/api/workouts", (req, res) => {
  db.Workout.create({})
    .then((dbWorkouts) => {
      res.json(dbWorkouts);
    })
    .catch((err) => {
      res.json(err);
    });
});

//WHAT IS THE RANGE IM GETTING ?
//getWorkoutsInRange
router.get("/api/workouts/range", (req, res) => {
  db.Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: "$exercises.duration",
        },
      },
    },
  ])
    //should return the last 10 entries in descending date order
    // .sort({ date: -1 })
    .limit(7)
    .then((dbWorkouts) => {
      res.json(dbWorkouts);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
