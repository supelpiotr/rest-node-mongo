// Full Documentation - https://docs.turbo360.co
const express = require('express')
const router = express.Router()
const controllers = require('../controllers')

router.get('/:resource', (req, res) => {
    const resource = req.params.resource
    const controller = controllers[resource]

    if (controller == null) {
        res.json({
            confirmation: 'fail',
            data: 'Invalid request. Resource undefined'
        })
        return
    }

    controller.get()
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

router.get('/:resource/:id', (req, res) => {
    const resource = req.params.resource
    const id = req.params.id

    const controller = controllers[resource]
    if (controller == null) {
        res.json({
            confirmation: 'fail',
            data: 'Invalid request. Resource undefined'
        })

        return
    }

    controller.getById(id)
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

module.exports = router