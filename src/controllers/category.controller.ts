import { RequestHandler } from 'express';
import { categoryServices } from '../services/category.service';
import { subCategoryServices } from '../services/sub-category.service';
import { Category, SubCategory } from '../types/schema.types';

const allCategories: RequestHandler = async (req, res, next) => {
  try {
    const categories = await categoryServices.getAllCategories() as Category[];
    const sub_categories = await subCategoryServices.getAllSubCategory() as SubCategory[];
    const allCategories = categories.map((category) => {
      const subCategories = sub_categories.filter(
        (subCategory) => subCategory.cat_id === category.cat_id
      );
      return {
        ...category,
        subCategories,
      };
    });
    res.status(200).json({
      message: 'all categories retrived, Alhamdulillah ',
      categories: allCategories,
    });
  } catch (error) {
    next(error);
  }
};

export const categoryController = {
  allCategories,
};
