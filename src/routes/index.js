const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {
                            app.use('/news', newsRouter);
    app.use('/', siteRouter);

    // app.get('/', (req, res) => {
    //     res.render('home');
    // });

    // Cach 1
    // app.get('/', function(req, res) {
    //     return res.send('Hello World!')
    //   })

    // Cach 2
    // app.get('/', (req, res) => res.send('Hello World!'))

    // app.get('/news', (req, res) => {
    //   res.render('news');
    // });

    // app.get('/search', (req, res) => {
    //     // console.log(req.query.q);
    //     res.render('search');
    // });
}

module.exports = route;
