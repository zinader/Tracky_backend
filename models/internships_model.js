import mongoose from "mongoose";

const Schema = mongoose.Schema;

//Internship information needed
const internshipSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: false },
    company: { type: Object, required: true },
    location: { type: String, required: true, default: "India" },
    due_date: { type: String, required: false },
    remote: { type: Boolean, default: false, required: false },
    link: { type: String, required: false },
    status: { type: Boolean, default: true, required: true },
  },
  {
    timestamps: true,
  }
);

const Internship = mongoose.model("Internship", internshipSchema);

export default Internship;
