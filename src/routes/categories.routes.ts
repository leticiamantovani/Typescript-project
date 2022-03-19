import { Router } from 'express';

import { createCategoryController } from '../modules/cars/UseCases/CreateCategory';
import { listCategoriesController } from '../modules/cars/UseCases/ListCategories';

const categoriesRoutes = Router();

// eslint-disable-next-line arrow-body-style
categoriesRoutes.post('/', (request, response) => {
  return createCategoryController.handle(request, response);
});

// eslint-disable-next-line arrow-body-style
categoriesRoutes.get('/', (request, response) => {
  return listCategoriesController.handle(request, response);
});

export { categoriesRoutes };
