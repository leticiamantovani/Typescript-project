import { Router } from 'express';

import { createSpecificationController } from '../modules/cars/UseCases/CreateSpecification/index';

const specificationRoutes = Router();

// eslint-disable-next-line arrow-body-style
specificationRoutes.post('/', (request, response) => {
  return createSpecificationController.handle(request, response);
});

export { specificationRoutes };
