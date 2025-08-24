import mongoose from "mongoose";
const MessageSchema = new mongoose.Schema({
  text: { type: String },
  timestamp: { type: Date, default: Date.now },
  sender: { type: String },
  type: { type: String, enum: ["text", "voice", "media"], default: "text" }
});
const ChatSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: { type: String },
  messages: [MessageSchema],
  context: { type: mongoose.Schema.Types.Mixed }
});
export default mongoose.model("Chat", ChatSchema);