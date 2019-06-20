const mysql = require("../../config/mysql");

const sqlcalls = require("../../sql-services/calls")


module.exports = (app) => {
    app.get('/admin', async (req, res, next) => {
        let db = await mysql.connect();
        let [userCountData] = await db.execute("select count(id) as count from users")
        console.log(userCountData)
        db.end();
        res.render("adminpanel",{
            userCount: userCountData[0]
        })  //Loader HTML og muligvis sender noget data med som 2. parameter
    });
    app.get('/admin/contactmessages', async (req, res, next) => {
        let db = await mysql.connect();
        db.end();
        res.render("adminpanel-contactmessages")  //Loader HTML og muligvis sender noget data med som 2. parameter
    });
}