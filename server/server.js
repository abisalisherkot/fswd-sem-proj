const dotenv = require('dotenv');
const express = require('express');
const cors = require("cors");
const app = express();

//to hide connection string
dotenv.config({ path: './config.env' });

//includes database connection
require('./db/conn');

app.use(express.json());
app.use(cors());

//all the routes to pages: About, Contact etc
app.use(require('./router/auth'));

//hide PORT as well
const PORT = process.env.PORT;

//Middleware: it is used to check if the user is logged in or not
//acts as an intermediate btw authorized & non-auth users
const middleware = (req, res, next) => {
    console.log(`Hello from middleware`);
    //code to check if user is logged in
    next(); //to move to the expected page if user is logged in
}

app.listen(PORT, () => {
    console.log(`Running ball booking server on port ${PORT}`)
});