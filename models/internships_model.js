import mongoose from "mongoose";

const Schema = mongoose.Schema;

//Internship information needed
const internshipSchema = new Schema(
  {

  	
    name: { type: String, required: true },
    description: { type: String, required: false },
    company: { type: String, required: true },
    location:{type:String,required:true},
    due_date:{type:String,required:false},
    remote:{type: Boolean,required:false},
    link:{type: String,required:false},
    
  },
  {
    timestamps: true
  }
);

const Internship = mongoose.model("Internship", internshipSchema);

export default Internship;