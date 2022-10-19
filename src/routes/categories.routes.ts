import { Router } from "express";
import {
  createCategoriesController,
  listCategoriesController,
  listCategoriesIDController,
} from "../controllers/categories/categories.controller";
import { authUser } from "../middlewares/authUser.middleware";
import isAdminMiddleware from "../middlewares/isAdmin.middleware";

const categoriesRouter = Router();

categoriesRouter.post(
  "",
  authUser,
  isAdminMiddleware,
  createCategoriesController
);

categoriesRouter.get("", listCategoriesController);
categoriesRouter.get("/:id/properties", listCategoriesIDController);

export default categoriesRouter;
