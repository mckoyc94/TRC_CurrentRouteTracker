const newForm = $('.addClimb')
// Locations
const boulderArea = ["...","M-Wall", "Nook", "The Roof", "Outer Volcano", "OG 45", "Volcano", "Beast Roof", "New 45", "Small Slab", "Big Slab"]
const leadArea = ["...","D", "E", "F", "G", "H", "I", "J", "K", "O", "P"]
// Colors
const boulderColors = ["...","blue", 'pink', 'green', 'yellow', 'orange', 'red']
const holdColors = ["...",'red', 'blue', 'green', 'yellow', 'pink', 'orange', 'purple', 'black', 'white', 'brown', 'so-ill green']
// Setters
const setters = ["...",'CSP', 'CP', 'JFF', 'LK', 'XJT', 'ZAC']
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
const tapeInput = $('<select>').addClass('form-control').attr('id', 'tape')
// Top Rope Grade Input
const grade = $('<div>').addClass('form-group col-md-4')
const gradeLabel = $('<label>').text("Grade")
const gradeInput = $('<select>').addClass('form-control').attr('id', 'grade')
// Route Color Input
const routeColor = $('<div>').addClass('form-group col-md-4')
const routeLabel = $('<label>').text("Climb Color")
const routeInput = $('<select>').addClass('form-control').attr('id', 'holds')
// Location Input
const locations = $('<div>').addClass('form-group col-md-4')
const locationLabel = $('<label>').text("Location")
const locationInput = $('<select>').addClass('form-control').attr('id', 'location')
// Setter Input
const setter = $('<div>').addClass('form-group col-md-6')
const setterLabel = $('<label>').text("Setter")
const setterInput = $('<select>').addClass('form-control').attr('id', 'setter')
// Submit Button
const submit = $('<button>').addClass('btn btn-primary').attr('id', 'submit').text('Submit')

// Adds Form to Page
const appendForm = (type) => {
    // Clears Form and Row 1
    newForm.empty()
    rowOne.empty()

    // Determines if User wants to add a Boulder or TR route
    // Updates Relevant Information based on type of climb being added
    if (type === 'boulder'){
        title.text('Add a New Boulder Problem')
        tapeColor.append(tapeLabel).append(tapeInput)

        boulderArea.map(area => {
            let newOption = $('<option>').text(area)
            locationInput.append(newOption)
        })

        boulderColors.map( tape => {
            let newOption = $('<option>').text(tape)
            tapeInput.append(newOption)
        })

        rowOne.append(tapeColor)
    } else {
        title.text('Add a New Top Rope or Lead Climb')
        grade.append(gradeLabel).append(gradeInput)

        leadArea.map(area => {
            let newOption = $('<option>').text(area)
            locationInput.append(newOption)
        })

        for(let i = 1; i < 59; i++){
            let newOption = $('<option>').text(i)
            locationInput.append(newOption)
        }

        topRopeGrade.map(tr => {
            let newOption = $('<option>').text(tr)
            gradeInput.append(newOption)
        })

        rowOne.append(grade)
    }
    
    setters.map( initial => {
        let newOption = $('<option>').text(initial)
        setterInput.append(newOption)
    })

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

// Loads Designated Form based on Drop Down Menu
$('.dropdown-item').click(e => {
    e.target.id === 'boulderClick' ? appendForm('boulder') : appendForm()
})

