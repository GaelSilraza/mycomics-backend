import { Staffer } from '../../database/models';
import { StafferInterface } from '../../interfaces';

class StafferService {
  findAll = async () => {
    return await Staffer.find();
  }

  findById = async (id: string) => {
    const staffer = await Staffer.findOneBy({ id });

    if (!staffer) {
      throw new Error('Integrante da produção da obra não encontrado!');
    }

    return staffer;
  }

  create = async (attributes: StafferInterface) => {
    const { name, role, description } = attributes

    const staffer = Staffer.create({ name, role, description });

    return await staffer.save();
  }

  update = async (attributes: StafferInterface) => {
    const { id, name, role, description } = attributes;

    await this.findById(id);

    const staffer = await Staffer.update({ id }, { name, role, description });

    return staffer;
  }

  delete = async (id: string) => {
    await this.findById(id);

    return Staffer.delete(id);
  }
}

export default new StafferService();