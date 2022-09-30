const express = require("express");
const cors = require("cors")
const bodyParser = require("body-parser");
require("dotenv").config();

const port = process.env.PORT;
const app = express();
app.use(cors({ origin: "http://localhost:3000" }));
app.use(bodyParser.json())

const loginRoutes = require("./routes/loginRoutes");
const userProfileRoute = require("./routes/userProfileRoute");
const songsRoutes = require("./routes/songsRoute");
const featuredPlaylistsRoutes = require("./routes/featuredPlaylistRoute");
const searchQueryRoute = require("./routes/searchQueryRoute");

app.use("/api",loginRoutes)
app.use("/api",userProfileRoute)
app.use("/api",songsRoutes)
app.use("/api",featuredPlaylistsRoutes)
app.use("/api",searchQueryRoute)

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});

