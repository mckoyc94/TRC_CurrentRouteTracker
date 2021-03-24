// On page elements
const filter = $('#filter');
// Locations
const boulderArea = ["...","M-Wall", "Nook", "The Roof", "Outer Volcano", "OG 45", "Volcano", "Beast Roof", "New 45", "Small Slab", "Big Slab"]
const leadArea = ["...","D", "E", "F", "G", "H", "I", "J", "K", "O", "P"]
// Colors
const boulderColors = ["...","Blue", 'Pink', 'Green', 'Yellow', 'Orange', 'Red']
const holdColors = ["...",'Red', 'Blue', 'Green', 'Yellow', 'Pink', 'Orange', 'Purple', 'Black', 'White', 'Brown', 'So-Ill Green']
// Setters
const setters = ["...",'CSP', 'CP', 'JFF', 'LK', 'XJT', 'ZAC']
// Grades
const topRopeGrade = ["...",'5.Fun', '7', '8', '9', '10a', '10b', '10c', '10d', '11a', '11b', '11c', '11d', '12a', '12b', '12c', '12d', '13a', '13b']
// Form Row
const rowTwo = $('<div>').addClass('form-row')
// Boulder Grade Input
const tapeColor = $('<div>').addClass('form-group col-md-3')
const tapeLabel = $('<label>').text("Tape Color")
// Top Rope Grade Input
const grade = $('<div>').addClass('form-group col-md-3')
const gradeLabel = $('<label>').text("Grade")
const gradeInput = $('<select>').addClass('form-control').attr('id', 'grade')
// Route Color Input
const routeColor = $('<div>').addClass('form-group col-md-3')
const routeLabel = $('<label>').text("Climb Color")
const routeInput = $('<select>').addClass('form-control').attr('id', 'holds')
// Location Input
const locations = $('<div>').addClass('form-group col-md-3')
const locationLabel = $('<label>').text("Location")
const locationInput = $('<select>').addClass('form-control').attr('id', 'location')
// Setter Input
const setter = $('<div>').addClass('form-group col-md-3')
const setterLabel = $('<label>').text("Setter")
const setterInput = $('<select>').addClass('form-control').attr('id', 'setter')
// Operator for Submit Button
let hasChanged;

const updatePage = () => {
    console.log("Going to Update Page")
}

const updateForm = climb => {
    hasChanged = false;
    rowTwo.remove()
    rowTwo.empty()
    setterInput.empty()
    gradeInput.empty()
    locationInput.empty()
    routeInput.empty()
    if (climb === 'boulder'){
         // Creates Tape Color Section
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
         rowTwo.append(tapeColor)
    } else {
        // Appends Grade Section
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
        rowTwo.append(grade)
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

    rowTwo.append(routeColor).append(locations).append(setter)

    $("#rowOne").append(rowTwo)
}

filter.on("click", 'button', event => {
    let type = $('#inputType').val();
    
    event.preventDefault();

    if(hasChanged){
        type === "Boulder" ? updateForm('boulder') : type === "Top Rope/Lead" ? updateForm() : console.log("Choose a Climb")   
    } else {
        updatePage()
    }

})

filter.on("change", "select", event => {
    event.preventDefault()
    if (event.target.id === 'inputType'){
        console.log("something changed")
        hasChanged = true;
    }
})
