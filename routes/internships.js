import express from "express";
const router = express.Router();
import {
  getAllInternships,
  addInternship,
  deleteInternship,
  getInternshipsByLocation,
} from "../controllers/internships_controller.js";

router.get("/", getAllInternships);

router.post("/add", addInternship);

router.delete("/:id", deleteInternship);

router.get("/location/:id", getInternshipsByLocation);

export default router;
