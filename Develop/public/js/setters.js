// Variable for Setters
let setters = [];
// Page Elements
const setterList = $('#setList')
const inactiveList = $('#inputSetter')

// Loads Setters and Page
const getSetters = () => {
    $.get('api/setters').then(data => {
        setters = [...data]
        loadSetters()
    })
}

// Filters thru the Setters and Displays them on the Page
const loadSetters = () => {
    // Filters Setters by Active Status
    const currentSet = setters.filter(set => set.active === true)
    const inactiveSet = setters.filter(set => set.active === false)
    // Title for Active List
    const title = $("<li>").addClass("list-group-item").attr("id", "listTitle")
    const titleText = $("<strong>").text("Current Setters")
    // Start Option For Inactive Setters List
    const defaultOpt = $("<option>").text(" ")

    // Empties Current List and Posts Title 
    setterList.empty()
    title.append(titleText)
    setterList.append(title)

    // Empties Inactive Dropdown and appends the Default Option
    inactiveList.empty()
    inactiveList.append(defaultOpt)

    // Goes through Active Setters and appends them to List
    currentSet.map(setter => {
        // Traits
        let name = setter.name;
        let init = setter.initials;
        let boulder = setter.boulders;
        let tR = setter.top_rope;
        // New List Item with Traits included
        let newList = `
            <li class="list-group-item">
                <strong>Name: </strong> ${name}   <strong>Initials: </strong> ${init}
                <br>
                <strong># of Boulders: </strong> ${boulder.length}
                <br>
                <strong># of Top Rope Climbs: </strong> ${tR.length}
                <button class="listButton" id="${name}"> Deactivate </button> 
            </li>
        `
        // Appends item to List
        setterList.append(newList)
    })

    // Filters through Inactive Setters and Adds them to List for Reactivation
    inactiveSet.map(setter => {
        // Sets Option List Item
        let name = setter.name
        let id = setter.id
        let newOpt = `<option id="${id}">${name}</option>`

        // Appends Item to Inactive Dropdown
        inactiveList.append(newOpt)
    })    
}

// Changes Active Status for Setter
const changeActive = (active, setter) => {
    // Checks Which Change is Requested
    if (active === 'activate'){
        // Reactivates Setter
        const oldSetter = { 
            name: setter,
            active: true
        }
        // Updates Setter in DB
        $.post('/api/setters/update', oldSetter)
        // Confirms Change for User
        .then(alert(`${oldSetter.name} reactivated`))
        // Reloads Lists
        .then(getSetters())
            
    } else if (active === 'deactivate'){
        // Deactivates Setter
        const oldSetter = { 
            name: setter,
            active: false
        }
        // Updates Setter in DB
        $.post('/api/setters/update', oldSetter)
        // Confirms Changes for User
        .then(alert(`${oldSetter.name} deactivated`))
        // Reloads Lists
        .then(getSetters())
    }
}

// Reactivates Old Setter
$("#reactive").on("click", e => {
    e.preventDefault()
    const setName = $('#inputSetter').val()
    changeActive("activate", setName)
})

// Deactivates Current Setter
setterList.on("click", "button", e => {
    e.preventDefault()
    const setName = e.target.id 
    changeActive("deactivate", setName)
})

// Adds New Setter to DB
$("#addSet").on('click', e => {
    e.preventDefault()
    // Corrects Name for first letters of each name to be capitalized
    const input = $('#inputName').val().split(" ")
    let newName = ""
    input.forEach(word => {
        word = word.charAt(0).toUpperCase() + word.slice(1)
        newName = newName + word + " "
    })
    // Body for New Setter
    const newSetter = {
        name: newName.trim(),
        initials: $('#inputInitial').val().toUpperCase()
    }
    // Destructures Setter Obj
    const {name, initials} = newSetter

    // Makes sure the user filled out all necessary forms
    if(name === '' || initials === ''){
        alert("Please Add a Name and Initials")
    } else {
        // Goes through Database to confirm a New Setter is being added
        $.get('/api/setters').then(data => {
            const settersDB = [...data]
            let oldSet;
            let oldSetInit;
            // Filters through Setters and returns any matches
            oldSet = settersDB.filter(setter => setter.name.toUpperCase() === name.toUpperCase())
            oldSetInit = settersDB.filter(setter => setter.initials === initials)

            // If any matches found, asks user to add new Setter
            if(oldSetInit.length != 0){
                alert("A Setter Already has these initials")
            } else if (oldSet.length != 0){
                alert("There is Already a Setter with this name")
            } else {
               // Posts new Setter to DB
               $.post('/api/setters', newSetter)
               // Confirms entry for user
               .then(alert(`Welcome our newest setter: ${name}`))
               // Resets page and text box for another setter
               .then(() => {
                   location.reload()
                })
            }
            
        })
    }
})

// Loads Setters on Page Load
getSetters()

