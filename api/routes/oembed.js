const express = require("express");
const router = express.Router();
const requestImageSize = require("request-image-size");

router.get("/oembed", (req, res) => {
  size = requestImageSize(req.query.url);
  console.log(size.width);

  res.json({
    type: "photo",
    title: "POG SCREENSHOT",
    url: req.query.url,
    thumbnail_url: req.query.url,
    thumbnail_width: 1980,
    thumbnail_height: 1080,
    width: 1980,
    length: 1080,
    provider_name: "xboxs.one",
    provider_url: "https://i.xboxs.one",
    html: "<img src=" + req.query.url + ">",
  });
});

module.exports = router;
