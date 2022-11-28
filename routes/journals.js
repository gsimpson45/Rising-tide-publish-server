const router = require("express").Router();
const middleware=require("../middleware/authMiddleware");
let Journal = require("../models/journal.model");

// router.route("/").get((req, res) => {
//   Journal.find()
//     .then((journals) => res.json(journals))
//     .catch((err) => res.status(400).json("Error: " + err));
// });
router.route("/get").post(async (req, res) => {
  const date= new Date(req.body.date.year, req.body.date.month-1, req.body.date.day,12);
  const username=  await middleware.isValidToken(req.body.token);
  try{

    if(username==null){
      res.status(401)
      throw new Error("Invalid username");
    }

    journal= await Journal.find({
        username: username, 
        date: date
      });

      if(journal==null){
        res.status(201).json(null);
      }

      res.status(201).json(journal)
  }catch(Error){
    res.json(null)
  };
})
router.route("/add").post(async (req, res) => {

  //Gets user inputted data
  const freeResponse = req.body.journal.freeResponse;

  const mood = req.body.journal.mood;

  const date = new Date(req.body.journal.date.year, req.body.journal.date.month-1,req.body.journal.date.day,12);

  const username=  await middleware.isValidToken(req.body.token);
  
  try{
    
    if(freeResponse==null){
      throw new Error("No input given")
    }
    const newJournal = new Journal({
      username: username,
      freeResponse: freeResponse,
      mood: mood,
      date: date,
    });

    //Deletes duplicate journal entry in database
    await Journal.findOneAndDelete(
      {username:username,
        date:date
      })
      
    newJournal
      .save()
      .then(() => res.status(201).json("Journal Added for user "+ username))
      .catch((err) => res.status(400).json(null));
  }catch(Error){
      res.status(401).json(null)
  }
});

router.route("/addHabit").post((req, res) => {
  const activity = req.body.activity;
  const isCompleted = req.body.isCompleted;
  const date = Date.parse(req.body.date);

  const newHabit = new Habit({
    activity,
    isCompleted,
    date,
  });

  newHabit
    .save()
    .then(() => res.json("Habit Added"))
    .catch((err) => res.status(400).json(null));
});

// router.route("/:id").get((req, res) => {
//   Journal.findById(req.params.id)
//     .then((journal) => res.json(journal))
//     .catch((err) => res.status(400).json("Error: " + err));
// });

// router.route("/:id").delete((req, res) => {
//   Journal.findByIdAndDelete(req.params.id)
//     .then(() => res.json("journal deleted."))
//     .catch((err) => res.status(400).json("Error: " + err));
// });

// router.route("/update/:id").post((req, res) => {
//   Journal.findById(req.params.id)
//     .then((journal) => {
//       journal.username = req.body.username;
//       journal.description = req.body.description;
//       journal.duration = Number(req.body.duration);
//       journal.date = Date.parse(req.body.date);

//       journal
//         .save()
//         .then(() => res.json("Journal updated!"))
//         .catch((err) => res.status(400).json("Error: " + err));
//     })
//     .catch((err) => res.status(400).json("Error: " + err));
// });

module.exports = router;
