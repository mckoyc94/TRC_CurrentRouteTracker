const db = require('../models');
const {Boulder, TopRope, Setter} = db

module.exports = (app) => {
    app.get('/api/boulders', (req, res) => {
        Boulder.find({}) 
        .then(dbBoulder => {
            res.json(dbBoulder)
        })
    })

    app.post('/api/boulders', ({body}, res) => {
        Boulder.create(body)
        .then(dbBoulder => {
            res.json(dbBoulder)
        })
    })

    app.get('/api/topRope', (req, res) => {
        TopRope.find({})
        .then(dbTR => {
            res.json(dbTR)
        })
    })

    app.post('/api/topRope', ({body}, res) => {
        TopRope.create(body)
        .then(dbTR => {
            res.json(dbTR)
        })
    })

    app.get('/api/setters', (req, res) => {
        Setter.find({})
        .then(dbSetter => {
            res.json(dbSetter)
        })
    })

    app.post('/api/setters', ({body}, res) => {
        Setter.create(body)
        .then(dbSetter => {
            res.json(dbSetter)
        })
    })
}