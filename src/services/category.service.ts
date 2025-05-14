import { categoryModels } from '../models/category-model';

const getAllCategories = () => {
  return new Promise((resolve, reject) => {
    categoryModels.getCategories((err, categories) => {
      if (err) reject(err);
      else resolve(categories);
    });
  });
};

export const categoryServices = {
  getAllCategories,
};
