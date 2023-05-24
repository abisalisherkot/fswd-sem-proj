const mongoose = require('mongoose');

//Connection with mongodb atlas
const DB = process.env.DATABASE; //password/username now hidden

mongoose.connect(DB).then(() => {
    console.log('Connection Successfull!');
}).catch((err) => {
    console.log(`No Connection`);
})