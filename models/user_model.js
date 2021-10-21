import mongoose from "mongoose";

const Schema = mongoose.Schema;

//Internship information needed
const UserSchema = new Schema(
  {
    email: {
      type: String,
      lowercase: true,
      required: [true, "can't be blank"],
      match: [/\S+@\S+\.\S+/, "is invalid"],
      index: true,
      unique: true,
    },
    opportunities: {
      type: Array ,
      default: []
    },
    fullName: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema);

export default User;
