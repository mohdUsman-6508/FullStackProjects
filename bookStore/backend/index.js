import express from "express";
import mongoose from "mongoose";
import { PORT, mongoDBURL } from "./config.js";
import booksRoute from "./routes/bookRoute.js";
import cors from "cors";

//#################################////
//step1:creating a server
//step2:creating a http request
//step3:mongoDB and mongoose
//step4: create models
//step5: create API (CRUDs)
//step6:MVC
//step7:CORS

//MODALVIEWCONTROLLER (MVC)
//#################################////

const app = express();

//middlewares
app.use(express.json()); //must for body parsing
app.use("/books", booksRoute); //routes
// app.use(cors()); //allow all ORIGINS with default of cors(*)
app.use(
  cors({
    origin: "http://localhost:5555",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
); //allow custom origins

app.get("/", (req, res) => {
  res.status(201).send("WELCOME TO BOOK STORE!");
});

mongoose
  .connect(mongoDBURL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Listening at PORT: ${PORT}`);
    });
    console.log("mongoDB connected");
  })
  .catch((err) => {
    console.log(err);
  });
