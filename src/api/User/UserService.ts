import { User } from "../../database/models";
import { UserInterface } from "../../interfaces/";

class UserService {
  findAll = async () => {
    return await User.find();
  }

  findById = async (id: string) => {
    const user = await User.findOneBy({ id });

    if (!user) {
      throw new Error('Usuário não encontrado!');
    }

    return user;
  }

  create = async (attributes: UserInterface) => {
    const { firstName, lastName, birth, email, password, isSuperUser, isActive } = attributes

    const verifyExistEmail = await User.findOneBy({ email });

    if (verifyExistEmail) {
      throw new Error('E-mail já registrado!');
    }

    const user = User.create({ firstName, lastName, birth, email, password, isSuperUser, isActive });

    return await user.save();
  }

  update = async (attributes: UserInterface) => {
    const { id, firstName, lastName, birth, email, password, isSuperUser, isActive } = attributes;

    await this.findById(id);

    const user = await User.update({ id }, {
      firstName,
      lastName,
      birth,
      email,
      password,
      isSuperUser,
      isActive
    });

    return user;
  }

  delete = async (id: string) => {
    await this.findById(id);

    return User.delete(id);
  }
}

export default new UserService();