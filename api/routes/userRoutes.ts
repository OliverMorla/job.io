import express, { NextFunction, Request, Response } from "express";

const userRouter = express.Router();

const isAuthenticated = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const account = false;
  if (account) {
    return next();
  }
};

userRouter.get(
  "/dashboard",
  isAuthenticated,
  async (req: Request, res: Response) => {
    res
      .json({
        message: "User dashboard route!",
      })
      .status(200);
  }
);

userRouter.get("/login", async (req: Request, res: Response) => {
  res
    .json({
      message: "Login route!",
    })
    .status(200);
});

userRouter.get("/register", async (req: Request, res: Response) => {
  res
    .json({
      message: "Register route!",
    })
    .status(200);
});

export default userRouter;
