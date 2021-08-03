const express = require('express');
const router = express.Router();



router.get('/home', (req, res)=>{
    res.status(200).json({
        message : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?"
    });
})

router.get('/city', (req, res)=>{
    const city = ["Mumbai", "Pune", "Ahmedabad", "Pryagraj", "Lucknow"]
    res.status(200).json(city)
})


module.exports = router