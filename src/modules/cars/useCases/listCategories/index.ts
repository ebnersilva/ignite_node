import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

const listCategoriesRepository = CategoriesRepository.getInstace();

const listCategoriesUseCase = new ListCategoriesUseCase(
  listCategoriesRepository
);

const listCategoriesController = new ListCategoriesController(
  listCategoriesUseCase
);

export { listCategoriesController };
