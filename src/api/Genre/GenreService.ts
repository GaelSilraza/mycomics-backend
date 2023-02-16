import { Genre } from '../../database/models';
import { GenreInterface } from '../../interfaces/';

class GenreService {
  findAll = async () => {
    return await Genre.find();
  }

  findById = async (id: string) => {
    const genre = await Genre.findOneBy({ id });

    if (!genre) {
      throw new Error('Gênero não encontrado!');
    }

    return genre;
  }

  create = async (attributes: GenreInterface) => {
    const { name } = attributes

    const verifyExistGenre = await Genre.findOneBy({name});

    if (verifyExistGenre) {
      throw new Error('Gênero já cadastrado!');
    }

    const genre = Genre.create({ name });

    return await genre.save();
  }

  update = async (attributes: GenreInterface) => {
    const { id, name } = attributes;

    await this.findById(id);

    const genre = await Genre.update({ id }, { name });

    return genre;
  }

  delete = async (id: string) => {
    await this.findById(id);

    return Genre.delete(id);
  }
}

export default new GenreService();