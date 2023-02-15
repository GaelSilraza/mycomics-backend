import { Tag } from "../../database/models";
import { TagInterface } from "../../interfaces/";

class TagService {
  findAll = async () => {
    return await Tag.find();
  }

  findById = async (id: string) => {
    const tag = await Tag.findOneBy({ id });

    if (!tag) {
      throw new Error('Tag não encontrada!');
    }

    return tag;
  }

  create = async (attributes: TagInterface) => {
    const { name, description } = attributes

    const verifyExistTag = await Tag.findOneBy({name});

    if (verifyExistTag) {
      throw new Error('Tag já cadastrada!');
    }

    const tag = Tag.create({ name, description });

    return await tag.save();
  }

  update = async (attributes: TagInterface) => {
    const { id, name, description } = attributes;

    await this.findById(id);

    const tag = await Tag.update({ id }, { name, description });

    return tag;
  }

  delete = async (id: string) => {
    await this.findById(id);

    return Tag.delete(id);
  }
}

export default new TagService();