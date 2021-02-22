const newForm = $('.addClimb')
const boulderArea = ["M-Wall", "Nook", "The Roof", "Outer Volcano", "OG 45", "Volcano", "Beast Roof", "New 45", "Small Slab", "Big Slab"]
const leadArea = ["D", "E", "F", "G", "H", "I", "J", "K", "O", "P"]
const boulderColors = ["blue", 'pink', 'green', 'yellow', 'orange', 'red']
const holdColors = ['red', 'blue', 'green', 'yellow', 'pink', 'orange', 'purple', 'black', 'white', 'brown', 'so-ill green']
const rowOne = $('<div>').addClass('form-row')
const rowTwo = $('<div>').addClass('form-row')
const routeColor = $('<div>').addClass('form-group col-md-4')
const routeLabel = $('<label>').val("Climb Color")
const routeInput = $('<select>').addClass('form-control').attr('id', 'holds')
const location = $('<div>').addClass('form-group col-md-4')
const locationLabel = $('<label>').val("Location")
const locationInput = $('<select>').addClass('form-control').attr('id', 'location')
const setter = $('<div>').addClass('form-group col-md-6')
const setterLabel = $('<label>').val("Setter")
const setterInput = $('<select>').addClass('form-control').attr('id', 'setter')
const submit = $('<button>').addClass('btn btn-primary').attr('id', 'submit')

const boulderForm = () => {
    console.log('You want to make a Boulder climb')
    const tapeColor = $('<div>').addClass('form-group col-md-4').attr('id', 'tape')
    
}

const leadForm = () => {
    console.log('You want to make a Top Rope climb')
    const grade = $('<div>').addClass('form-group col-md-4').attr('id', 'grade')
}