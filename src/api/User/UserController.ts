import { Request, Response } from 'express';
import UserService from './UserService';
import { UserInterface } from '../../interfaces/UserInterface';

class UserController {
  index = async (request: Request, response: Response) => {
    try {
      const users = await UserService.findAll();

      return response.json(users);
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ message: `${error.message}` });
      }
    }
  }

  show = async (request: Request, response: Response) => {
    try {
      const { id } = request.params;

      const user = await UserService.findById(id);

      return response.json(user);
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ message: `${error.message}` });
      }
    }
  }

  store = async (request: Request, response: Response) => {
    try {
      const { id, firstName, lastName, birth, email, password, isSuperUser, isActive }: UserInterface = request.body;

      const user = await UserService.create({
        id, firstName, lastName, birth, email, password, isSuperUser: false, isActive: false
      });

      return response.json(user);
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ message: `${error.message}` });
      }
    }
  }

  update = async (request: Request, response: Response) => {
    try {
      const { id } = request.params;
      const { firstName, lastName, birth, email, password, isSuperUser, isActive }: UserInterface = request.body;

      const user = await UserService.update({ id, firstName, lastName, birth, email, password, isSuperUser, isActive });

      return response.json(user);
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ message: `${error.message}` });
      }
    }
  }

  delete = async (request: Request, response: Response) => {
    try {
      const { id } = request.params;

      const user = await UserService.delete(id);

      return response.json(user);
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ message: `${error.message}` });
      }
    }
  }
}

export default new UserController();