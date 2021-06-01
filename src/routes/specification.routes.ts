import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";

const specificatiosRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

specificatiosRoutes.use(ensureAuthenticated);
specificatiosRoutes.post("/", createSpecificationController.handle);

export { specificatiosRoutes };
