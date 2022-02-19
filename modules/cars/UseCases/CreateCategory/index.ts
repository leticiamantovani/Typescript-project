import { CategoriesRepository } from '../../repositories/CategoriesRepository';
import { CreateCategoryController } from './CreateCategoryController';
import { CreateCategoryUsecase } from './CreateCategoryUsecase';

const categoryRepository = new CategoriesRepository();
const createCategoryUsecase = new CreateCategoryUsecase(categoryRepository);
const createCategoryController = new CreateCategoryController(createCategoryUsecase);

export { createCategoryController };
