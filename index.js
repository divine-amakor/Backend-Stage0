import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());

// GET /me endpoint
app.get("/me", async (req, res) => {
  const { USER_EMAIL, USER_NAME, USER_STACK, CAT_FACT_API } = process.env;

  try {
    // Fetch random cat fact
    const response = await axios.get(CAT_FACT_API, { timeout: 5000 });
    const fact = response.data.fact;

    // Construct response JSON
    const data = {
      status: "success",
      user: {
        email: USER_EMAIL,
        name: USER_NAME,
        stack: USER_STACK,
      },
      timestamp: new Date().toISOString(),
      fact: fact,
    };

    res.setHeader("Content-Type", "application/json");
    res.status(200).json(data);
  } catch (error) {
    console.error("Cat Facts API error:", error.message);

    // Graceful fallback
    const fallback = {
      status: "success",
      user: {
        email: USER_EMAIL,
        name: USER_NAME,
        stack: USER_STACK,
      },
      timestamp: new Date().toISOString(),
      fact: "Cats are mysterious creatures — fact source unavailable right now 🐾",
    };

    res.setHeader("Content-Type", "application/json");
    res.status(200).json(fallback);
  }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
