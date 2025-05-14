import { RequestHandler } from "express"
import { duaServices } from "../services/dua.service"

const allDoa: RequestHandler = async (req, res) => {
    try {
        const duas = await duaServices.getAllDuaFromDB();
        res.status(200).json({
            message: 'all doa retrived, Alhamdulillah ',
            doa: duas
        })
    } catch (error) {

    }
}

export const duaController = {
    allDoa
}