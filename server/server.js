const express = require('express');
const path = require('path');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sequelize = require('./config/connection');

const apiRouter = require('./routes');
const cors = require('cors');

const PORT = process.env.PORT || 3001;

// const sess = {
//   secret: 'Super secret secret',
//   cookie: {},
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize,
//   }),
// };

// app.use(session(sess));

const app = express();
var allowList = 'localhost:3000';
app.use(cors());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', apiRouter);


app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
});