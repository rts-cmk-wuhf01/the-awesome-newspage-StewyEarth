const mysql = require("../../config/mysql");

const sqlcalls = require("../../sql-services/calls")


module.exports = (app) => {
    app.get('/admin', async (req, res, next) => {
        let db = await mysql.connect();
        db.end();
        res.render("adminpanel")  //Loader HTML og muligvis sender noget data med som 2. parameter
    });
}