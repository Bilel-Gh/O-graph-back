require('dotenv').config();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const cors = require('cors');

const { commentRouter, projectRouter, userRouter, commentListRouter, feedbackRouter, imageRouter, imageListRouter, stickerRouter, authentificationRouter } = require('./app/routers/index.js');

const session = require('express-session');


const express = require('express');

const app = express();

app.use('/public/images', express.static('public/images'));

const expressSwagger = require('express-swagger-generator')(app);


let options = {
  swaggerDefinition: {
      info: {
          description: 'This is a O\'graph server',
          title: 'O\'graph',
          version: '1.0.0',
      },
      host: 'localhost:3000',
      produces: [
          "application/json",
      ],
      schemes: ['http', 'https'],
      securityDefinitions: {}
  },
  basedir: __dirname, //app absolute path
  files: [
    './app/routers/commentRouter.js',
    './app/routers/projectRouter.js',
    './app/routers/userRouter.js',
    './app/routers/commentListRouter.js',
    './app/routers/feedbackRouter.js',
    './app/routers/imageRouter.js',
    './app/routers/imageListRouter.js',
    './app/routers/stickerRouter.js',
    './app/routers/authentificationRouter.js'
  ] //Path to the API handle folder
};
expressSwagger(options);

//http://localhost:3000/api-docs

const server = require('http').createServer(app);
const io = require('socket.io')(server);


app.use(cors('*'));

app.use(bodyParser.json());
app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());


app.use(
   session({
     resave: false,
     saveUninitialized: true,
     secret: 'Iliade',
     cookie: { secure: false },
   })
 );

app.use(commentRouter, projectRouter, userRouter, commentListRouter, feedbackRouter, imageRouter, imageListRouter, stickerRouter, authentificationRouter);


require('./app/socket.io')(io);

const port = process.env.PORT || 3000;

server.listen(port, _ => {
   console.log(`http://localhost:${port}`);
});