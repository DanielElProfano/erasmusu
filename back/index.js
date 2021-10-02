const express = require('express');
const PORT = process.env.PORT || 3000;
const server = express();
const spotaHomeRoute = require('./router/spotaHome.routes');

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

server.use(express.json());
server.use(express.urlencoded({ extended: true }));


server.use('/spotahome', spotaHomeRoute);

server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});
