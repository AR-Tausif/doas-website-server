import { categoryModels } from '../models/category-model';
import { Category } from '../types/schema.types';

const getAllCategories = (): Promise<Category[]> => {
  return new Promise((resolve, reject) => {
    try {
      categoryModels.getCategories((err, categories) => {
        if (err) {
          console.error('Error in getAllCategories:', err);
          reject(err);
        } else {
          resolve(categories);
        }
      });
    } catch (error) {
      console.error('Error in getAllCategories:', error);
      reject(error);
    }
  });
};

export const categoryServices = {
  getAllCategories,
};
