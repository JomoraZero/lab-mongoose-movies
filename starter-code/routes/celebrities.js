const express = require('express');
const CelebrityModel = require("../models/celebrity.js");
// const MovieModel = require("../models/review-model");
const router  = express.Router();


router.get('/celebrities', (req, res, next) => {
  CelebrityModel
  .find()
  .exec()
  .then((celebrityResults) => {
    res.locals.listOfCelebrities = celebrityResults;
    res.render('celebrities/index');
  })
  .catch((err)=> {
    next(err);
  });
});

router.get('/celebrities/new', (req, res, next) => {
  res.render("celebrities/new");
});

router.post("/celebrities", (req, res, next)=> {
  const theCeleb =  new CelebrityModel({
    name: req.body.celebName,
    occupation: req.body.celebOccupation,
    catchPhrase: req.body.celebCatchPhrase,
  });
  theCeleb.save()
  .then(()=> {
    res.redirect("/celebrities");
  })
  .catch((err)=> {
    next(err);
  }
);});

router.get("/celebrities/:celebId", (req, res, next)=> {
  CelebrityModel.findById(req.params.celebId)
  .then((celebFromDb) => {
    res.locals.celebDetails = celebFromDb;

    res.render("celebrities/show");
  })
  .catch((err) => {
    next(err);
  });
});



module.exports = router;
