import app from "@/app";
import "dotenv/config";

const PORT = process.env.PORT ?? 3000;

app
  .listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  })
  .on("error", (error) => {
    console.error("Failed to start server:", error);
  });
