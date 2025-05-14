import { RequestHandler } from 'express';
import { categoryServices } from '../services/category.service';

const allCategories: RequestHandler = async (req, res) => {
  try {
    const categories = await categoryServices.getAllCategories();
    res.status(200).json({
      message: 'all categories retrived, Alhamdulillah ',
      categories,
    });
  } catch (error) {}
};

export const categoryController = {
  allCategories,
};
