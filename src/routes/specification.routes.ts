import { Router } from "express";

import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";

const specificatiosRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

specificatiosRoutes.post("/", createSpecificationController.handle);

export { specificatiosRoutes };
