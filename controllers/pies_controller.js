const express = require('express')
const router = express.Router()

// Import the model
const Pie = require('../models/Pie')

// Get all
router.get('/', (req, res) => {
  Pie.selectAll(data => {
    const hbsObj = {
      pies: data
    }
    console.log(hbsObj)
    res.render('index', hbsObj)
  })
})

// Insert new
router.post('/api/pies', (req, res) => {
  Pie.insertOne(['name', 'devoured'],
    [req.body.name, req.body.devoured], (result) => {
      res.json({ id: result.insertId })
    })
})

// Update
router.put('/api/pies/:id', (req, res) => {
  const condition = `id = ${req.params.id}`
  console.log('condition', condition)

  Pie.updateOne({
    devoured: req.body.devoured
  }, condition, (result) => {
    if (result.changedRows === 0) {
      return res.status(404).end()
    } else {
      res.status(200).end()
    }
  })
})

module.exports = router
