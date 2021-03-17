const newForm = $('.addClimb')
// Locations
const boulderArea = ["M-Wall", "Nook", "The Roof", "Outer Volcano", "OG 45", "Volcano", "Beast Roof", "New 45", "Small Slab", "Big Slab"]
const leadArea = ["D", "E", "F", "G", "H", "I", "J", "K", "O", "P"]
// Colors
const boulderColors = ["blue", 'pink', 'green', 'yellow', 'orange', 'red']
const holdColors = ['red', 'blue', 'green', 'yellow', 'pink', 'orange', 'purple', 'black', 'white', 'brown', 'so-ill green']
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
    newForm.empty()
    rowOne.empty()
    if (type === 'boulder'){
        title.text('Add a New Boulder Problem')
        tapeColor.append(tapeLabel).append(tapeInput)

        rowOne.append(tapeColor)
    } else {
        title.text('Add a New Top Rope or Lead Climb')
        grade.append(gradeLabel).append(gradeInput)

        rowOne.append(grade)
    }
    
    routeColor.append(routeLabel).append(routeInput)
    locations.append(locationLabel).append(locationInput)
    setter.append(setterLabel).append(setterInput)

    titleRow.append(title)
    rowOne.append(routeColor).append(locations)
    rowTwo.append(setter)

    newForm.append(titleRow).append(rowOne).append(rowTwo).append(submit) 
}

$('.dropdown-item').click(e => {
    e.target.id === 'boulderClick' ? appendForm('boulder') : appendForm()
})

