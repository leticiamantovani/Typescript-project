import { SpecificationRepository } from '../../repositories/implementations/SpecificationRepository';
import { CreateSpecificationController } from './CreateSpecificationController';
import { CreateSpecificationUsecase } from './CreateSpecificationUsecase';

const specificationRepository = new SpecificationRepository();
const createSpecificationUsecase = new CreateSpecificationUsecase(specificationRepository);
const createSpecificationController = new CreateSpecificationController(createSpecificationUsecase);

export { createSpecificationController };
