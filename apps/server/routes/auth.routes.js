const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
  if (!req.session.loggedin || req.session.loggedin !== true) {
    req.session.destroy();
    return res.redirect("/logout");
  } else {
    if (req.session.role !== 1) {
      req.session.destroy();
      return res.redirect("/logout");
    }
  }
  next();
});

module.exports = router;
