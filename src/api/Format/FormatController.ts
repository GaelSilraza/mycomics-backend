import { Request, Response } from 'express';
import FormatService from './FormatService';
import { FormatInterface } from '../../interfaces/';

class FormatController {
  index = async (request: Request, response: Response) => {
    try {
      const formats = await FormatService.findAll();

      return response.json(formats);
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ message: `${error.message}` });
      }
    }
  }

  show = async (request: Request, response: Response) => {
    try {
      const { id } = request.params;

      const format = await FormatService.findById(id);

      return response.json(format);
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ message: `${error.message}` });
      }
    }
  }

  store = async (request: Request, response: Response) => {
    try {
      const { id, name }: FormatInterface = request.body;

      const format = await FormatService.create({ id, name });

      return response.json(format);
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ message: `${error.message}` });
      }
    }
  }

  update = async (request: Request, response: Response) => {
    try {
      const { id } = request.params;
      const { name }: FormatInterface = request.body;

      const format = await FormatService.update({id, name});

      return response.json(format);
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ message: `${error.message}` });
      }
    }
  }

  delete = async (request: Request, response: Response) => {
    try {
      const { id } = request.params;

      const format = await FormatService.delete(id);

      return response.json(format);
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ message: `${error.message}` });
      }
    }
  }
}

export default new FormatController();