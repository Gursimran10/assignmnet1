var express = require('express'),
    morgan = require('morgan'),
    compress = require('compression'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');

module.exports = function () {
    var app = express();
    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));

    } else if (process.env.NODE_ENV === 'production') {
        app.use(compress());
    }

    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use(methodOverride());
    app.set('views', './app/views');
    app.set('view engine', 'ejs');
    app.use('/', require('../app/routes/index.server.routes.js'));
    //require('../app/routes/index.server.routes.js')(app);
    app.use(express.static('./public'));
    app.use(express.static("./node_modules"));

    return app;
};
const services = [
    {
      title: 'Web Development',
      description: 'Building responsive and user-friendly websites.',
      image: '/img/webg-development.jpg'
    },
    {
      title: 'Mobile App Development',
      description: 'Creating native and cross-platform mobile applications.',
      image: '/img/mobile-app-development.jpg'
    },
    {
      title: 'UI/UX Design',
      description: 'Designing intuitive and visually appealing user interfaces.',
      image: '/img/ui-ux-design.jpg'
    }
];
