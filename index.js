const express = require("express");
const {
  parsed: { PORT },
} = require("./config/config");

const app = express();
const port = PORT || 9001;

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`server has been started on port ${port}!`));
