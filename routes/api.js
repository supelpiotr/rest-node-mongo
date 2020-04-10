// Full Documentation - https://docs.turbo360.co
const express = require('express')
const router = express.Router()

const players = [
    { firstName: "eli", lastName: "manning", position: "qb", age: 37, team: "nyg" },
    { firstName: "tom", lastName: "brady", position: "qb", age: 41, team: "nep" },
    { firstName: "jj", lastName: "watt", position: "de", age: 28, team: "hou" }
]

const teams = [
    { name: "giants", city: "new york", conference: "nfc" },
    { name: "patriots", city: "new england", conference: "afc" },
    { name: "texans", city: "houston", conference: "afc" },
]

const db = {
    team: teams,
    player: players
}

router.get('/:resource', (req, res) => {

    const resource = req.params.resource

    const data = db[resource]
    if (data == null) {

        res.json({
            confirmation: 'fail',
            data: 'Invalid request. Resource undefined'
        })

        return
    }
    res.json({
        confirmation: 'success',
        data: data
    })

})

module.exports = router