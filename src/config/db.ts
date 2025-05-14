import path from "path";
import { verbose } from "sqlite3";
const sqlite3 = verbose()

const dbPath = path.resolve(__dirname, '../../dua_main.sqlite')
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error connecting to SQLite database')

    } else {
        console.log('Connected to SQLite database')
    }
})

export default db;