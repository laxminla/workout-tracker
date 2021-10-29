// required dependency
const path = require("path");
// emporting router method
const router = require("express").Router();

// get route for index.html page
router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

// GET route for exercise html page
router.get("/exercise", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

// GET route for stats.html page
router.get("/stats", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

// exporting routes to the server
module.exports = router