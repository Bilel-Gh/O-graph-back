require('dotenv').config();

const bodyParser = require('body-parser');

const commentRouter = require('./app/routers/commentRouter');
const projectRouter = require('./app/routers/projectRouter');

const express = require('express');

const app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(commentRouter);
app.use(projectRouter);

const port = process.env.PORT || 3000;

app.listen(port, _ => {
   console.log(`http://localhost:${port}`);
});