import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  userName: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  sex: { type: String, required: true },
  age: { type: Number, required: true },
  id: { type: Number },
});

export default mongoose.model("User", userSchema);
