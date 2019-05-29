module.exports = (app) => {
let latestNewsData = [
   {
      imgPath: "img/bg-img/19.jpg",
      postCategory: "Finance",
      title: "Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.",
      postTime: "7:00 AM",
      postDate: "April 14"
   },
   {
      imgPath: "img/bg-img/20.jpg",
      postCategory: "Politics",
      title: "Sed a elit euismod augue semper congue sit amet ac sapien.",
      postTime: "7:00 AM",
      postDate: "April 14"
   },{
      imgPath: "img/bg-img/21.jpg",
      postCategory: "Health",
      title: "Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.",
      postTime: "7:00 AM",
      postDate: "April 14"
   },{
      imgPath: "img/bg-img/22.jpg",
      postCategory: "Finance",
      title: "Augue semper congue sit amet ac sapien. Fusce consequat.",
      postTime: "7:00 AM",
      postDate: "April 14"
   },{
      imgPath: "img/bg-img/23.jpg",
      postCategory: "Travel",
      title: "Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.",
      postTime: "7:00 AM",
      postDate: "April 14"
   },{
      imgPath: "img/bg-img/24.jpg",
      postCategory: "Politics",
      title: "Augue semper congue sit amet ac sapien. Fusce consequat.",
      postTime: "7:00 AM",
      postDate: "April 14"
   }
]

   app.get('/', (req, res, next) => {
      res.render('home');
   });
   app.get('/about', (req, res, next) => {
      res.render('about');
   });
   app.get('/catagories-post', (req, res, next) => {
      res.render('catagories-post',{
         latestNews: latestNewsData
      });
   });
   app.get('/contact', (req, res, next) => {
      res.render('contact');
   });
   app.get('/single-post', (req, res, next) => {
      res.render('single-post',{
         latestNews: latestNewsData
      });
   });

};