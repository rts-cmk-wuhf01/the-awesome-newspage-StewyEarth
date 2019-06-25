const mysql = require("../../config/mysql");

const sqlcalls = require("../../sql-services/calls")


module.exports = (app) => {
    app.get('/admin', async (req, res, next) => {
        let db = await mysql.connect();
        let [userCountData] = await db.execute("select count(id) as count from users")
        db.end();
        res.render("adminpanel", {
            userCount: userCountData[0]
        })  //Loader HTML og muligvis sender noget data med som 2. parameter
    });

    app.get('/admin/categories', async (req, res, next) => {
        let db = await mysql.connect();
        let categoriesData = await sqlcalls.getCategoriesData();
        db.end();
        res.render("adminpanel-categories", {
            categories: categoriesData,
        })
    });


    app.post('/admin/categories', async (req, res, next) => {
        let name = req.body.name;
        let return_message = "";

        if (typeof name == "undefined" || name == '') {
            return_message = 'Enter a name';
        } else if (name.length < 2) {
            return_message = "Enter a name thats more than 2 or more characters";
        }
        if (return_message.length == 0) {
            let db = await mysql.connect();
            let result = await db.execute(`
            INSERT INTO postcategories 
            SET
            name = ? `
                , [name]);
            db.end();

            if (result[0].affectedRows > 0) {
                return_message = 'Category added';
            } else {
                return_message = 'Category could not be added';
            }

        }
        res.render("adminpanel-categories", {
            return_message: return_message,
            categories: await sqlcalls.getCategoriesData()
        })
    });

    app.get('/admin/categories/delete/:category_id', async (req, res, next) => {
            let return_message = ""
            let db = await mysql.connect();
            let result = await db.execute(`DELETE FROM postcategories WHERE postcategories.id = ?`
                , [req.params.category_id]);
            db.end();

            if (result[0].affectedRows > 0) {
                return_message = 'Category removed';
            } else {
                return_message = 'Category could not be removed';
            }

            res.redirect("/admin/categories");
    });



    app.get('/admin/contactmessages', async (req, res, next) => {
        let db = await mysql.connect();
        db.end();
        res.render("adminpanel-contactmessages")  //Loader HTML og muligvis sender noget data med som 2. parameter
    });

}