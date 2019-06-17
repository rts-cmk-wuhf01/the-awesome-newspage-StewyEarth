const mysql = require("../../config/mysql");

const sqlcalls = require("../../sql-services/calls")


module.exports = (app) => {
    app.get('/admin', async (req, res, next) => {
        let db = await mysql.connect();
        db.end();
        res.send("Admin Panel goes here");
    });
}