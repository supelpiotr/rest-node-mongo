// Full Documentation - https://docs.turbo360.co
const express = require('express')
const router = express.Router()

const Player = require('../models/Player')
const Team = require('../models/Team')

router.get('/team', (req, res) => {

    Team.find(null)
        .then(data => {
            res.json({
                confirmation: 'success',
                data: data
            })
        })
        .catch(err => {
            res.json({
                confirmation: 'fail',
                message: err.message
            })
        })
})

// router.get('/:resource', (req, res) => {

//     const resource = req.params.resource

//     const data = db[resource]
//     if (data == null) {

//         res.json({
//             confirmation: 'fail',
//             data: 'Invalid request. Resource undefined'
//         })

//         return
//     }
//     res.json({
//         confirmation: 'success',
//         data: data
//     })

// })

module.exports = router