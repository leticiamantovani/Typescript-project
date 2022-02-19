import { ICategoriesRepository } from '../../repositories/ICategoriesRepositories';

interface IRequest {
  name: string;
  description: string;
}

export class CreateCategoryUsecase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute({ description, name }: IRequest): void {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error('Category already exists');
    }
    this.categoriesRepository.create({ name, description });
  }
}
