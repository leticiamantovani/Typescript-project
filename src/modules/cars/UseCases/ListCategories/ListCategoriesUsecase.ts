import { Category } from '../../model/category';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepositories';

class ListCategoriesUseCase {
  constructor(private categories: ICategoriesRepository) {}
  // recebe omo parametro do construtor uma interface do repository
  // na hora de declarar essa classe, coloca o repository (classe) nos parametros

  execute(): Category[] {
    const categories = this.categories.list();
    return categories;
  }
}

export { ListCategoriesUseCase };
