import db from "../config/db";

const getDuas =(callback: (arg0: Error | null, arg1: unknown[]) => void)=>{
    const query = `SELECT * FROM dua`;
    db.all(query, [], (err, rows)=>{
        callback(err, rows);
    });
}

export const duaModel = {
    getDuas
};