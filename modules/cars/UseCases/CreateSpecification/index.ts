import { SpecificationRepository } from '../../repositories/SpecificationRepository';
import { CreateSpecificationController } from './CreateSpecificationController';
import { CreateSpecificationUsecase } from './CreateSpecificationUsecase';

const specificationRepository = new SpecificationRepository();
const createSpecificationUsecase = new CreateSpecificationUsecase(specificationRepository);
const createSpecificationController = new CreateSpecificationController(createSpecificationUsecase);

export { createSpecificationController };
