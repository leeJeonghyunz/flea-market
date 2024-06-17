import mongoose from "mongoose";

mongoose.connect(`mongodb://127.0.0.1:27017/flea-market`);

const db = mongoose.connection;

db.on("error", (error) => console.log("Errors", error));
db.once("open", () => console.log("Open DB!"));
