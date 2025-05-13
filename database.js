const sqlite3 = require("sqlite3").verbose();
const myDB = "dua_main.sqlite";

const dbConnect = new sqlite3.Database(myDB,(err, any)=>{
    console.log({err, any})
});

const sql = `SELECT * FROM .tables`
dbConnect.all(sql , (err, rows)=>{
    console.log({err, rows});
})