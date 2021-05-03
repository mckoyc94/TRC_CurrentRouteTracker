let setters = [];

const setterList = $('#setList')
const inactiveList = $('#inputSetter')

const getSetters = () => {
    $.get('api/setters').then(data => {
        setters = [...data]
        loadSetters()
    })
}

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
        console.log(setter)
        let name = setter.name;
        let init = setter.initials;
        let boulder = setter.boulders;
        let tR = setter.top_rope;
        let newList = `
            <li class="list-group-item">
                <strong>Name: </strong> ${name}   <strong>Initials: </strong> ${init}
                <br>
                <strong># of Boulders: </strong> ${boulder.length}
                <br>
                <strong># of Top Rope Climbs: </strong> ${tR.length}
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

getSetters()

