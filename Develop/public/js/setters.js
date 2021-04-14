const setters = [{
    "name": "Jenny Fryer",
    "initials": "JJF",
    "boulders": 56,
    "top_rope" : 103,
    "active": true
},
{
    "name": "Xavier Torriente",
    "initials": "XJT",
    "boulders": 76,
    "top_rope" : 96,
    "active": true
},
{
    "name": "Chris Perez",
    "initials": "CP",
    "boulders": 45,
    "top_rope" : 63,
    "active": true
},{
    "name": "Chris St. Pierre",
    "initials": "CSP",
    "boulders": 80,
    "top_rope" : 26,
    "active": true
},{
    "name": "Zac Belida",
    "initials": "ZAC",
    "boulders": 15,
    "top_rope" : 94,
    "active": true
},{
    "name": "Lee Kraut",
    "initials": "LK",
    "boulders": 12,
    "top_rope" : 20,
    "active": true
},{
    "name": "Ashley Hopfenblatt",
    "initials": "AH",
    "boulders": "0",
    "top_rope" : 32,
    "active": false
},{
    "name": "Bryce Shannon",
    "initials": "BAS",
    "boulders": 11,
    "top_rope" : 26,
    "active": false
},{
    "name": "David Garabone",
    "initials": "DG",
    "boulders": 35,
    "top_rope" : 10,
    "active": false
}]

const setterList = $('#setList')

const loadSetters = () => {
    const currentSet = setters.filter(set => set.active === true)

    console.log(currentSet)
}

loadSetters()

