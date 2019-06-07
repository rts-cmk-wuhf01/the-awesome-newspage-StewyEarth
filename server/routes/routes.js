const mysql = require("../config/mysql")

module.exports = (app) => {
   let worldNewsAllData = [
      {
         imgPath: "img/bg-img/7.jpg",
         title: "Orci varius natoque penatibus et magnis",
         postTime: "2019-04-14 06:00:14",
      },
      {
         imgPath: "img/bg-img/8.jpg",
         title: "Orci varius natoque penatibus et magnis",
         postTime: "2019-04-13 07:00:14",
      }, {
         imgPath: "img/bg-img/9.jpg",
         title: "Orci varius natoque penatibus et magnis",
         postTime: "2019-04-12 08:00:14",
      }, {
         imgPath: "img/bg-img/10.jpg",
         title: "Orci varius natoque penatibus et magnis",
         postTime: "2019-04-11 09:00:14",
      }, {
         imgPath: "img/bg-img/11.jpg",
         title: "Orci varius natoque penatibus et magnis",
         postTime: "2019-04-10 10:00:14",
      }
   ]
   let latestCommentsData = [
      {
         name: "Jason Marlo",
         imgPath: "img/bg-img/29.jpg",
         postTime: "2019-04-14 10:00:14",
         commentedPost: "Facebook is offering facial recognition..."
      },
      {
         name: "Shanie Bolit",
         imgPath: "img/bg-img/30.jpg",
         postTime: "2019-04-14 23:00:14",
         commentedPost: "Facebook is offering facial recognition..."
      },
      {
         name: "Jamie Smith",
         imgPath: "img/bg-img/31.jpg",
         postTime: "2019-04-14 04:00:14",
         commentedPost: "Facebook is offering facial recognition..."
      },
      {
         name: "Igor Usio",
         imgPath: "img/bg-img/32.jpg",
         postTime: "2019-04-14 06:00:14",
         commentedPost: "Facebook is offering facial recognition..."
      }
   ]
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
   app.get('/catagories-post', (req, res, next) => {
      res.render('catagories-post', {
         latestNews: latestNewsData,
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
      db.end();

      res.render('single-post', {
         latestNews: latestArticlesData,
         latestComments: latestCommentsData,
         mostPopularNews: mostPopularNewsData,
         singlePostComments: singlePostCommentsData,
      });
   });

};