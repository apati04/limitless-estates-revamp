const express = require("express");
const helmet = require("helmet");
const compression = require("compression");

const app = express();
const PORT = process.env.PORT || 5000;
app.use(helmet());
app.use(compression());
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.resolve(__dirname, "client", "build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
app.listen(PORT, () => {
  console.log("server on port ", PORT);
});
