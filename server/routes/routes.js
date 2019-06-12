const mysql = require("../config/mysql")

module.exports = (app) => {

   app.get('/', async (req, res, next) => {
      
      let db = await mysql.connect();

      let [latestArticlesData] = await db.execute("SELECT postcategories.id as categoryid , postcategories.name as postCategory , articles.id , articles.title , articles.img , articles.postTime FROM postcategories LEFT OUTER JOIN articles ON fk_postCategory = postcategories.id WHERE articles.id = ( SELECT id FROM articles WHERE fk_postCategory = postcategories.id ORDER BY articles.postTime DESC LIMIT 1) ORDER BY postTime Desc");

      let [editorsPicksData] = await db.execute("SELECT articles.img as img,articles.title as title, articles.id as articleId,articles.postTime as postTime FROM editorspicks INNER JOIN articles on articles.id = editorspicks.fk_pickedArticle LIMIT 6");
      let [mostPopularNewsData] = await db.execute("select title,postTime,id FROM articles ORDER BY likes DESC LIMIT 4");

      let [popularNewsHomeData] = await db.execute("select articles.title as title, articles.id as id, articles.likes as likes, articles.img as img, postcategories.name as postCategory, postcategories.id as categoryid,(SELECT COUNT(id) from comments where fk_commentedPostId = id) as commentCount  FROM articles INNER JOIN postcategories on articles.fk_postCategory = postcategories.id ORDER BY likes DESC LIMIT 4");
      let [videosHomeData] = await db.execute("select * FROM videos")

      let [breakingNewsHeroData] = await db.execute("select title,id FROM articles WHERE fk_postCategory = 6 ORDER BY postTime DESC LIMIT 3")

      let [internationalNewsHeroData] = await db.execute("select title,id FROM articles WHERE fk_postCategory = 9 ORDER BY postTime DESC LIMIT 3")

      let [worldNewsAllData] = await db.execute("select id,img,postTime,title FROM articles WHERE fk_postCategory = 9 LIMIT 3")

      let [featuredPostsData] = await db.execute("SELECT summary,likes,title,articles.img as img, articles.id as articleId, postcategories.name as category, postcategories.id as categoryId, authors.name as author,(SELECT COUNT(id) from comments where fk_commentedPostId = articleId) as commentCount FROM `articles` INNER JOIN postcategories on fk_postCategory = postcategories.id INNER JOIN authors on fk_author = authors.id WHERE IsFeatured = 1 ORDER BY `articles`.`postTime` DESC LIMIT 3")

      let [categoriesData] = await db.execute("SELECT * from postcategories")

      db.end();

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
      });
   });
   app.get('/about', async (req, res, next) => {
      let db = await mysql.connect();
      let [categoriesData] = await db.execute("SELECT * from postcategories")
      let [breakingNewsHeroData] = await db.execute("select title,id FROM articles WHERE fk_postCategory = 6 ORDER BY postTime DESC LIMIT 3");
      let [internationalNewsHeroData] = await db.execute("select title,id FROM articles WHERE fk_postCategory = 9 ORDER BY postTime DESC LIMIT 3");
      let [teamMembersData] = await db.execute("SELECT name,img,position FROM authors")

      db.end();
      res.render('about',{
         categories: categoriesData,
         teamMembers: teamMembersData,
         breakingNewsHero: breakingNewsHeroData,
         internationalNewsHero: internationalNewsHeroData,
      });
   });
   app.get('/category', async (req, res, next) => {
      let db = await mysql.connect();

      let [latestArticlesData] = await db.execute("SELECT postcategories.id as categoryid , postcategories.name as postCategory , articles.id , articles.title , articles.img , articles.postTime FROM postcategories LEFT OUTER JOIN articles ON fk_postCategory = postcategories.id WHERE articles.id = ( SELECT id FROM articles WHERE fk_postCategory = postcategories.id ORDER BY articles.postTime DESC LIMIT 1) ORDER BY postTime Desc");
      let [latestCommentsData] = await db.execute("select comments.postTime as postTime, articles.title as commentedPost, users.img as img,users.name as name FROM comments INNER JOIN articles on comments.fk_commentedPostId = articles.id INNER JOIN users on fk_userId = comments.id ORDER BY comments.postTime DESC LIMIT 6 ");
      let [mostPopularNewsData] = await db.execute("select * FROM articles ORDER BY likes DESC LIMIT 4");
      let [breakingNewsHeroData] = await db.execute("select title,id FROM articles WHERE fk_postCategory = 6 ORDER BY postTime DESC LIMIT 3 ")
      let [internationalNewsHeroData] = await db.execute("select title,id FROM articles WHERE fk_postCategory = 9 ORDER BY postTime DESC LIMIT 3");
      let [categoriesData] = await db.execute("SELECT * from postcategories")

      db.end();
      res.render('category', {
         categories: categoriesData,
         latestNews: latestArticlesData,
         latestComments: latestCommentsData,
         mostPopularNews: mostPopularNewsData,
         breakingNewsHero: breakingNewsHeroData,
         internationalNewsHero: internationalNewsHeroData,
      });
   });
   app.get('/category/:categoryid', async (req, res, next) => {

      if (isNaN(req.params.categoryid)){
         res.redirect("/");
         return;
      }
      let db = await mysql.connect();

      let [categoryTest] = await db.execute("select id from postCategories where id = ?",[req.params.categoryid])
      if (categoryTest.length == 0){
         res.redirect("/")
      }

      let [latestArticlesData] = await db.execute("SELECT postcategories.id as categoryid , postcategories.name as postCategory , articles.id , articles.title , articles.img , articles.postTime FROM postcategories LEFT OUTER JOIN articles ON fk_postCategory = postcategories.id WHERE articles.id = ( SELECT id FROM articles WHERE fk_postCategory = postcategories.id ORDER BY articles.postTime DESC LIMIT 1) ORDER BY postTime Desc");
      let [latestCommentsData] = await db.execute("select comments.postTime as postTime, articles.title as commentedPost, users.img as img,users.name as name FROM comments INNER JOIN articles on comments.fk_commentedPostId = articles.id INNER JOIN users on fk_userId = comments.id ORDER BY comments.postTime DESC LIMIT 6 ");
      let [mostPopularNewsData] = await db.execute("select * FROM articles ORDER BY likes DESC LIMIT 4");
      let [breakingNewsHeroData] = await db.execute("select title,id FROM articles WHERE fk_postCategory = 6 ORDER BY postTime DESC LIMIT 3");
      let [internationalNewsHeroData] = await db.execute("select title,id FROM articles WHERE fk_postCategory = 9 ORDER BY postTime DESC LIMIT 3");
      let [categoriesData] = await db.execute("SELECT * from postcategories");

      let [articlesData] = await db.execute("SELECT articles.id as id, articles.summary as summary, articles.img as img, articles.likes as likes, articles.title as title, authors.name as authorname,postcategories.id as categoryid, postcategories.name as category,(SELECT COUNT(id) from comments where fk_commentedPostId = id) as commentCount From articles INNER JOIN authors on articles.fk_author = authors.id INNER JOIN postcategories on articles.fk_postCategory = postcategories.id WHERE fk_postCategory = ? ORDER BY postTime DESC", [req.params.categoryid]);


      db.end();
      // res.send(req.params.categoryid)
      res.render('category', {
         categories: categoriesData,
         latestNews: latestArticlesData,
         latestComments: latestCommentsData,
         mostPopularNews: mostPopularNewsData,
         articles: articlesData,
         breakingNewsHero: breakingNewsHeroData,
         internationalNewsHero: internationalNewsHeroData,
      });
   });

   app.get('/contact', async (req, res, next) => {
      let db = await mysql.connect();
      let [categoriesData] = await db.execute("SELECT * from postcategories")
      let [breakingNewsHeroData] = await db.execute("select title,id FROM articles WHERE fk_postCategory = 6 ORDER BY postTime DESC LIMIT 3")
      let [internationalNewsHeroData] = await db.execute("select title,id FROM articles WHERE fk_postCategory = 9 ORDER BY postTime DESC LIMIT 3");

      db.end();
      res.render('contact',{
         categories: categoriesData,
         breakingNewsHero: breakingNewsHeroData,
         internationalNewsHero: internationalNewsHeroData,
      });
   });

   app.get('/article', async (req, res, next) => {
      let db = await mysql.connect();
      let [latestArticlesData] = await db.execute("SELECT postcategories.id as categoryid , postcategories.name as postCategory , articles.id , articles.title , articles.img , articles.postTime FROM postcategories LEFT OUTER JOIN articles ON fk_postCategory = postcategories.id WHERE articles.id = ( SELECT id FROM articles WHERE fk_postCategory = postcategories.id ORDER BY articles.postTime DESC LIMIT 1) ORDER BY postTime Desc");
      let [mostPopularNewsData] = await db.execute("select * FROM articles ORDER BY likes DESC LIMIT 4");
      let [latestCommentsData] = await db.execute("select comments.postTime as postTime, articles.title as commentedPost, users.img as img,users.name as name FROM comments INNER JOIN articles on comments.fk_commentedPostId = articles.id INNER JOIN users on fk_userId = comments.id ORDER BY comments.postTime DESC LIMIT 6 ");
      let [breakingNewsHeroData] = await db.execute("select title,id FROM articles WHERE fk_postCategory = 6 ORDER BY postTime DESC LIMIT 3")
      let [internationalNewsHeroData] = await db.execute("select title,id FROM articles WHERE fk_postCategory = 9 ORDER BY postTime DESC LIMIT 3");
      let [categoriesData] = await db.execute("SELECT * from postcategories")
      db.end();

      res.render('article', {
         categories: categoriesData,
         latestNews: latestArticlesData,
         latestComments: latestCommentsData,
         mostPopularNews: mostPopularNewsData,
         breakingNewsHero: breakingNewsHeroData,
         internationalNewsHero: internationalNewsHeroData,
      });
   });
   app.get('/article/:articleid', async (req, res, next) => {
      if (isNaN(req.params.articleid)){
         res.redirect("/");
         return;
      }
      let db = await mysql.connect();
      let [latestArticlesData] = await db.execute("SELECT postcategories.id as categoryid , postcategories.name as postCategory , articles.id , articles.title , articles.img , articles.postTime FROM postcategories LEFT OUTER JOIN articles ON fk_postCategory = postcategories.id WHERE articles.id = ( SELECT id FROM articles WHERE fk_postCategory = postcategories.id ORDER BY articles.postTime DESC LIMIT 1) ORDER BY postTime Desc");
      let [mostPopularNewsData] = await db.execute("select * FROM articles ORDER BY likes DESC LIMIT 4");
      let [latestCommentsData] = await db.execute("select comments.postTime, users.img,users.name, articles.title as commentedPost from comments INNER JOIN users on comments.fk_userId = users.id INNER JOIN articles on comments.fk_commentedPostId = articles.id ORDER BY postTime DESC limit 6");
      let [breakingNewsHeroData] = await db.execute("select title,id FROM articles WHERE fk_postCategory = 6 ORDER BY postTime DESC LIMIT 3")
      let [internationalNewsHeroData] = await db.execute("select title,id FROM articles WHERE fk_postCategory = 9 ORDER BY postTime DESC LIMIT 3");
      let [categoriesData] = await db.execute("SELECT * from postcategories")
      let [articledata] = await db.execute("select articles.id as id, articles.content as content, articles.title as title, articles.img as img, articles.likes as likes,authors.name as authorName, authors.about as authorAbout, authors.img as authorImg, postCategories.name as category,postCategories.id as categoryId,(SELECT COUNT(id) from comments where fk_commentedPostId = id) as commentCount FROM articles INNER JOIN authors on articles.fk_author = authors.id INNER JOIN postcategories on articles.fk_postCategory = postcategories.id where articles.id = ?",[req.params.articleid]);
      if(articledata.length == 0){
         res.redirect("/")
      }

      let [articleCommentsData] = await db.execute("SELECT comments.message as message, comments.postTime as postTime, users.img as img, users.name as name FROM comments INNER JOIN users on comments.fk_userId = users.id WHERE comments.fk_commentedPostId = ? ORDER BY comments.postTime DESC",[req.params.articleid])
      db.end();
      res.render('article', {
         article: articledata[0],
         categories: categoriesData,
         latestNews: latestArticlesData,
         latestComments: latestCommentsData,
         mostPopularNews: mostPopularNewsData,
         articleComments: articleCommentsData,
         breakingNewsHero: breakingNewsHeroData,
         internationalNewsHero: internationalNewsHeroData,
      });
   });

};