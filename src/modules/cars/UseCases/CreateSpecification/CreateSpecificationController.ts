import { Request, Response } from 'express';

import { CreateSpecificationUsecase } from './CreateSpecificationUsecase';

export class CreateSpecificationController {
  constructor(private createSpecificationUsecase: CreateSpecificationUsecase) {}

  handle(request: Request, response: Response) {
    const { name, description } = request.body;

    this.createSpecificationUsecase.execute({ name, description });

    return response.status(201).send();
  }
}
