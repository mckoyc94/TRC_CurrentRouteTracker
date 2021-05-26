const newForm = $('.addClimb')
// Locations
const boulderArea = ["...","M-Wall", "Nook", "The Roof", "Outer Volcano", "OG 45", "Volcano", "Beast Roof", "New 45", "Small Slab", "Big Slab"]
const leadArea = ["...","D", "E", "F", "G", "H", "I", "J", "K", "O", "P"]
// Colors
const boulderColors = ["...","Blue", 'Pink', 'Green', 'Yellow', 'Orange', 'Red']
const holdColors = ["...",'Red', 'Blue', 'Green', 'Yellow', 'Pink', 'Orange', 'Purple', 'Black', 'White', 'Brown', 'So-Ill Green']
// Setters
let setters = ["..."]
// Grades
const topRopeGrade = ["...",'5.Fun', '7', '8', '9', '10a', '10b', '10c', '10d', '11a', '11b', '11c', '11d', '12a', '12b', '12c', '12d', '13a', '13b']
// Form Rows
const titleRow = $('<div>').addClass('form-row')
const rowOne = $('<div>').addClass('form-row')
const rowTwo = $('<div>').addClass('form-row')
// Title
const title = $('<h1>').addClass('form-group col-md-12 center')
// Boulder Grade Input
const tapeColor = $('<div>').addClass('form-group col-md-4')
const tapeLabel = $('<label>').text("Tape Color")
// Top Rope Grade Input
const grade = $('<div>').addClass('form-group col-md-4')
const gradeLabel = $('<label>').text("Grade")
const gradeInput = $('<select>').addClass('form-control').attr('id', 'grade')
// Route Color Input
const routeColor = $('<div>').addClass('form-group col-md-4')
const routeLabel = $('<label>').text("Climb Color")
const routeInput = $('<select>').addClass('form-control').attr('id', 'holds').attr("name", 'climbColor')
// Location Input
const locations = $('<div>').addClass('form-group col-md-4')
const locationLabel = $('<label>').text("Location")
const locationInput = $('<select>').addClass('form-control').attr('id', 'location').attr("name", 'location')
// Setter Input
const setter = $('<div>').addClass('form-group col-md-6')
const setterLabel = $('<label>').text("Setter")
const setterInput = $('<select>').addClass('form-control').attr('id', 'setter').attr("name", 'setter')
// Submit Button
const submit = $('<button>').addClass('btn btn-primary').attr('id', 'submit').text('Submit')
// Type of Climb Being Added
let formType = "";

const loadWalls = () => {
    boulderArea.map(wall => {
        const newWall = `<button class="dropdown-item" id='${wall}'>${wall}</button>`
        $('#wallList').append(newWall)
    })

    leadArea.map(wall => {
        const newWall = `<button class="dropdown-item" id='${wall}'>${wall}</button>`
        $('#wallList').append(newWall)
    })

    for(var wall = 1; wall < 59; wall++){
            const newWall = `<button class="dropdown-item" id='${wall}'>${wall}</button>`
            $('#wallList').append(newWall)
    }
}

// Adds Setters Initials to be used
const getSetters = () => {
    $.get('api/setters/active').then(data => {
        data.map(setter => {
            setters.push(setter.initials)
        })
    })
}

