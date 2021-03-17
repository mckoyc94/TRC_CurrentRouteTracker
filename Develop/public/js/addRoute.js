const newForm = $('.addClimb')
// Locations
const boulderArea = ["M-Wall", "Nook", "The Roof", "Outer Volcano", "OG 45", "Volcano", "Beast Roof", "New 45", "Small Slab", "Big Slab"]
const leadArea = ["D", "E", "F", "G", "H", "I", "J", "K", "O", "P"]
// Colors
const boulderColors = ["blue", 'pink', 'green', 'yellow', 'orange', 'red']
const holdColors = ['red', 'blue', 'green', 'yellow', 'pink', 'orange', 'purple', 'black', 'white', 'brown', 'so-ill green']
// Form Rows
const rowOne = $('<div>').addClass('form-row')
const rowTwo = $('<div>').addClass('form-row')
// Route Color Input
const routeColor = $('<div>').addClass('form-group col-md-4')
const routeLabel = $('<label>').val("Climb Color")
const routeInput = $('<select>').addClass('form-control').attr('id', 'holds')
// Location Input
const locations = $('<div>').addClass('form-group col-md-4')
const locationLabel = $('<label>').val("Location")
const locationInput = $('<select>').addClass('form-control').attr('id', 'location')
// Setter Input
const setter = $('<div>').addClass('form-group col-md-6')
const setterLabel = $('<label>').val("Setter")
const setterInput = $('<select>').addClass('form-control').attr('id', 'setter')
// Submit Button
const submit = $('<button>').addClass('btn btn-primary').attr('id', 'submit')

// Adds Form to Page
const appendForm = (type, level) => {


    routeColor.append(routeLabel).append(routeInput)
    locations.append(locationLabel).append(locationInput)
    setter.append(setterLabel).append(setterInput)
}

// Creates Form for Boulder Route
const boulderForm = () => {
    console.log('You want to make a Boulder climb')
    const tapeColor = $('<div>').addClass('form-group col-md-4')
    const tapeLabel = $('<label>').val("Tape Color")
    const tapeInput = $('<select>').addClass('form-control').attr('id', 'tape')
    
}

// Creates Form for Top Rope Route
const leadForm = () => {
    console.log('You want to make a Top Rope climb')
    const grade = $('<div>').addClass('form-group col-md-4')
    const tapeLabel = $('<label>').val("Grade")
    const tapeInput = $('<select>').addClass('form-control').attr('id', 'grade')
}