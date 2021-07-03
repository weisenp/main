const express = require("express");
const router = express.Router();
const requestImageSize = require("request-image-size");

router.get("/oembed", async (req, res) => {
  size = await requestImageSize(req.query.url);
  console.log(size.height);

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

module.exports = router;
