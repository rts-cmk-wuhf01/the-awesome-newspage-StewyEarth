const mysql = require("../config/mysql")

module.exports = (app) => {
   let popularNewsHomeData = [
      {
         imgPath: "img/bg-img/12.jpg",
         title: "Dolor sit amet, consectetur adipiscing elit. Nam eu metus sit amet odio sodales placer. Sed varius leo ac...",
         likes: 21,
         comments: 25,
         postCategory: "Finance"
      },
      {
         imgPath: "img/bg-img/13.jpg",
         title: "Dolor sit amet, consectetur adipiscing elit. Nam eu metus sit amet odio sodales placer. Sed varius leo ac...",
         likes: 2921,
         comments: 255,
         postCategory: "Finance"
      }, {
         imgPath: "img/bg-img/14.jpg",
         title: "Dolor sit amet, consectetur adipiscing elit. Nam eu metus sit amet odio sodales placer. Sed varius leo ac...",
         likes: 15,
         comments: 3,
         postCategory: "Finance"
      }, {
         imgPath: "img/bg-img/15.jpg",
         title: "Dolor sit amet, consectetur adipiscing elit. Nam eu metus sit amet odio sodales placer. Sed varius leo ac...",
         likes: 85,
         comments: 13,
         postCategory: "Finance"
      },
   ]
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
   let editorsPickData = [
      {
         imgPath: "img/bg-img/1.jpg",
         title: "Orci varius natoque penatibus et magnis dis parturient montes.",
         postTime: "2019-04-14 06:00:14",
      },
      {
         imgPath: "img/bg-img/2.jpg",
         title: "Orci varius natoque penatibus et magnis dis parturient montes.",
         postTime: "2019-04-13 07:00:14",
      }, {
         imgPath: "img/bg-img/3.jpg",
         title: "Orci varius natoque penatibus et magnis dis parturient montes.",
         postTime: "2019-04-12 08:00:14",
      }, {
         imgPath: "img/bg-img/4.jpg",
         title: "Orci varius natoque penatibus et magnis dis parturient montes.",
         postTime: "2019-04-11 09:00:14",
      }, {
         imgPath: "img/bg-img/5.jpg",
         title: "Orci varius natoque penatibus et magnis dis parturient montes.",
         postTime: "2019-04-10 10:00:14",
      }, {
         imgPath: "img/bg-img/6.jpg",
         title: "Orci varius natoque penatibus et magnis dis parturient montes.",
         postTime: "2019-04-09 11:00:14",
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
   let mostPopularNewsData = [
      {
         title: "Amet, consectetur adipiscing elit. Nam eu metus sit amet odio sodales.",
         postTime: "2019-04-14 10:00:14",
      },
      {
         title: "Consectetur adipiscing elit. Nam eu metus sit amet odio sodales placer.",
         postTime: "2019-01-01 00:00:00",
      },
      {
         title: "Adipiscing elit. Nam eu metus sit amet odio sodales placer. Sed varius leo.",
         postTime: "2018-12-28 10:00:14",
      },
      {
         title: "Eu metus sit amet odio sodales placer. Sed varius leo ac...",
         postTime: "2015-07-31 10:00:14",
      }
   ]; 
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
   let videosHomeData = [
      {
         url:"https://www.youtube.com/watch?v=M16CGK1T9MM",
         imgpath: "img/bg-img/video1.jpg"
      },
      {
         url:"https://www.youtube.com/watch?v=nzWDXhXkEQQ",
         imgpath: "img/bg-img/video2.jpg"
      },
      {
         url:"https://www.youtube.com/watch?v=tMYBr2H0xuk",
         imgpath: "img/bg-img/video3.jpg"
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
      let [latestArticlesData] = await db.execute("select * FROM articles ORDER BY postTime DESC LIMIT 6")
      let [editorsPicksData] = await db.execute("SELECT articles.imgPath as imgPath,articles.title as title,articles.postTime as postTime FROM editorspicks INNER JOIN articles on articles.id = editorspicks.fk_pickedArticle LIMIT 6")
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

   app.get('/single-post', (req, res, next) => {
      res.render('single-post', {
         latestNews: latestNewsData,
         latestComments: latestCommentsData,
         mostPopularNews: mostPopularNewsData,
         singlePostComments: singlePostCommentsData,
      });
   });

};