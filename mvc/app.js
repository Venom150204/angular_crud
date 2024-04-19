const express = require("express");
const app = express();
const router = require("./routes/emp.routes");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", router);

app.listen(3000, () => {
  console.log("listening...");
});
