const router = require("express").Router();
const path = require("path");

// GET method routes
//match up to front end provided- exercise,index,stats
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

//dont forget to export!
module.exports = router;
