require('dotenv').config();

const bodyParser = require('body-parser');

const commentRouter = require('./app/routers/commentRouter');
const projectRouter = require('./app/routers/projectRouter');
const userRouter = require('./app/routers/userRouter');
const commentListRouter = require('./app/routers/commentListRouter');
const feedbackRouter = require('./app/routers/feedbackRouter');
const imageRouter = require('./app/routers/imageRouter');
const imageListRouter = require('./app/routers/imageRouter');
const stickerRouter = require('./app/routers/stickerRouter');

const session = require('express-session');

const express = require('express');

const app = express();


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

const port = process.env.PORT || 3000;

app.listen(port, _ => {
   console.log(`http://localhost:${port}`);
});