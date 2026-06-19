import { Router } from "express";

import { analyzeRepositoryController, listRepositoriesController, getRepoSummaryController } from "../controllers/repository.controller";

const repositoryRoutes = Router();

repositoryRoutes.get("/", listRepositoriesController);
repositoryRoutes.get("/:namespace/summary", getRepoSummaryController);
repositoryRoutes.post("/analyze", analyzeRepositoryController);

export default repositoryRoutes;
