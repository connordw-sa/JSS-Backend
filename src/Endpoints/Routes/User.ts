import express from "express";

const userRouter = express.Router();

userRouter.get("/user", async (req, res, next) => {
  res.send("Sup");
});

export default userRouter;
