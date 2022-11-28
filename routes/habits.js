const router = require("express").Router();
let Habit = require("../models/habit.model");
const middleware=require("../middleware/authMiddleware");


router.route("/get").post(async (req, res) => {
  const date= new Date(req.body.date.year, req.body.date.month-1, req.body.date.day,12);
  const username=  await middleware.isValidToken(req.body.token);
  try{

    if(username==null || req.body.token==null){
      res.status(401)
      throw new Error("Invalid username");
    }

    habit= await Habit.find({
        username: username, 
        date: date,
        isCompleted: true

      });

      if(habit==null){
        res.status(201).json(null);
      }

      res.status(201).json(habit)
  }catch(Error){
    res.json(null)
  };
})

router.route("/add").post(async (req, res) => {

    //Gets user inputted data

      const tempDate=req.body.habit.completionDate;

      const activity = req.body.habit.activity;

      const isCompleted = req.body.habit.isCompleted;

      const date = new Date(tempDate.year, tempDate.month-1,tempDate.day,12);

      const username=  await middleware.isValidToken(req.body.token);

    try{
      //If no authentification given an error is thrown
      if(username==null){
        res.status(401);
        throw new Error("No user found");
      }

      const newHabit = new Habit({
        username:username,
        activity,
        isCompleted,
        date,
      });

      //Deletes duplicate habit entry in database
      await Habit.findOneAndDelete({username,activity});

      //Saves habit
      newHabit
        .save()
        .then(() => res.status(201).json("Habit Added"))
        .catch((err) => res.status(400).json(null));

    }catch(Error){
        res.json(null)
    }
});

module.exports = router;
