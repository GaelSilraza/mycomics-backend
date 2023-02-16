import { Publisher } from '../../database/models';
import { PublisherInterface } from '../../interfaces';

class PublisherService {
  findAll = async () => {
    return await Publisher.find();
  }

  findById = async (id: string) => {
    const publisher = await Publisher.findOneBy({ id });

    if (!publisher) {
      throw new Error('Editora não encontrado!');
    }

    return publisher;
  }

  create = async (attributes: PublisherInterface) => {
    const { id, name, alias, isActive } = attributes

    const verifyExistPublisher = await Publisher.findOneBy({ id, name, alias, isActive });

    if (verifyExistPublisher) {
      throw new Error('Editora já cadastrado!');
    }

    const publisher = Publisher.create({ name });

    return await publisher.save();
  }

  update = async (attributes: PublisherInterface) => {
    const { id, name, alias, isActive } = attributes;

    await this.findById(id);

    const publisher = await Publisher.update({ id }, { name, alias, isActive });

    return publisher;
  }

  delete = async (id: string) => {
    await this.findById(id);

    return Publisher.delete(id);
  }
}

export default new PublisherService();