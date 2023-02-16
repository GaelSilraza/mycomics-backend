import { Request, Response } from 'express';
import SerializationService from './SerializationService';
import { SerializationInterface } from '../../interfaces';

class SerializationController {
  index = async (request: Request, response: Response) => {
    try {
      const serializations = await SerializationService.findAll();

      return response.json(serializations);
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ message: `${error.message}` });
      }
    }
  }

  show = async (request: Request, response: Response) => {
    try {
      const { id } = request.params;

      const serialization = await SerializationService.findById(id);

      return response.json(serialization);
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ message: `${error.message}` });
      }
    }
  }

  store = async (request: Request, response: Response) => {
    try {
      const {
        id,
        name,
        alias,
        featured,
        isVisible,
        ageGroup,
        synopsis,
        coverUrl,
        backgroundWallpaperUrl,
        status,
        startDate,
        endDate,
        publisherId,
        formatId
      }: SerializationInterface = request.body;

      const serialization = await SerializationService.create({
        id,
        name,
        alias,
        featured,
        isVisible,
        ageGroup,
        synopsis,
        coverUrl,
        backgroundWallpaperUrl,
        status,
        startDate,
        endDate,
        publisherId,
        formatId
      });

      return response.json(serialization);
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ message: `${error.message}` });
      }
    }
  }

  update = async (request: Request, response: Response) => {
    try {
      const { id } = request.params;
      const {
        name,
        alias,
        featured,
        isVisible,
        ageGroup,
        synopsis,
        coverUrl,
        backgroundWallpaperUrl,
        status,
        startDate,
        endDate,
        publisherId,
        formatId
      }: SerializationInterface = request.body;

      const serialization = await SerializationService.update({
        id,
        name,
        alias,
        featured,
        isVisible,
        ageGroup,
        synopsis,
        coverUrl,
        backgroundWallpaperUrl,
        status,
        startDate,
        endDate,
        publisherId,
        formatId
      });

      return response.json(serialization);
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ message: `${error.message}` });
      }
    }
  }

  delete = async (request: Request, response: Response) => {
    try {
      const { id } = request.params;

      const serialization = await SerializationService.delete(id);

      return response.json(serialization);
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ message: `${error.message}` });
      }
    }
  }
}

export default new SerializationController();
