const express = require('express');
const server = express();
const session = require('express-session');
const cors = require('cors');
const PORT = process.env.PORT || 4000;
const spotaHomeRoute = require('./router/spotaHome.routes');
require('dotenv').config();

const { fetchStart } = require('./middleware/getData');
const { fetchAll } = require('./controller/spotaHome.controller');
const array = {
  fecth: []
}
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

server.use(cors({
  origin: ['http://localhost:3000'],
  credentials: true,
}));

server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.use(
  session({
    secret: "sadfg",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 36000000000,
      httpOnly: false,
      secure: false,
      sameSite: false,
    },
    // store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);

server.on('listening', ()=> {
  console.log('execute a function')
})
server.use('/spotahome', spotaHomeRoute);

const start = () => {
  if(!array.length){
    console.log("empty")
  }
}

server.use('*', (req, res, next) => {
  const error = new Error('Route not found');
  error.status = 404;
  next(error);
})

server.use((err, req, res, next) => {
  console.log(err);
  return res.status(err.status || 500).json(err);
});

server.listen(PORT, async (req, res, next) => {
  console.log(`Server running in http://localhost:${PORT}`);
  if(!array.length){

    // const test = await fetchStart(array)
    // console.log(test)
  }
});
