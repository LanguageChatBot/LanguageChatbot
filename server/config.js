require('dotenv').config();
module.exports = {
    dbURL: process.env.DBURL,
    watsonUSER: process.env.USERNAME,
    watsonPASS: process.env.PASSWORD,
    watsonVDATE: process.env.VERSION_DATE,
    gramarPASS: process.env.PASSGRAMMAR
}