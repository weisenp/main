const express = require("express");
const router = express.Router();
const { nanoid } = require("nanoid");
const fs = require("fs");

router.get("/short", (req, res) => {
  if (req.query.key == "TheKey") {
    if (req.query.url) {
      randomString = nanoid(5);

      fs.mkdir("../../../s.xboxs.one/" + randomString + "/");
    } else {
      res.send("Please enter the long url");
    }
  } else {
    res.send("Please enter the correct key");
  }

  //  res.json({});
});

module.exports = router;