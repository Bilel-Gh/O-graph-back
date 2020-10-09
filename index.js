require('dotenv').config();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const cors = require('cors');

const { commentRouter, projectRouter, userRouter, commentListRouter, feedbackRouter, imageRouter, imageListRouter, stickerRouter, authentificationRouter } = require('./app/routers/index.js');

const session = require('express-session');


const express = require('express');

const app = express();

app.use('/public/images', express.static('public/images'));

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

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