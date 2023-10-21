const express = require("express");
const app = express();
const movieRoutes = require("./routes/movieRoutes");
const path = require("path");

app.use(express.json());
app.use("/files", movieRoutes);
app.use(express.static(path.join(__dirname, "public/uploads")));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
