module.exports = (app) => {

   app.get('/', (req, res, next) => {
      res.render('home');
   });
   app.get('/about', (req, res, next) => {
      res.render('about');
   });
   app.get('/catagories-post', (req, res, next) => {
      res.render('catagories-post');
   });
   app.get('/contact', (req, res, next) => {
      res.render('contact');
   });
   app.get('/single-post', (req, res, next) => {
      res.render('single-post');
   });

};