import app from "@/app";
import { PORT } from "@/utils/config";

app
  .listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  })
  .on("error", (error) => {
    console.error("Failed to start server:", error);
  });
