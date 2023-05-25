const express = require('express');
const router = express.Router();

require('../db/conn');
const Ground = require('../model/groundSchema');

//Default page when localhost is loaded
router.get('/', (req, res) => {
    res.send('Hello from server auth.js of ball booking')
})

router.post('/add-ground', async (req, res) => {
    const {name, location, address, price, img} = req.body;
    try{
        await Ground.create({
            name: name,
            location: location,
            address: address,
            price: price,
            image: img});
        res.send({Status: "ok"});
    }catch(err){
        res.send({Status: `Error: ${err}`});
    }
});

router.get('/get-grounds', async (req, res) => {
    try{
        await Ground.find({}).then(data=>{
            res.send({Status: "ok", data: data});
        })
    }catch(err){
        res.send({Status: `Error: ${err}`});
    }
});

//Add Ground Route
//Using async await
// router.post('/add', async (req, res) => {

//     //Object destructuring
//     const {name, details, img} = req.body;
//     //check if ground entered empty data
//     if(!name || !details || !img){
//         return res.status(422).json({error: 'Please fill all fields!'});
//     }

//     try{
//         //if groundExists we will find the email in the db
//         const groundExists = await Ground.findOne({ name: name })
    
//         if(groundExists){
//             return res.status(422).json({ error: 'Ground already exists' });
//         }
//         //else create new ground with these details
//         const ground = new Ground({ name, details, img});
//         //savw ground
//         await ground.save();
//         res.status(201).json({ message: 'Ground registered successfully!'});

//     }catch(err){ 
//         console.log(err); 
//     }
// });

module.exports = router;