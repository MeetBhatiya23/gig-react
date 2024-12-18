import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.routes.js";
import gigRouter from "./routes/gig.routes.js";
import conversationRouter from "./routes/conversation.routes.js";
import messageRouter from "./routes/message.routes.js";
import orderRouter from "./routes/order.routes.js";
import reviewRouter from "./routes/review.routes.js";
import authRouter from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors"


const app = express();
// const cors = {
//   origin: "http://localhost:5173",
//   credentials: true,
// }
dotenv.config();
mongoose.set("strictQuery", true);
// app.use(cors())
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser())

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("MONGO IS CONNECT !");
  } catch (error) {
    console.log(error);
  }
};

app.use("/app", authRouter);
app.use("/app", userRouter);
app.use("/app", gigRouter);
app.use("/app", conversationRouter);
app.use("/app", messageRouter);
app.use("/app", orderRouter);
app.use("/app", reviewRouter);
app.use((err, req, res, next) => {
  console.log(err);
  const status = err.status || 500;
  const message = err.message || "something went wrong !";
  return res.status(status).send(message);
})

app.listen(process.env.PORT, () => {
  connect();
  console.log("BackEnd server id Running !");
  console.log(`http://localhost:${process.env.PORT}`);
});
