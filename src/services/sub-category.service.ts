import { subCategoryModels } from '../models/sub-category-model';

const getAllSubCategory = () => {
  return new Promise((resolve, reject) => {
    subCategoryModels.getSubCategories((err, subCategories) => {
      if (err) reject(err);
      else resolve(subCategories);
    });
  });
};

export const subCategoryServices = {
  getAllSubCategory,
};
