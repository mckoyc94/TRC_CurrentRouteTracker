const db = require('../models');
const {Boulder, TopRope, Setter} = db

module.exports = (app) => {
    // Boulder API Calls    
    app.get('/api/boulders', (req, res) => {
        Boulder.find({}) 
        .then(dbBoulder => {
            res.json(dbBoulder)
        })
        .catch(err => res.json(err))
    })

    app.get('/api/boulders/sorted', (req, res) => {
        Boulder.find({active: true}).sort({location: 1}) 
        .then(dbBoulder => {
            res.json(dbBoulder)
        })
        .catch(err => res.json(err))
    })

    app.post('/api/boulders', ({body}, res) => {
        Boulder.create(body)
        .then(({_id, setter}) => Setter.findOneAndUpdate({initials: setter}, {$push: {boulders: _id} }, {new: true}))
        .then(dbBoulder => {
            res.json(dbBoulder)
        })
        .catch(err => {
            res.json(err);
          });
    })

    app.post('/api/boulders/clear_wall', ({body}, res) => {
        Boulder.updateMany({
            location: body.location
        },{
            $set: {active: false}
        }).then(dbBoulder => {
            res.json(dbBoulder)
        }).catch(err => res.json(err))
    })

    // Top Rope API Calls
    app.get('/api/topRope', (req, res) => {
        TopRope.find({})
        .then(dbTR => {
            res.json(dbTR)
        })
        .catch(err => res.json(err))
    })

    app.get('/api/topRope/sorted', (req, res) => {
        TopRope.find({active: true}).sort({location: 1}) 
        .then(dbBoulder => {
            res.json(dbBoulder)
        })
        .catch(err => res.json(err))
    })

    app.post('/api/topRope', ({body}, res) => {
        TopRope.create(body)
        .then(({_id, setter}) => Setter.findOneAndUpdate({initials: setter}, {$push: {top_rope: _id} }, {new: true}))
        .then(dbTR => {
            res.json(dbTR)
        })
        .catch(err => {
            res.json(err);
          });
    })

    app.post('/api/topRope/clear_wall', ({body}, res) => {
        TopRope.updateMany({
            location: body.location
        },{
            $set: {active: false}
        }).then(dbTR => {
            res.json(dbTR)
        }).catch(err => res.json(err))
    })

    // Setter API Calls
    app.get('/api/setters', (req, res) => {
        Setter.find({})
        .then(dbSetter => {
            res.json(dbSetter)
        })
        .catch(err => res.json(err))
    })

    app.get('/api/setters/active', (req, res) => {
        Setter.find({active: true})
        .then(dbSetter => {
            res.json(dbSetter)
        })
    })

    app.post('/api/setters/update', ({body}, res) => {
        Setter.updateOne({
            name: body.name
        },{
            $set: {active: body.active}
        })
        .then(dbSetter => res.json(dbSetter))
        .catch(err => res.json(err))
    })

    app.post('/api/setters', ({body}, res) => {
        Setter.create(body)
        .then(dbSetter => {
            res.json(dbSetter)
        })
    })
}