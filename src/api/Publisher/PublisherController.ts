import { Request, Response } from 'express';
import PublisherService from './PublisherService';
import { PublisherInterface } from '../../interfaces';

class PublisherController {
  index = async (request: Request, response: Response) => {
    try {
      const publishers = await PublisherService.findAll();

      return response.json(publishers);
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ message: `${error.message}` });
      }
    }
  }

  show = async (request: Request, response: Response) => {
    try {
      const { id } = request.params;

      const publisher = await PublisherService.findById(id);

      return response.json(publisher);
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ message: `${error.message}` });
      }
    }
  }

  store = async (request: Request, response: Response) => {
    try {
      const { id, name, alias, isActive }: PublisherInterface = request.body;

      const publisher = await PublisherService.create({ id, name, alias, isActive });

      return response.json(publisher);
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ message: `${error.message}` });
      }
    }
  }

  update = async (request: Request, response: Response) => {
    try {
      const { id } = request.params;
      const { name, alias, isActive }: PublisherInterface = request.body;

      const publisher = await PublisherService.update({id, name, alias, isActive});

      return response.json(publisher);
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ message: `${error.message}` });
      }
    }
  }

  delete = async (request: Request, response: Response) => {
    try {
      const { id } = request.params;

      const publisher = await PublisherService.delete(id);

      return response.json(publisher);
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ message: `${error.message}` });
      }
    }
  }
}

export default new PublisherController();