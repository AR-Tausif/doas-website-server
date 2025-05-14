import { RequestHandler } from 'express';
import { subCategoryServices } from '../services/sub-category.service';

const getAllSubCategory: RequestHandler = async (req, res) => {
  try {
    const subCategories = await subCategoryServices.getAllSubCategory();
    res.status(200).json({
      message: 'all sub categories retrived, Alhamdulillah ',
      subCategories,
    });
  } catch (error) {}
};

export const subCategoryController = {
  getAllSubCategory,
};
