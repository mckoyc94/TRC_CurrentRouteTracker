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
const inactiveList = $('#inputSetter')

const loadSetters = () => {
    const currentSet = setters.filter(set => set.active === true)
    const inactiveSet = setters.filter(set => set.active === false)
    const title = $("<li>").addClass("list-group-item").attr("id", "listTitle")
    const titleText = $("<strong>").text("Current Setters")
    const defaultOpt = $("<option>").text(" ")

    setterList.empty()
    title.append(titleText)
    setterList.append(title)

    inactiveList.empty()
    inactiveList.append(defaultOpt)

    currentSet.map(setter => {
        let name = setter.name;
        let init = setter.initials;
        let boulder = setter.boulders;
        let tR = setter.top_rope;
        let newList = `
            <li class="list-group-item">
                <strong>Name: </strong> ${name}   <strong>Initials: </strong> ${init}
                <br>
                <strong># of Boulders: </strong> ${boulder}
                <br>
                <strong># of Top Rope Climbs: </strong> ${tR}
                <button class="listButton" id="${init}"> Deactivate </button> 
            </li>
        `

        setterList.append(newList)
    })

    inactiveSet.map(setter => {
        let name = setter.name
        let newOpt = `<option>${name}</option>`

        inactiveList.append(newOpt)
    })    
}

loadSetters()

