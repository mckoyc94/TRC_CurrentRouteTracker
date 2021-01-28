const db = require('../models');
const {Boulder, TopRope} = db

module.exports = (app) => {
    app.get('/api/boulders', (req, res) => {
        Boulder.find({}) 
    }).then((dbBoulder) => {
        res.json(dbBoulder)
    })
}