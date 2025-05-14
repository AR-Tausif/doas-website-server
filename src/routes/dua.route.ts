import { Router } from "express";
import { duaController } from "../controllers/dua.controller";

const router = Router();

router.get("/", duaController.allDoa)


export const duaRouter = router;