import { Request, Response } from 'express';
import CreateuserService from '../services/CreateuserService';

class CreateuserController {

  async execute(request: Request, response: Response) {

    const createuserService = new CreateuserService()

    const { name, email, admim } = request.body;

    const user = await createuserService.execute({ name, email, admim })

    return response.json(user)
  }

}

export default CreateuserController;
