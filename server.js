//dependencies
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

//local or enviromental for hosting on Heroku
const PORT = process.env.PORT || 3000;

const app = express();

//uses morgan- HTTP request logger middleware for node.js
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
//Set up default mongoose connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

// routes
app.use(require("./routes/api.js"));
app.use(require("./routes/html.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
