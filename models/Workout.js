const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now
    },
    exercises: [
      {
        type: {
          type: String
        },
        name: {
          type: String,
          trim: true,
        },
        duration: {
          type: Number
        },
        distance: {
          type: Number
        },
        weight: {
          type: Number
        },
        reps: {
          type: Number
        },
        sets: {
          type: Number
        }
      }
    ]
  },

  {
    toJSON: {
      virtuals: true
    }
  }
);

WorkoutSchema.virtual("totalDuration").get(function () {
  var sumTotal = 0;
  this.exercises.forEach(object => {
    sumTotal += object.duration
  });
  return sumTotal;
});


// exporting the WorkoutSchema as a model
const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;