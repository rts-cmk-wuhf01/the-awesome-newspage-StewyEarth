const mysql = require("../config/mysql")
const sqlcalls = require('../sql-services/calls');

module.exports = (app) => {

   app.get('/', async (req, res, next) => {

      let db = await mysql.connect();

      let [editorsPicksData] = await db.execute("SELECT articles.img as img,articles.title as title, articles.id as articleId,articles.postTime as postTime FROM editorspicks INNER JOIN articles on articles.id = editorspicks.fk_pickedArticle LIMIT 6");

      let [popularNewsHomeData] = await db.execute("select articles.title as title, articles.id as id, articles.likes as likes, articles.img as img, postcategories.name as postCategory, postcategories.id as categoryid,(SELECT COUNT(id) from comments where fk_commentedPostId = id) as commentCount  FROM articles INNER JOIN postcategories on articles.fk_postCategory = postcategories.id ORDER BY likes DESC LIMIT 4");
      
      let [featuredPostsData] = await db.execute("SELECT summary,likes,title,articles.img as img, articles.id as articleId, postcategories.name as category, postcategories.id as categoryId, authors.name as author,(SELECT COUNT(id) from comments where fk_commentedPostId = articleId) as commentCount FROM `articles` INNER JOIN postcategories on fk_postCategory = postcategories.id INNER JOIN authors on fk_author = authors.id WHERE IsFeatured = 1 ORDER BY `articles`.`postTime` DESC LIMIT 3")

      let [videosHomeData] = await db.execute("select * FROM videos");

      let [worldNewsAllData] = await db.execute("select id,img,postTime,title FROM articles WHERE fk_postCategory = 9 LIMIT 3")

      db.end();

      let [latestArticlesData] = await sqlcalls.getLatestArticlesData();
      let [mostPopularNewsData] = await sqlcalls.getMostPopularNewsData()
      let [internationalNewsHeroData] = await sqlcalls.getInternationalNewsHeroData();
      let [breakingNewsHeroData] = await sqlcalls.getBreakingNewsHeroData();
      let [categoriesData] = await sqlcalls.getCategoriesData();
      let [contactInfoData] = await sqlcalls.getContactInfoData();

      res.render('home', {
         categories: categoriesData,
         latestNews: latestArticlesData,
         mostPopularNews: mostPopularNewsData,
         editorsPicks: editorsPicksData,
         worldNewsAll: worldNewsAllData,
         popularNewsHomeArray: popularNewsHomeData,
         videosHome: videosHomeData,
         breakingNewsHero: breakingNewsHeroData,
         internationalNewsHero: internationalNewsHeroData,
         featuredPosts: featuredPostsData,
         contactInfo: contactInfoData[0],
      });
   });
   app.get('/about', async (req, res, next) => {

      let db = await mysql.connect();
      let [teamMembersData] = await db.execute("SELECT name,img,position FROM authors")
      db.end();

      let [categoriesData] = await sqlcalls.getCategoriesData();
      let [breakingNewsHeroData] = await sqlcalls.getBreakingNewsHeroData();
      let [internationalNewsHeroData] = await sqlcalls.getInternationalNewsHeroData();
      let [contactInfoData] = await sqlcalls.getContactInfoData();

      res.render('about', {
         categories: categoriesData,
         teamMembers: teamMembersData,
         breakingNewsHero: breakingNewsHeroData,
         internationalNewsHero: internationalNewsHeroData,
         contactInfo: contactInfoData[0],
      });
   });

   app.get('/category/:categoryid', async (req, res, next) => {

      if (isNaN(req.params.categoryid)) {
         res.redirect("/");
         return;
      }
      let db = await mysql.connect();

      let [categoryTest] = await db.execute("select id from postCategories where id = ?", [req.params.categoryid])
      if (categoryTest.length == 0) {
         res.redirect("/")
         return;
      }

      let [articlesData] = await db.execute("SELECT articles.id as id, articles.summary as summary, articles.img as img, articles.likes as likes, articles.title as title, authors.name as authorname,postcategories.id as categoryid, postcategories.name as category,(SELECT COUNT(id) from comments where fk_commentedPostId = id) as commentCount From articles INNER JOIN authors on articles.fk_author = authors.id INNER JOIN postcategories on articles.fk_postCategory = postcategories.id WHERE fk_postCategory = ? ORDER BY postTime DESC", [req.params.categoryid]);

      db.end();

      let [latestArticlesData] = await sqlcalls.getLatestArticlesData();
      let [latestCommentsData] = await sqlcalls.getLatestCommentsData();
      let [mostPopularNewsData] = await sqlcalls.getMostPopularNewsData();
      let [breakingNewsHeroData] = await sqlcalls.getBreakingNewsHeroData();
      let [internationalNewsHeroData] = await sqlcalls.getInternationalNewsHeroData();
      let [categoriesData] = await sqlcalls.getCategoriesData();
      let [contactInfoData] = await sqlcalls.getContactInfoData();

      res.render('category', {
         categories: categoriesData,
         latestNews: latestArticlesData,
         latestComments: latestCommentsData,
         mostPopularNews: mostPopularNewsData,
         articles: articlesData,
         breakingNewsHero: breakingNewsHeroData,
         internationalNewsHero: internationalNewsHeroData,
         contactInfo: contactInfoData[0],
      });
   });

   app.get('/contact', async (req, res, next) => {
      
      let [categoriesData] = await sqlcalls.getCategoriesData();
      let [breakingNewsHeroData] = await sqlcalls.getBreakingNewsHeroData();
      let [internationalNewsHeroData] = await sqlcalls.getInternationalNewsHeroData();
      let [contactInfoData] = await sqlcalls.getContactInfoData();

      res.render('contact', {
         categories: categoriesData,
         breakingNewsHero: breakingNewsHeroData,
         internationalNewsHero: internationalNewsHeroData,
         contactInfo: contactInfoData[0],
      });
   });

   app.get('/article/:articleid', async (req, res, next) => {
      if (isNaN(req.params.articleid)) {
         res.redirect("/");
         return;
      }
      let db = await mysql.connect();

      let [articledata] = await db.execute("select articles.id as id, articles.content as content, articles.title as title, articles.img as img, articles.likes as likes,authors.name as authorName, authors.about as authorAbout, authors.img as authorImg, postCategories.name as category,postCategories.id as categoryId,(SELECT COUNT(id) from comments where fk_commentedPostId = id) as commentCount FROM articles INNER JOIN authors on articles.fk_author = authors.id INNER JOIN postcategories on articles.fk_postCategory = postcategories.id where articles.id = ?", [req.params.articleid]);

      if (articledata.length == 0) {
         res.redirect("/")
      }

      let [relatedArticlesData] = await db.execute("SELECT articles.id as articleId, articles.img as img, articles.likes as likes, articles.title as title, authors.name as authorname,postcategories.id as categoryid, postcategories.name as category,(SELECT COUNT(id) from comments where fk_commentedPostId = id) as commentCount From articles INNER JOIN authors on articles.fk_author = authors.id INNER JOIN postcategories on articles.fk_postCategory = postcategories.id WHERE fk_postCategory = ? AND articles.id != ? ORDER BY postTime DESC LIMIT 2", [articledata[0].categoryId, articledata[0].id])

      let [articleCommentsData] = await db.execute("SELECT comments.message as message, comments.postTime as postTime, users.img as img, users.name as name FROM comments INNER JOIN users on comments.fk_userId = users.id WHERE comments.fk_commentedPostId = ? ORDER BY comments.postTime DESC", [req.params.articleid])
      db.end();

      let [latestArticlesData] = await sqlcalls.getLatestArticlesData();
      let [latestCommentsData] = await sqlcalls.getLatestCommentsData();
      let [mostPopularNewsData] = await sqlcalls.getMostPopularNewsData();
      let [breakingNewsHeroData] = await sqlcalls.getBreakingNewsHeroData();
      let [internationalNewsHeroData] = await sqlcalls.getInternationalNewsHeroData();
      let [categoriesData] = await sqlcalls.getCategoriesData();
      let [contactInfoData] = await sqlcalls.getContactInfoData();

      res.render('article', {
         article: articledata[0],
         relatedArticles: relatedArticlesData,
         categories: categoriesData,
         latestNews: latestArticlesData,
         latestComments: latestCommentsData,
         mostPopularNews: mostPopularNewsData,
         articleComments: articleCommentsData,
         breakingNewsHero: breakingNewsHeroData,
         internationalNewsHero: internationalNewsHeroData,
         contactInfo: contactInfoData[0],
      });
   });

};