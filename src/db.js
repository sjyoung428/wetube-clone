import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/wetube", {
  //useNewUrlParser: true,
  //useUnifiedTopology: true,
  //useFindAndModify: false,
});

const db = mongoose.connection;

const handleError = (error) => {
  console.log("DB Error", error);
};
const handleOpen = () => {
  console.log("Connect to DB");
};
db.on("error", handleError);
db.once("open", handleOpen);