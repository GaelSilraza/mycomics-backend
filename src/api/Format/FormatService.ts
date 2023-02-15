import { Format } from "../../database/models";
import { FormatInterface } from "../../interfaces/";

class FormatService {
  findAll = async () => {
    return await Format.find();
  }

  findById = async (id: string) => {
    const format = await Format.findOneBy({ id });

    if (!format) {
      throw new Error('Formato não encontrado!');
    }

    return format;
  }

  create = async (attributes: FormatInterface) => {
    const { name } = attributes

    const verifyExistFormat = await Format.findOneBy({name});

    if (verifyExistFormat) {
      throw new Error('Formato já cadastrado!');
    }

    const format = Format.create({ name });

    return await format.save();
  }

  update = async (attributes: FormatInterface) => {
    const { id, name } = attributes;

    await this.findById(id);

    const format = await Format.update({ id }, { name });

    return format;
  }

  delete = async (id: string) => {
    await this.findById(id);

    return Format.delete(id);
  }
}

export default new FormatService();