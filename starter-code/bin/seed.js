require("../config/mongoose-setup");

const CelebrityModel = require("../models/celebrity.js");

const celebrityInfo = [
  {
    name: "Dr. DisRespect",
    occupation: "Twitch Streamer",
    catchPhrase: "I'm the Two-Time, back-to-back, blockbuster video game champion of the world.",
  },
  {
    name: "Nizar Khalife Iglesias",
    occupation: "Computer God",
    catchPhrase: "Pizza, pizza, pizza, pizza, pizza.",
  },
  {
    name: "Chu",
    occupation: "Full-time monster, part-time programmer",
    catchPhrase: "(silence)",
  },
];

CelebrityModel.create(celebrityInfo)
.then((celebrityResults)=> {
  console.log(`Inserted ${celebrityResults.length} celebrities`);
})
.catch((err)=> {
  console.log("Celebrity insert error!");
  console.log(err);
});
