import { Request, Response } from 'express';
import StafferService from './StafferService';
import { StafferInterface } from '../../interfaces';

class StafferController {
  index = async (request: Request, response: Response) => {
    try {
      const staffers = await StafferService.findAll();

      return response.json(staffers);
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ message: `${error.message}` });
      }
    }
  }

  show = async (request: Request, response: Response) => {
    try {
      const { id } = request.params;

      const staffer = await StafferService.findById(id);

      return response.json(staffer);
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ message: `${error.message}` });
      }
    }
  }

  store = async (request: Request, response: Response) => {
    try {
      const { id, name, role, description }: StafferInterface = request.body;

      const staffer = await StafferService.create({ id, name, role, description });

      return response.json(staffer);
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ message: `${error.message}` });
      }
    }
  }

  update = async (request: Request, response: Response) => {
    try {
      const { id } = request.params;
      const { name, role, description }: StafferInterface = request.body;

      const staffer = await StafferService.update({ id, name, role, description });

      return response.json(staffer);
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ message: `${error.message}` });
      }
    }
  }

  delete = async (request: Request, response: Response) => {
    try {
      const { id } = request.params;

      const staffer = await StafferService.delete(id);

      return response.json(staffer);
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ message: `${error.message}` });
      }
    }
  }
}

export default new StafferController();