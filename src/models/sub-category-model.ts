import db from "../config/db";
import { SubCategory } from "../types/schema.types";

const getSubCategories = (callback: (err: Error | null, subCategories: SubCategory[]) => void) => {
    const query = `SELECT * FROM sub_category`;
    db.all(query, [], (err, rows: SubCategory[]) => {
        callback(err, rows)
    })
}

export const subCategoryModels = {
    getSubCategories
}