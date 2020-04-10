const express = require("express");
const mongoose = require("mongoose");
const todosRouters = require("./routes/todos");
const exphbs = require("express-handlebars");
const path = require("path");
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

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.static(path.join(__dirname, "public")));
app.use(todosRouters);

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
    throw e;
  }
};
server();
