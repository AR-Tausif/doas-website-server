import { Router } from 'express';
import { subCategoryController } from '../controllers/sub-category.controller';

const router = Router();

router.get('/', subCategoryController.getAllSubCategory);

export const subCategoryRouter = router;
