import { createApp } from "./app";
import { db } from "./database";
require("dotenv").config();

const app = createApp();
const PORT = 9000;
db(
  "mongodb+srv://jodegauto:R6bNsmEF84AdiLRh@vorem.zly4i.mongodb.net/expressApp?retryWrites=true&w=majority"
).then(() => {
  app.listen(PORT, async () => {
    console.log("server connected to port:", PORT);
  });
});
