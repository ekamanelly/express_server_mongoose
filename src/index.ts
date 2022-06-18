import { createApp } from "./app";
import { db } from "./database";
// require("dotenv").config();

const app = createApp();
const PORT = 9000;
db(
  "mongodb+srv://your_mongodb_string"
).then(() => {
  app.listen(PORT, async () => {
    console.log("server connected to port:", PORT);
  });
});
