import mongoose from "mongoose";
const AppearanceSchema = new mongoose.Schema({
  backgroundColor: { type: String, default: "#FFFFFF" },
  textColor: { type: String, default: "#333333" },
  font: { type: String, default: "Roboto" },
  textSize: { type: Number, default: 16 },
  voiceGender: { type: String, default: "female" },
  mute: { type: Boolean, default: false }
});
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  appearance: { type: AppearanceSchema, default: {} },
  history: [{ type: mongoose.Schema.Types.ObjectId, ref: "Chat" }],
  professionalProfile: { type: mongoose.Schema.Types.Mixed }
});
export default mongoose.model("User", UserSchema);