// Adds Form to Page
const appendForm = (type) => {
    // Clears Form and Row 1
    newForm.empty()
    rowOne.empty()
    setterInput.empty()
    gradeInput.empty()
    locationInput.empty()
    routeInput.empty()

    // Determines if User wants to add a Boulder or TR route
    // Updates Relevant Information based on type of climb being added
    if (type === 'boulder'){
        // Updates form type 
        formType = 'boulder'
        // Updates Title
        title.text('Add a New Boulder Problem')
        // Creates Tape Color Section
        gradeInput.attr("name", 'tapeColor')
        tapeColor.append(tapeLabel).append(gradeInput)

        // Adds Boulder Locations to form
        boulderArea.map(area => {
            let newOption = $('<option>').text(area)
            locationInput.append(newOption)
        })

        // Adds Boulder Tape Colors to form
        boulderColors.map( tape => {
            let newOption = $('<option>').text(tape)
            gradeInput.append(newOption)
        })
        // Appends Tape Color to form
        rowOne.append(tapeColor)
    } else {
        // Updates Form Type
        formType = "top rope"
        // Updates Title
        title.text('Add a New Top Rope or Lead Climb')
        // Appends Grade Section
        gradeInput.attr("name", 'grade')
        grade.append(gradeLabel).append(gradeInput)

        // Adds Top Rope and Lead Walls to form
        leadArea.map(area => {
            let newOption = $('<option>').text(area)
            locationInput.append(newOption)
        })
        for(let i = 1; i < 59; i++){
            let newOption = $('<option>').text(i)
            locationInput.append(newOption)
        }

        // Adds TR Grades to form
        topRopeGrade.map(tr => {
            let newOption = $('<option>').text(tr)
            gradeInput.append(newOption)
        })
        // Appends Grades to form
        rowOne.append(grade)
    }
    
    // Adds Setters to form
    setters.map( initial => {
        let newOption = $('<option>').text(initial)
        setterInput.append(newOption)
    })

    // Adds Hold Colors to form
    holdColors.map( hold => {
        let newOption = $('<option>').text(hold)
        routeInput.append(newOption)
    })

    // Appends Labels and Inputs to Sections
    routeColor.append(routeLabel).append(routeInput)
    locations.append(locationLabel).append(locationInput)
    setter.append(setterLabel).append(setterInput)

    // Appends Sections to Rows
    titleRow.append(title)
    rowOne.append(routeColor).append(locations)
    rowTwo.append(setter)

    // Appends all rows to Form Area
    newForm.append(titleRow).append(rowOne).append(rowTwo).append(submit) 
}

const clearWall = wall => {
    console.log(wall)
    if(wall === '...'){
        alert('Please choose a valid wall')
    } else {
        const isBoulder = boulderArea.filter(boulder => boulder === wall)
        if(isBoulder.length === 0){
            console.log('Clear Top Rope Wall')
            const updateWall = {location: wall}
            $.post('/api/topRope/clear_wall', updateWall)
            alert(`${updateWall.location} has been cleared`)
        } else {
            console.log('Clear Boulder Wall')
        }
    }
}

// Loads Designated Form based on Drop Down Menu
$('.dropdown-item').click(e => {
    e.target.id === 'boulderClick' ? appendForm('boulder') : appendForm()
})

$('#wallList').on('click', 'button', e => {
    clearWall(e.target.id)
})

// Adds Climbs to Database when Submit Button is Clicked
newForm.on('click', 'button', event => {
    // Prevents Page Reload
    event.preventDefault()
    // Only Adds Climb once Submit is Clicked
    if (event.target.id === 'submit'){
        // Grabs the Values of Form
        let newGrade = gradeInput.val()
        let newSetter = setterInput.val()
        let newColor = routeInput.val()
        let newLocal = locationInput.val()

        // Won't add climb if any input is not filled
        if (newGrade === "..." || newSetter === "..." || newColor === "..." || newLocal === "..."){
            alert('Please fill out all areas')
        // Adds Climb to DB
        } else {
            // Allows Function to know which form to reload
            let newClimb;
            if (formType === 'boulder'){
                newClimb = {
                    setter: newSetter,
                    tapeColor: newGrade,
                    climbColor: newColor,
                    location: newLocal
                }
            } else {
                newClimb = {
                    setter: newSetter,
                    grade: newGrade,
                    climbColor: newColor,
                    location: newLocal
                }
            }
            
            // Takes in Info and Adds it to DB
            if (formType === "boulder"){
                $.post('/api/boulders', newClimb)
            } else {
                $.post('/api/topRope', newClimb)
            }
            console.log(`Grade: ${newGrade} \nSetter: ${newSetter} \nColor: ${newColor} \nArea: ${newLocal}`)
            
            // Reloads Form based on what type of climb is trying to be added
            formType === 'boulder'? appendForm('boulder') : appendForm()

        }
    
    }
})

// Loads Setters when Page Loads
getSetters()
loadWalls()