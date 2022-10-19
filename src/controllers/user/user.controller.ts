import { Request, Response } from "express";
import userCreateService from "../../services/user/userCreate.service";
import userDeleteService from "../../services/user/userDelete.service";
import userListService from "../../services/user/userList.service";
import userUpdateService from "../../services/user/userUpdate.service";

const userCreateController = async (req: Request, res: Response) => {
  const { name, email, password, isAdm } = req.body;
  const newUser = await userCreateService({ name, email, password, isAdm });
  return res.status(201).send(newUser);
};

const userListController = async (req: Request, res: Response) => {
  const users = await userListService();
  return res.send(users);
};

const userDeleteController = async (req: Request, res: Response) => {
  const { id } = req.params;
  await userDeleteService(id);
  return res.status(204).json({ message: "User deleted with sucess!" });
};

const userUpdateController = async (req: Request, res: Response) => {
  const dataUser = req.body;
  const { id } = req.params;
  const [message, status] = await userUpdateService(dataUser, id);
  return res.status(status as number).json(message);
};

export {
  userCreateController,
  userListController,
  userDeleteController,
  userUpdateController,
};
