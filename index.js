const express = require("express");
const mongoose = require("mongoose");
const exphbs = require("express-handlebars");
const {
  parsed: { PORT, DB },
} = require("./config/config");

const app = express();
const hbs = exphbs.create({
  defaultLayout: "index",
  extname: "hbs",
});

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "views");

const server = async () => {
  try {
    await mongoose.connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    app.listen(PORT, () =>
      console.log(`server has been started on port ${PORT}!`)
    );
  } catch (e) {
    console.log(e);
  }
};
server();

app.get("/", (req, res) => res.send("Hello World!"));
