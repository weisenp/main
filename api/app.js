var express = require("express");
var app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/api", require("./routes/oembed"));
app.use("/api", require("./routes/short"));

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
