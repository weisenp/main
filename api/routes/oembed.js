const express = require("express");
const router = express.Router();

router.get("/oembed", (req, res) => {
  res.json({
    type: "photo",
    title: "POG SCREENSHOT",
    url: req.query.url,
    width: 1980,
    length: 1080,
    provider_name: "xboxs.one",
    provider_url: "https://i.xboxs.one",
  });
});

module.exports = router;
