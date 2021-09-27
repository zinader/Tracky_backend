import Internship from "../models/internships_model.js";

export const getAllInternships = (req, res) => {
  Internship.find({ status: true })
    .then((internships) => res.json(internships))
    .catch((err) => res.status(400).json({ error: err }));
};

export const addInternship = (req, res) => {
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
};

export const deleteInternship = (req, res) => {
  Internship.findByIdAndDelete(req.params.id)
    .then(() => res.json("Item deleted!"))
    .catch((err) => res.status(400).json("Error: " + err));
};

export const getInternshipsByLocation = (req, res) => {
  Internship.find({ location: req.params.id })
    .then((internships) => res.json(internships))
    .catch((err) => res.status(400).json("Error: " + err));
};
