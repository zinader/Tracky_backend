import express from "express";
const router = express.Router();
import Internship from "../models/internships_model.js";
// var cron = require("node-cron");

//get all internships
router.route("/").get((req, res) => {
  Internship.find({ status: true }).then((internships) =>
    res.json(internships)
  );
});

//adding a new item to  the internships
router.route("/add").post((req, res) => {
  const name = req.body.name;
  const description = req.body.description;
  const company = req.body.company;
  const location = req.body.location;
  const due_date = req.body.due_date;
  const remote = req.body.remote;
  const link = req.body.link;

  const newInternship = new Internship({
    name,
    description,
    company,
    location,
    due_date,
    remote,
    link,
  });

  newInternship
    .save()
    .then(() => res.json("Added to the Internships!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

//delete an item from the Internships
router.route("/:id").delete((req, res) => {
  Internship.findByIdAndDelete(req.params.id)
    .then(() => res.json("Item deleted!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/location/:id").get((req, res) => {
  //console.log(req.params.id);
  Internship.find({ location: req.params.id })
    .then((internships) => res.json(internships))
    .catch((err) => res.status(400).json("Error: " + err));
});

export default router;

// cron.schedule("1-31 * * * *", () => {
//   console.log("running every minute to 1 from 5");
// });
