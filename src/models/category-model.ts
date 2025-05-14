import db from "../config/db";
import { Category } from "../types/schema.types";

const getCategories = (callback: (err: Error | null, categories: Category[]) => void) => {
    const query = `SELECT * FROM category`;
    db.all(query, [], (err, rows: Category[]) => {
        callback(err, rows);
    })
};

export const categoryModels = {
    getCategories
}