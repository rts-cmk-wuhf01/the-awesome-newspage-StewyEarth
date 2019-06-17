const mysql = require("../config/mysql")
const sqlcalls = require('../sql-services/calls');

function validateEmail(email) {
   let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

   return regex.test(email)
}

module.exports = (app) => {

   app.get('/', async (req, res, next) => {

      let db = await mysql.connect();

      let [editorsPicksData] = await db.execute("SELECT articles.img as img,articles.title as title, articles.id as articleId,articles.postTime as postTime FROM editorspicks INNER JOIN articles on articles.id = editorspicks.fk_pickedArticle LIMIT 6");

      let [popularNewsHomeData] = await db.execute("select articles.title as title, articles.id as id, articles.likes as likes, articles.img as img, postcategories.name as postCategory, postcategories.id as categoryid,(SELECT COUNT(id) from comments where fk_commentedPostId = id) as commentCount  FROM articles INNER JOIN postcategories on articles.fk_postCategory = postcategories.id ORDER BY likes DESC LIMIT 4");

      let [featuredPostsData] = await db.execute("SELECT summary,likes,title,articles.img as img, articles.id as articleId, postcategories.name as category, postcategories.id as categoryId, authors.name as author,(SELECT COUNT(id) from comments where fk_commentedPostId = articleId) as commentCount FROM `articles` INNER JOIN postcategories on fk_postCategory = postcategories.id INNER JOIN authors on fk_author = authors.id WHERE IsFeatured = 1 ORDER BY `articles`.`postTime` DESC LIMIT 3")

      let [videosHomeData] = await db.execute("select * FROM videos");

      let [worldNewsAllData] = await db.execute("select id,img,postTime,title FROM articles WHERE fk_postCategory = 9 LIMIT 3")

      db.end();

      let latestArticlesData = await sqlcalls.getLatestArticlesData();
      let mostPopularNewsData = await sqlcalls.getMostPopularNewsData()
      let internationalNewsHeroData = await sqlcalls.getInternationalNewsHeroData();
      let breakingNewsHeroData = await sqlcalls.getBreakingNewsHeroData();
      let categoriesData = await sqlcalls.getCategoriesData();
      let contactInfoData = await sqlcalls.getContactInfoData();

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

      let categoriesData = await sqlcalls.getCategoriesData();
      let breakingNewsHeroData = await sqlcalls.getBreakingNewsHeroData();
      let internationalNewsHeroData = await sqlcalls.getInternationalNewsHeroData();
      let contactInfoData = await sqlcalls.getContactInfoData();

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

      let latestArticlesData = await sqlcalls.getLatestArticlesData();
      let latestCommentsData = await sqlcalls.getLatestCommentsData();
      let mostPopularNewsData = await sqlcalls.getMostPopularNewsData();
      let breakingNewsHeroData = await sqlcalls.getBreakingNewsHeroData();
      let internationalNewsHeroData = await sqlcalls.getInternationalNewsHeroData();
      let categoriesData = await sqlcalls.getCategoriesData();
      let contactInfoData = await sqlcalls.getContactInfoData();

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
      let categoriesData = await sqlcalls.getCategoriesData();
      let breakingNewsHeroData = await sqlcalls.getBreakingNewsHeroData();
      let internationalNewsHeroData = await sqlcalls.getInternationalNewsHeroData();
      let contactInfoData = await sqlcalls.getContactInfoData();

      res.render('contact', {
         categories: categoriesData,
         breakingNewsHero: breakingNewsHeroData,
         internationalNewsHero: internationalNewsHeroData,
         contactInfo: contactInfoData[0],
      });
   });
   //  tilføjes i routes.js filen f.eks. lige under app.get('/contact') endpoint
   app.post('/contact', async (req, res, next) => {

      // indsamling af værdierne og oprettelse af de nødvendige variabler.
      let name = req.body.name;
      let email = req.body.email;
      let subject = req.body.subject;
      let message = req.body.message;
      let contactDate = new Date();


      //TODO. Lav validerings functioner
      // håndter valideringen, alle fejl pushes til et array så de er samlet ET sted
      let return_message = [];

      if (typeof name != "undefined"){
         name = name.trim()
         if (name == '') {
            return_message.push('Name is missing');
         } else if (name.length < 2) {
            return_message.push("Enter a name thats more than 2 or more characters");
         }
      }

      if (email == undefined || email == '') {
         return_message.push('Email missing');
      } else if (!validateEmail(email)) {
         return_message.push('Enter a valid email');
      }

      if (subject == undefined || subject == '') {
         return_message.push('Subject is missing');
      } else if (subject.length < 3) {
         return_message.push("Your subject must be 3 or more characters");
      }

      if (message == undefined || message == '') {
         return_message.push('Message is missing');
      }

      // dette er et kort eksempel på strukturen, denne udvides selvfølgelig til noget mere brugbart
      // hvis der er 1 eller flere elementer i `return_message`, så mangler der noget
      let categoriesData = await sqlcalls.getCategoriesData();
      let breakingNewsHeroData = await sqlcalls.getBreakingNewsHeroData();
      let internationalNewsHeroData = await sqlcalls.getInternationalNewsHeroData();
      let contactInfoData = await sqlcalls.getContactInfoData();
      let contactRender = {
         categories: categoriesData,
         breakingNewsHero: breakingNewsHeroData,
         internationalNewsHero: internationalNewsHeroData,
         contactInfo: contactInfoData[0],
      }

      if (return_message.length > 0) {
         // der er mindst 1 information der mangler, returner beskeden som en string.
         contactRender.values = req.body;
         contactRender.messageStatusCode = "Error";
         

      } else {
         let db = await mysql.connect();
         let result = await db.execute(`
         INSERT INTO contactmessages 
         SET
            name = ?, email = ?, subject = ?, message = ?, postTime = ? `
            , [name, email, subject, message, contactDate]);
         db.end();

         if (result[0].affectedRows > 0) {
            return_message.push('Tak for din besked, vi vender tilbage hurtigst muligt');
         } else {
            return_message.push('Din besked blev ikke modtaget.... ');
         }

         contactRender.values = [];
         contactRender.messageStatusCode = "Success";
      }

      // contactRender.return_message = return_message.join(", ")
      contactRender.return_messages = return_message;
      res.render('contact', contactRender);

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

      let latestArticlesData = await sqlcalls.getLatestArticlesData();
      let latestCommentsData = await sqlcalls.getLatestCommentsData();
      let mostPopularNewsData = await sqlcalls.getMostPopularNewsData();
      let breakingNewsHeroData = await sqlcalls.getBreakingNewsHeroData();
      let internationalNewsHeroData = await sqlcalls.getInternationalNewsHeroData();
      let categoriesData = await sqlcalls.getCategoriesData();
      let contactInfoData = await sqlcalls.getContactInfoData();

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