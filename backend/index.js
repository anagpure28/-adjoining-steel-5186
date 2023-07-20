const express = require("express");
const connection = require("./db");
const userRouter = require("./routes/user.routes");

const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/users", userRouter);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log(`connected to DB at port ${process.env.PORT}`);
  } catch (error) {
    console.log(error.message);
  }
});
