import { Serialization } from '../../database/models';
import { SerializationInterface } from '../../interfaces';

class SerializationService {
  findAll = async () => {
    return await Serialization.find();
  }

  findById = async (id: string) => {
    const serialization = await Serialization.findOne({
      where: { id },
      relations: {
        publisher: true,
        format: true
      }
    });

    if (!serialization) {
      throw new Error('Obra não encontrada!');
    }

    return serialization;
  }

  create = async (attributes: SerializationInterface) => {
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
    } = attributes

    const verifyExistSerialization = await Serialization.findOneBy({ name });

    if (verifyExistSerialization) {
      throw new Error('Obra já cadastrada!');
    }

    const serialization = Serialization.create({
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

    return await serialization.save();
  }

  update = async (attributes: SerializationInterface) => {
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
    } = attributes;

    await this.findById(id);

    const serialization = await Serialization.update({ id }, {
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

    return serialization;
  }

  delete = async (id: string) => {
    await this.findById(id);

    return Serialization.delete(id);
  }
}

export default new SerializationService();