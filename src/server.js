import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import categoryAPI from "./routers/categoryAPI.js"
import userAPI from "./routers/userAPI.js";
import productAPI from "./routers/productAPI.js";
import subCategoryAPI from "./routers/subCategory.js";
import shopAPI from "./routers/shopAPI.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3002;
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Route
app.use("/v1/api/", categoryAPI);
app.use("/v1/api/", userAPI);
app.use("/v1/api/", productAPI);
app.use("/v1/api/", subCategoryAPI);
app.use("/v1/api/", shopAPI);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

.then(() => {
  console.log("Connected to the database!");
})
.catch((err) => {
  console.error("Failed to connect to the database:", err);
});

app.listen(port, () => {
console.log(`Server is running on http://localhost:${port}`);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
