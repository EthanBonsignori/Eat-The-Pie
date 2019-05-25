const express = require('express')
const router = express.Router()

// Import the model
const Pie = require('../models/Pie')

// Routes
router.get('/', (req, res) => {
  Pie.all(data => {
    const hbsObj = {
      pies: data
    }
    console.log(hbsObj)
    res.render('index', hbsObj)
  })
})

router.post('/api/pies')


module.exports = router
