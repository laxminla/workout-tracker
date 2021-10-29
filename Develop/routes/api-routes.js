const db = require("../models");
const router = require("express").Router()

// GET route to get the last workout 
router.get("/api/workouts", (req, res) => {
    db.Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout)
    })
    .catch(err => {
        res.json(err);
      });
});

// PUT route to update an exercise in the workout
router.put("/api/workouts/:id", (req, res) => {
console.log(req.body);
console.log(req.params.id);

db.Workout.findByIdAndUpdate (
    req.params.id,
    {
        $push: {
            exercises: req.body
        }
    },
    (error, dbWorkout) => {
        if (error) {
            res.send(error)
        } else {
            res.send(dbWorkout);
        }
    }
);
});

// POST route to create a workout
router.post("/api/workouts", (req, res) => {
    db.Workout.create({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});



// GET route to get workout in a range










module.exports = router;