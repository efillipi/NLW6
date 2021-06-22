import { getCustomRepository } from "typeorm";
import User from "../entities/User";
import UserRepositories from "../repositories/UserRepositories";

interface IUserRequest {
  name: string;
  email: string;
  admim?: boolean;
}

class CreateuserService {

  async execute({ email, name, admim }: IUserRequest): Promise<User> {

    const usersRepository = getCustomRepository(UserRepositories);

    if (!email) {
      throw new Error("Email incorrect")
    }

    const userAlreadyExists = await usersRepository.findOne({
      email
    });

    if (userAlreadyExists) {
      throw new Error("User already exists ")
    }

    const user = usersRepository.create({
      name,
      email,
      admim,
    })

    await usersRepository.save(user)

    return user;

  }
}

export default CreateuserService;
