const express = require("express");
const app = express();

const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://soumya:soumya@bug-busters.n6lkkkq.mongodb.net/",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  }
);

const Cat = mongoose.model("Cat", { name: String });

const kitty = new Cat({ name: "Zildjian" });
kitty.save().then(() => console.log("meow"));

app.listen(5173, function () {
  console.log("Server is running on port: 3000");
});
