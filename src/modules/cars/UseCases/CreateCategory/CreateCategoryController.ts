import { Request, Response } from 'express';

import { CreateCategoryUsecase } from './CreateCategoryUsecase';

export class CreateCategoryController {
  constructor(private createCategoryUsecase: CreateCategoryUsecase) {}

  handle(request: Request, response: Response) {
    const { name, description } = request.body;

    this.createCategoryUsecase.execute({ name, description });

    return response.status(201).send();
  }
}
