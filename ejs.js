import express from "express"
import path from "path"


const __dirname = path.resolve();
const PORT = 3000;
const app = express();


app.set("view engine", "ejs");
app.set("views", `${__dirname}/ejs`);


app.get("/", (req, res) => {
  res.render("index", { title: "Main page", active: "main" });
});

app.get("/features", (req, res) => {
  res.render("features", { title: "Features page", active: "features" });
});


app.listen(PORT, () => {
  console.log(`Server has been started on port ${PORT} ...`);
});