import { duaModel } from "../models/dua-model"

const getAllDuaFromDB = () => {
    return new Promise((resolve, reject) => {
        duaModel.getDuas((err, duas) => {
            if (err) reject(err);
            else resolve(duas);
        });
    });
};


export const duaServices = {
    getAllDuaFromDB
}