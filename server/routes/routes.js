const mysql = require("../config/mysql")

module.exports = (app) => {
   let singlePostCommentsData = [
      {
         posterImgpath: "img/bg-img/30.jpg",
         posterName: "Shanie Bolit",
         postTime: "2019-06-04 10:00:14",
         message: "Donec turpis erat, scelerisque id euismod sit amet, fermentum vel dolor. Nulla facilisi. Sed pellen tesque lectus et accu msan aliquam. Fusce lobortis cursus quam, id mattis sapien."
      },
      {
         posterImgpath: "img/bg-img/31.jpg",
         posterName: "Jamie Smith",
         postTime: "2019-06-05 10:00:14",
         message: "Donec turpis erat, scelerisque id euismod sit amet, fermentum vel dolor. Nulla facilisi. Sed pellen tesque lectus et accu msan aliquam. Fusce lobortis cursus quam, id mattis sapien."
      },
      {
         posterImgpath: "img/bg-img/32.jpg",
         posterName: "Igor Usio",
         postTime: "2019-06-03 10:00:14",
         message: "Donec turpis erat, scelerisque id euismod sit amet, fermentum vel dolor. Nulla facilisi. Sed pellen tesque lectus et accu msan aliquam. Fusce lobortis cursus quam, id mattis sapien."
      },
      {
         posterImgpath: "img/bg-img/29.jpg",
         posterName: "Jason Marlo",
         postTime: "2019-06-02 10:00:14",
         message: "Donec turpis erat, scelerisque id euismod sit amet, fermentum vel dolor. Nulla facilisi. Sed pellen tesque lectus et accu msan aliquam. Fusce lobortis cursus quam, id mattis sapien."
      },
   ]

   let teamData = [
      {
         imgPath: "img/bg-img/t1.jpg",
         name: "James Williams",
         position: "CEO",
      },{
         imgPath: "img/bg-img/t2.jpg",
         name: "Christinne Smith",
         position: "Precenter",
      },{
         imgPath: "img/bg-img/t3.jpg",
         name: "Alicia Dormund",
         position: "Senior Editor",
      },{
         imgPath: "img/bg-img/t4.jpg",
         name: "Steve Duncan",
         position: "Precenter",
      },{
         imgPath: "img/bg-img/t5.jpg",
         name: "James Williams",
         position: "Senior Editor",
      },{
         imgPath: "img/bg-img/t6.jpg",
         name: "Christinne Smith",
         position: "Interviewer",
      },{
         imgPath: "img/bg-img/t7.jpg",
         name: "Alicia Dormund",
         position: "Intern",
      },{
         imgPath: "img/bg-img/t8.jpg",
         name: "Steve Duncan",
         position: "Intern",
      }
   ]
   app.get('/', async (req, res, next) => {
      
      let db = await mysql.connect();

      let [latestArticlesData] = await db.execute("select *, postcategories.name as postCategory FROM articles INNER JOIN postcategories on articles.fk_postCategory = postcategories.id ORDER BY postTime DESC LIMIT 6 ");
      let [editorsPicksData] = await db.execute("SELECT articles.imgPath as imgPath,articles.title as title,articles.postTime as postTime FROM editorspicks INNER JOIN articles on articles.id = editorspicks.fk_pickedArticle LIMIT 6");
      let [mostPopularNewsData] = await db.execute("select * FROM articles ORDER BY likes DESC LIMIT 4");
      let [popularNewsHomeData] = await db.execute("select *, postcategories.name as postCategory FROM articles INNER JOIN postcategories on articles.fk_postCategory = postcategories.id ORDER BY likes DESC LIMIT 4");
      let [videosHomeData] = await db.execute("select * FROM videos")
      let [worldNewsAllData] = await db.execute("select * FROM articles WHERE fk_postCategory = 9 LIMIT 3")

      db.end();

      res.render('home', {
         latestNews: latestArticlesData,
         mostPopularNews: mostPopularNewsData,
         editorsPicks: editorsPicksData,
         worldNewsAll: worldNewsAllData,
         popularNewsHomeArray: popularNewsHomeData,
         videosHome: videosHomeData,
      });
   });
   app.get('/about', (req, res, next) => {
      res.render('about',{
         teamMembers: teamData,
      });
   });
   app.get('/catagories-post', async (req, res, next) => {
      let db = await mysql.connect();

      let [latestArticlesData] = await db.execute("select *, postcategories.name as postCategory FROM articles INNER JOIN postcategories on articles.fk_postCategory = postcategories.id ORDER BY postTime DESC LIMIT 6 ");
      let [latestCommentsData] = await db.execute("select comments.postTime as postTime, articles.title as commentedPost, users.img as imgPath,users.name as name FROM comments INNER JOIN articles on comments.fk_commentedPostId = articles.id INNER JOIN users on fk_userId = comments.id ORDER BY comments.postTime DESC LIMIT 6 ");
      let [mostPopularNewsData] = await db.execute("select * FROM articles ORDER BY likes DESC LIMIT 4");

      db.end();
      res.render('catagories-post', {
         latestNews: latestArticlesData,
         latestComments: latestCommentsData,
         mostPopularNews: mostPopularNewsData,
      });
   });
   app.get('/contact', (req, res, next) => {
      res.render('contact');
   });

   app.get('/single-post', async (req, res, next) => {
      let db = await mysql.connect();
      let [latestArticlesData] = await db.execute("select * FROM articles ORDER BY postTime DESC LIMIT 6");
      let [mostPopularNewsData] = await db.execute("select * FROM articles ORDER BY likes DESC LIMIT 4");
      let [latestCommentsData] = await db.execute("select comments.postTime as postTime, articles.title as commentedPost, users.img as imgPath,users.name as name FROM comments INNER JOIN articles on comments.fk_commentedPostId = articles.id INNER JOIN users on fk_userId = comments.id ORDER BY comments.postTime DESC LIMIT 6 ");
      db.end();

      res.render('single-post', {
         latestNews: latestArticlesData,
         latestComments: latestCommentsData,
         mostPopularNews: mostPopularNewsData,
         singlePostComments: singlePostCommentsData,
      });
   });

};