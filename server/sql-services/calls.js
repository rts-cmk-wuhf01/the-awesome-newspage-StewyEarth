const mysql = require("../config/mysql")

module.exports = {
    getCategoriesData: async function () {
        let db = await mysql.connect();
        let [postCategoryData] = await db.execute("SELECT * from postcategories ORDER BY name")
        db.end();
        return postCategoryData;
    },
    getLatestArticlesData: async function () {
        let db = await mysql.connect();
        let [latestArticlesData] = await db.execute("SELECT postcategories.id as categoryid , postcategories.name as postCategory , articles.id , articles.title , articles.img , articles.postTime FROM postcategories LEFT OUTER JOIN articles ON fk_postCategory = postcategories.id WHERE articles.id = ( SELECT id FROM articles WHERE fk_postCategory = postcategories.id ORDER BY articles.postTime DESC LIMIT 1) ORDER BY postTime Desc");
        db.end();
        return latestArticlesData;
    },
    getMostPopularNewsData: async function () {
        let db = await mysql.connect();
        let [mostPopularNewsData] = await db.execute("select title,postTime,id FROM articles ORDER BY likes DESC LIMIT 4");
        db.end();
        return mostPopularNewsData;
    },
    getBreakingNewsHeroData: async function () {
        let db = await mysql.connect();
        let [breakingNewsHeroData] = await db.execute("select title,id FROM articles WHERE fk_postCategory = 6 ORDER BY postTime DESC LIMIT 3")
        db.end();
        return breakingNewsHeroData;
    },
    getInternationalNewsHeroData: async function(){
        let db = await mysql.connect();
        let [internationalNewsHeroData] = await db.execute("select title,id FROM articles WHERE fk_postCategory = 9 ORDER BY postTime DESC LIMIT 3")
        db.end();
        return internationalNewsHeroData;
    },
    getLatestCommentsData: async function(){
        let db = await mysql.connect();
        let [latestCommentsData] = await db.execute("select comments.postTime, users.img,users.name, articles.title as commentedPost, articles.id as articleId from comments INNER JOIN users on comments.fk_userId = users.id INNER JOIN articles on comments.fk_commentedPostId = articles.id ORDER BY postTime DESC limit 6");
        db.end();
        return latestCommentsData;
    },
    getContactInfoData: async function(){
        let db = await mysql.connect();
        let [contactInfoData] = await db.execute("SELECT mail,phone,address FROM information");
        db.end();
        return contactInfoData;
    },
};