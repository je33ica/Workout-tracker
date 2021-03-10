const router = require("express").Router();
const db = require("../models");
//psuedo code for api routes to create that correspond with api.js in public

//getLastWorkout
router.get("/api/workouts");

//addExercise  method: "PUT",
router.put("/api/workouts/" + id);

//createWorkout method: "POST",
router.post("/api/workouts");

//getWorkoutsInRange
module.exports = router;
