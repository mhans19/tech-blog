// DEPENDENCIES
const path = require('path');
const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const session = require('express-session');
const helpers = require('./utils/helpers');

// PORT
const app = express();
const PORT = process.env.PORT || 3001;

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// HANDLEBARS
const exphbs = require('express-handlebars');
const hbs = exphbs.create({ helpers });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars')

// SET UP SESSION
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sess = {
  secret: 'topsecret',
  cookie: {
    expires: 20 * 6000
  },
  resave: true,
  rolling: true,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};
app.use(session(sess));

// ROUTES
app.use(routes);

// CONNECTION
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => 
  console.log(`API server now on port ${PORT}!`);
});