const mysql = require("../config/mysql")

module.exports = (app) => {
   let singlePostCommentsData = [
      {
         posterImgpath: "/img/bg-img/30.jpg",
         posterName: "Shanie Bolit",
         postTime: "2019-06-04 10:00:14",
         message: "Donec turpis erat, scelerisque id euismod sit amet, fermentum vel dolor. Nulla facilisi. Sed pellen tesque lectus et accu msan aliquam. Fusce lobortis cursus quam, id mattis sapien."
      },
      {
         posterImgpath: "/img/bg-img/31.jpg",
         posterName: "Jamie Smith",
         postTime: "2019-06-05 10:00:14",
         message: "Donec turpis erat, scelerisque id euismod sit amet, fermentum vel dolor. Nulla facilisi. Sed pellen tesque lectus et accu msan aliquam. Fusce lobortis cursus quam, id mattis sapien."
      },
      {
         posterImgpath: "/img/bg-img/32.jpg",
         posterName: "Igor Usio",
         postTime: "2019-06-03 10:00:14",
         message: "Donec turpis erat, scelerisque id euismod sit amet, fermentum vel dolor. Nulla facilisi. Sed pellen tesque lectus et accu msan aliquam. Fusce lobortis cursus quam, id mattis sapien."
      },
      {
         posterImgpath: "/img/bg-img/29.jpg",
         posterName: "Jason Marlo",
         postTime: "2019-06-02 10:00:14",
         message: "Donec turpis erat, scelerisque id euismod sit amet, fermentum vel dolor. Nulla facilisi. Sed pellen tesque lectus et accu msan aliquam. Fusce lobortis cursus quam, id mattis sapien."
      },
   ]

   let teamData = [
      {
         imgPath: "/img/bg-img/t1.jpg",
         name: "James Williams",
         position: "CEO",
      },{
         imgPath: "/img/bg-img/t2.jpg",
         name: "Christinne Smith",
         position: "Precenter",
      },{
         imgPath: "/img/bg-img/t3.jpg",
         name: "Alicia Dormund",
         position: "Senior Editor",
      },{
         imgPath: "/img/bg-img/t4.jpg",
         name: "Steve Duncan",
         position: "Precenter",
      },{
         imgPath: "/img/bg-img/t5.jpg",
         name: "James Williams",
         position: "Senior Editor",
      },{
         imgPath: "/img/bg-img/t6.jpg",
         name: "Christinne Smith",
         position: "Interviewer",
      },{
         imgPath: "/img/bg-img/t7.jpg",
         name: "Alicia Dormund",
         position: "Intern",
      },{
         imgPath: "/img/bg-img/t8.jpg",
         name: "Steve Duncan",
         position: "Intern",
      }
   ]
   app.get('/', async (req, res, next) => {
      
      let db = await mysql.connect();

      let [latestArticlesData] = await db.execute("select articles.title as title, articles.id as id, articles.img as img, articles.postTime as postTime, postcategories.name as postCategory, postcategories.id as categoryid FROM articles INNER JOIN postcategories on articles.fk_postCategory = postcategories.id ORDER BY postTime DESC LIMIT 6 ");

      let [editorsPicksData] = await db.execute("SELECT articles.img as img,articles.title as title, articles.id as articleId,articles.postTime as postTime FROM editorspicks INNER JOIN articles on articles.id = editorspicks.fk_pickedArticle LIMIT 6");
      let [mostPopularNewsData] = await db.execute("select title,postTime,id FROM articles ORDER BY likes DESC LIMIT 4");
      let [popularNewsHomeData] = await db.execute("select articles.title as title, articles.id as id, articles.likes as likes, articles.img as img, postcategories.name as postCategory, postcategories.id as categoryid FROM articles INNER JOIN postcategories on articles.fk_postCategory = postcategories.id ORDER BY likes DESC LIMIT 4");
      let [videosHomeData] = await db.execute("select * FROM videos")
      let [breakingNewsHeroData] = await db.execute("select title FROM articles WHERE fk_postCategory = 6 ORDER BY postTime DESC LIMIT 3 ")
      let [worldNewsAllData] = await db.execute("select id,img,postTime,title FROM articles WHERE fk_postCategory = 9 LIMIT 3")

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
      });
   });
   app.get('/about', async (req, res, next) => {
      let db = await mysql.connect();
      let [categoriesData] = await db.execute("SELECT * from postcategories")
      let [breakingNewsHeroData] = await db.execute("select title FROM articles WHERE fk_postCategory = 6 ORDER BY postTime DESC LIMIT 3 ");

      db.end();
      res.render('about',{
         categories: categoriesData,
         teamMembers: teamData,
         breakingNewsHero: breakingNewsHeroData,
      });
   });
   app.get('/category', async (req, res, next) => {
      let db = await mysql.connect();

      let [latestArticlesData] = await db.execute("select articles.title as title, articles.id as id, articles.img as img, articles.postTime as postTime, postcategories.name as postCategory, postcategories.id as categoryid FROM articles INNER JOIN postcategories on articles.fk_postCategory = postcategories.id ORDER BY postTime DESC LIMIT 6 ");
      let [latestCommentsData] = await db.execute("select comments.postTime as postTime, articles.title as commentedPost, users.img as img,users.name as name FROM comments INNER JOIN articles on comments.fk_commentedPostId = articles.id INNER JOIN users on fk_userId = comments.id ORDER BY comments.postTime DESC LIMIT 6 ");
      let [mostPopularNewsData] = await db.execute("select * FROM articles ORDER BY likes DESC LIMIT 4");
      let [breakingNewsHeroData] = await db.execute("select title FROM articles WHERE fk_postCategory = 6 ORDER BY postTime DESC LIMIT 3 ")
      let [categoriesData] = await db.execute("SELECT * from postcategories")

      db.end();
      res.render('category', {
         categories: categoriesData,
         latestNews: latestArticlesData,
         latestComments: latestCommentsData,
         mostPopularNews: mostPopularNewsData,
         breakingNewsHero: breakingNewsHeroData,
      });
   });
   app.get('/category/:categoryid', async (req, res, next) => {

      let db = await mysql.connect();

      let [latestArticlesData] = await db.execute("select articles.title as title, articles.id as id, articles.img as img, articles.postTime as postTime, postcategories.name as postCategory, postcategories.id as categoryid FROM articles INNER JOIN postcategories on articles.fk_postCategory = postcategories.id ORDER BY postTime DESC LIMIT 6 ");
      let [latestCommentsData] = await db.execute("select comments.postTime as postTime, articles.title as commentedPost, users.img as img,users.name as name FROM comments INNER JOIN articles on comments.fk_commentedPostId = articles.id INNER JOIN users on fk_userId = comments.id ORDER BY comments.postTime DESC LIMIT 6 ");
      let [mostPopularNewsData] = await db.execute("select * FROM articles ORDER BY likes DESC LIMIT 4");
      let [breakingNewsHeroData] = await db.execute("select title FROM articles WHERE fk_postCategory = 6 ORDER BY postTime DESC LIMIT 3 ")
      let [categoriesData] = await db.execute("SELECT * from postcategories")

      let [articlesData] = await db.execute("SELECT articles.id as id, articles.summary as summary, articles.img as img, articles.likes as likes, articles.title as title, authors.name as authorname,postcategories.id as categoryid, postcategories.name as category From articles INNER JOIN authors on articles.fk_author = authors.id INNER JOIN postcategories on articles.fk_postCategory = postcategories.id WHERE fk_postCategory = ? ORDER BY postTime DESC", [req.params.categoryid])

      db.end();
      // res.send(req.params.categoryid)
      res.render('category', {
         categories: categoriesData,
         latestNews: latestArticlesData,
         latestComments: latestCommentsData,
         mostPopularNews: mostPopularNewsData,
         articles: articlesData,
         breakingNewsHero: breakingNewsHeroData,
      });
   });

   app.get('/contact', async (req, res, next) => {
      let db = await mysql.connect();
      let [categoriesData] = await db.execute("SELECT * from postcategories")
      let [breakingNewsHeroData] = await db.execute("select title FROM articles WHERE fk_postCategory = 6 ORDER BY postTime DESC LIMIT 3 ")

      db.end();
      res.render('contact',{
         categories: categoriesData,
         breakingNewsHero: breakingNewsHeroData,
      });
   });

   app.get('/article', async (req, res, next) => {
      let db = await mysql.connect();
      let [latestArticlesData] = await db.execute("select articles.title as title, articles.id as id, articles.img as img, articles.postTime as postTime, postcategories.name as postCategory, postcategories.id as categoryid FROM articles INNER JOIN postcategories on articles.fk_postCategory = postcategories.id ORDER BY postTime DESC LIMIT 6 ");
      let [mostPopularNewsData] = await db.execute("select * FROM articles ORDER BY likes DESC LIMIT 4");
      let [latestCommentsData] = await db.execute("select comments.postTime as postTime, articles.title as commentedPost, users.img as img,users.name as name FROM comments INNER JOIN articles on comments.fk_commentedPostId = articles.id INNER JOIN users on fk_userId = comments.id ORDER BY comments.postTime DESC LIMIT 6 ");
      let [breakingNewsHeroData] = await db.execute("select title FROM articles WHERE fk_postCategory = 6 ORDER BY postTime DESC LIMIT 3 ")
      let [categoriesData] = await db.execute("SELECT * from postcategories")
      db.end();

      res.render('article', {
         categories: categoriesData,
         latestNews: latestArticlesData,
         latestComments: latestCommentsData,
         mostPopularNews: mostPopularNewsData,
         singlePostComments: singlePostCommentsData,
         breakingNewsHero: breakingNewsHeroData,
      });
   });
   app.get('/article/:articleid', async (req, res, next) => {
      let db = await mysql.connect();
      let [latestArticlesData] = await db.execute("select articles.title as title, articles.id as id, articles.img as img, articles.postTime as postTime, postcategories.name as postCategory, postcategories.id as categoryid FROM articles INNER JOIN postcategories on articles.fk_postCategory = postcategories.id ORDER BY postTime DESC LIMIT 6 ");
      let [mostPopularNewsData] = await db.execute("select * FROM articles ORDER BY likes DESC LIMIT 4");
      let [latestCommentsData] = await db.execute("select comments.postTime as postTime, articles.title as commentedPost, users.img as img,users.name as name FROM comments INNER JOIN articles on comments.fk_commentedPostId = articles.id INNER JOIN users on fk_userId = comments.id ORDER BY comments.postTime DESC LIMIT 6 ");
      let [breakingNewsHeroData] = await db.execute("select title FROM articles WHERE fk_postCategory = 6 ORDER BY postTime DESC LIMIT 3 ");
      let [categoriesData] = await db.execute("SELECT * from postcategories")
      let [articledata] = await db.execute("select articles.content as content, articles.title as title, articles.img as img, articles.likes as likes,authors.name as authorName, authors.about as authorAbout, authors.img as authorImg, postCategories.name as category FROM articles INNER JOIN authors on articles.fk_author = authors.id INNER JOIN postcategories on articles.fk_postCategory = postcategories.id where articles.id = ?",[req.params.articleid]);
      db.end();

      res.render('article', {
         article: articledata[0],
         categories: categoriesData,
         latestNews: latestArticlesData,
         latestComments: latestCommentsData,
         mostPopularNews: mostPopularNewsData,
         singlePostComments: singlePostCommentsData,
         breakingNewsHero: breakingNewsHeroData,
      });
   });

};