import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./routes/authRoutes";
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/auth", authRoutes);
app.get("/", (req, res) => {
  res.send("InfoSage backend running!");
});
const PORT = process.env.PORT || 4000;
mongoose.connect(process.env.MONGO_URI || "mongodb://localhost/infosage")
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error("Database connection error:", err);
  });