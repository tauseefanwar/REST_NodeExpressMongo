const express = require("express");
const http = require("http");
const mongoose = require("mongoose");
const alienRouter = require("./routers/routes");

const app = express();

app.use(express.json());

const url =
  "mongodb+srv://DB1:Password1!@db1.lrandit.mongodb.net/?retryWrites=true&w=majority";

// DB connection

const connectionParams = {
  useNewUrlParser: true,
  // useCreateIndex: true,
  useUnifiedTopology: true,
};

// mongoose.connect(url,connectionParams)
//     .then( () => {
//         console.log('Connected to database ')
//     })
//     .catch( (err) => {
//         console.error(`Error connecting to the database. \n${err}`);
//     })

mongoose.connect(url, connectionParams);
const con = mongoose.connection;

con.on("open", () => {
  try {
    console.log("connected...!!!");
  } catch (error) {
    console.log(error);
  }
});

//routing
app.use("/aliens", alienRouter);
const port = 9000;

app.listen(9000, () => {
  console.log(`running on ${port}`);
});
