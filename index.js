require('dotenv').config();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const cors = require('cors');

const commentRouter = require('./app/routers/commentRouter');
const projectRouter = require('./app/routers/projectRouter');
const userRouter = require('./app/routers/userRouter');
const commentListRouter = require('./app/routers/commentListRouter');
const feedbackRouter = require('./app/routers/feedbackRouter');
const imageRouter = require('./app/routers/imageRouter');
const imageListRouter = require('./app/routers/imageListRouter');
const stickerRouter = require('./app/routers/stickerRouter');
const authentificationRouter = require('./app/routers/authentificationRouter'); 

const session = require('express-session');


const express = require('express');

const app = express();

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
 
//  app.use((req, res, next) => {
//    console.log('=== SESSION CHECKER ===');
//    console.table(req.session);
//    console.log('=== END OF SESSION CHECKER ===');
//    next();
//  });

app.use(commentRouter);
app.use(projectRouter);
app.use(userRouter);
app.use(commentListRouter);
app.use(feedbackRouter);
app.use(imageRouter);
app.use(imageListRouter);
app.use(stickerRouter);
app.use(authentificationRouter);


require('./app/socket.io')(io);

const port = process.env.PORT || 3000;

server.listen(port, _ => {
   console.log(`http://localhost:${port}`);
});