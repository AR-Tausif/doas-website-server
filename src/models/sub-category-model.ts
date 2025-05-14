import db from "../config/db";

const getSubCategories = (callback: (arg0: Error | null, arg1: unknown[]) => void) => {
    const query = `SELECT * FROM sub_category`;
    db.all(query, [], (err, rows) => {
        callback(err, rows)
    })
}

export const subCategoryModels = {
    getSubCategories
}