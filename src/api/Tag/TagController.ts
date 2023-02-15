import { Request, Response } from 'express';
import TagService from './TagService';
import { TagInterface } from '../../interfaces/';

class TagController {
  index = async (request: Request, response: Response) => {
    try {
      const tags = await TagService.findAll();

      return response.json(tags);
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ message: `${error.message}` });
      }
    }
  }

  show = async (request: Request, response: Response) => {
    try {
      const { id } = request.params;

      const tag = await TagService.findById(id);

      return response.json(tag);
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ message: `${error.message}` });
      }
    }
  }

  store = async (request: Request, response: Response) => {
    try {
      const { id, name, description }: TagInterface = request.body;

      const tag = await TagService.create({ id, name, description });

      return response.json(tag);
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ message: `${error.message}` });
      }
    }
  }

  update = async (request: Request, response: Response) => {
    try {
      const { id } = request.params;
      const { name, description }: TagInterface = request.body;

      const tag = await TagService.update({id, name, description});

      return response.json(tag);
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ message: `${error.message}` });
      }
    }
  }

  delete = async (request: Request, response: Response) => {
    try {
      const { id } = request.params;

      const tag = await TagService.delete(id);

      return response.json(tag);
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ message: `${error.message}` });
      }
    }
  }
}

export default new TagController();