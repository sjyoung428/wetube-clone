import express from "express";
import {
  getEdit,
  postEdit,
  see,
  logout,
  startGithubLogin,
  finishGithubLogin,
  getChangePassword,
  postChangePassword,
} from "../controllers/userController";
import {
  loggedInOnlyMiddleware,
  loggedOutOnlyMiddleware,
  avatarUpload,
} from "../middleware";
const userRouter = express.Router();

userRouter.get("/logout", logout, loggedInOnlyMiddleware);
userRouter
  .route("/edit")
  .all(loggedInOnlyMiddleware)
  .get(getEdit)
  .post(avatarUpload.single("avatar"), postEdit);
userRouter
  .route("/change-password")
  .all(loggedInOnlyMiddleware)
  .get(getChangePassword)
  .post(postChangePassword);
userRouter.get("/github/start", startGithubLogin, loggedOutOnlyMiddleware);
userRouter.get("/github/finish", finishGithubLogin, loggedOutOnlyMiddleware);

userRouter.get("/:id", see);

export default userRouter;
