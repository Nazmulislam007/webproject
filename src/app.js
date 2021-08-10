const express = require("express");
const app = express();
const port = process.env.PORT || 3330;
const path = require("path");
const hbs = require("hbs");

const staticPath = path.join(__dirname, "../public");
const partialPath = path.join(__dirname, "../templete/partials");
const templetePath = path.join(__dirname, "../templete/views");

app.use(express.static(staticPath));
app.set("view engine", "hbs");
app.set("views", templetePath);
hbs.registerPartials(partialPath);

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log("listening");
});
