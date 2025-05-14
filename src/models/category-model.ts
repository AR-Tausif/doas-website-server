import db from "../config/db";

const getCategories = (callback: (arg0: Error | null, arg1: unknown[]) => void) => {
    const query = `SELECT * FROM category`;
    db.all(query,[], (err, rows)=>{
        callback(err, rows);
    })
};


export const categoryModels = {
    getCategories
}