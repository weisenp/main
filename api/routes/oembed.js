const express = require("express");
const router = express.Router();
const requestImageSize = require("request-image-size");
const { nanoid } = require("nanoid");
const fs = require("fs");

router.get("/oembed", async (req, res) => {
  size = await requestImageSize(req.query.url);

  res.json({
    type: "photo",
    title: "POG SCREENSHOT",
    url: req.query.url,
    thumbnail_url: req.query.url,
    thumbnail_width: size.width,
    thumbnail_height: size.height,
    width: size.width,
    length: size.height,
    provider_name: "xboxs.one",
    provider_url: "https://i.xboxs.one",
    html: "<img src=" + req.query.url + ">",
  });
});

router.get("/short", (req, res) => {
  if (req.query.key == "TheKey") {
    if (req.query.url) {
      randomString = nanoid(5);

      fs.mkdir(randomString + "/", function (err) {
        if (err) {
          console.log("failed to create directory", err);
          res.send("failed to create directory" + err);
        }

        res.send("created");
      });
    } else {
      res.send("Please enter the long url");
    }
  } else {
    res.send("Please enter the correct key");
  }
});

module.exports = router;
