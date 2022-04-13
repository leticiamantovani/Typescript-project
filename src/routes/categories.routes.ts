import { request, response, Router } from 'express';
import multer from 'multer';

import { createCategoryController } from '../modules/cars/UseCases/CreateCategory';
import { importCategoryController } from '../modules/cars/UseCases/importCategory';
import { listCategoriesController } from '../modules/cars/UseCases/ListCategories';

const categoriesRoutes = Router();

const upload = multer({
  dest: './tmp',
});

// eslint-disable-next-line arrow-body-style
categoriesRoutes.post('/', (request, response) => {
  return createCategoryController.handle(request, response);
});

// eslint-disable-next-line arrow-body-style
categoriesRoutes.get('/', (request, response) => {
  return listCategoriesController.handle(request, response);
});

// eslint-disable-next-line arrow-body-style
categoriesRoutes.post('/import', upload.single('file'), (request, response) => {
  return importCategoryController.handle(request, response);
});

export { categoriesRoutes };
