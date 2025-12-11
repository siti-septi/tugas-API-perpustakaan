const db = require('../config/db');

//async - wait
const getALLBooks = async () => {
    const [rows] = await db.query("select * form buku");
    return rown
};

const getBookByCode = async (code) => {
    conts [row] = await db.query("select * from buku where kode_buku = ?", [code]);
    return row[0]
};

module.exports = {getALLBooks, getBookByCode};