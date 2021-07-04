const express = require("express");
const router = express.Router();
const { nanoid } = require("nanoid");
const fs = require("fs");

router.get("/short", (req, res) => {
  if (req.query.key == "TheKey") {
    if (req.query.url) {
      randomString = nanoid(3);

      fs.mkdir(
        "/home/xboxs.one/s.xboxs.one/" + randomString + "/",
        function (err) {
          if (err) {
            res.send("failed to create directory " + err);
          }

          let file = `<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8' /><meta http-equiv='X-UA-Compatible' content='IE=edge' /><meta name='viewport' content='width=device-width, initial-scale=1.0' /><meta http-equiv='refresh' content='0; url=${req.query.url}' /></head><body></body></html>`;
          fs.writeFile(
            "/home/xboxs.one/s.xboxs.one/index.html",
            file,
            function (err) {
              if (err) {
                res.send("failed to create index.js " + err);
              }

              res.send(`https:/s.xboxs.one/${randomString}`);
            }
          );
        }
      );
    } else {
      res.send("Please enter the long url");
    }
  } else {
    res.send("Please enter the correct key");
  }

  //  res.json({});
});

module.exports = router;
