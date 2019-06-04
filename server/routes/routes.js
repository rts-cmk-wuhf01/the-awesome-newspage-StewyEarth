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
   let latestNewsData = [
      {
         imgPath: "img/bg-img/19.jpg",
         postCategory: "Finance",
         title: "Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.",
         postTime: "2019-04-14 06:00:14",
      },
      {
         imgPath: "img/bg-img/20.jpg",
         postCategory: "Politics",
         title: "Sed a elit euismod augue semper congue sit amet ac sapien.",
         postTime: "2019-04-13 07:00:14",
      }, {
         imgPath: "img/bg-img/21.jpg",
         postCategory: "Health",
         title: "Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.",
         postTime: "2019-04-12 08:00:14",
      }, {
         imgPath: "img/bg-img/22.jpg",
         postCategory: "Finance",
         title: "Augue semper congue sit amet ac sapien. Fusce consequat.",
         postTime: "2019-04-11 09:00:14",
      }, {
         imgPath: "img/bg-img/23.jpg",
         postCategory: "Travel",
         title: "Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.",
         postTime: "2019-04-10 10:00:14",
      }, {
         imgPath: "img/bg-img/24.jpg",
         postCategory: "Politics",
         title: "Augue semper congue sit amet ac sapien. Fusce consequat.",
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
   ]
   app.get('/', (req, res, next) => {
      res.render('home', {
         latestNews: latestNewsData,
         mostPopularNews: mostPopularNewsData,
         editorsPicks: editorsPickData,
         worldNewsAll: worldNewsAllData,
         popularNewsHomeArray: popularNewsHomeData,
      });
   });
   app.get('/about', (req, res, next) => {
      res.render('about');
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