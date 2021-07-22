// On page elements
const filter = $('#filter');
const ctx = document.getElementById('myChart').getContext('2d');
// Locations
const boulderArea = ["...","M-Wall", "Nook", "The Roof", "Outer Volcano", "OG 45", "Volcano", "Beast Roof", "New 45", "Small Slab", "Big Slab"]
const leadArea = ["...","D", "E", "F", "G", "H", "I", "J", "K", "O", "P"]
// Colors
const boulderColors = ["...","Blue", 'Pink', 'Green', 'Yellow', 'Orange', 'Red']
const holdColors = ["...",'Red', 'Blue', 'Green', 'Yellow', 'Pink', 'Orange', 'Purple', 'Black', 'White', 'Brown', 'So-Ill Green']
// Grades
const topRopeGrade = ["...",'5', '6', '7', '8', '9', '10a', '10b', '10c', '10d', '11a', '11b', '11c', '11d', '12a', '12b', '12c', '12d', '13a', '13b']
// Form Row
const rowTwo = $('<div>').addClass('form-row')
// Boulder Grade Input
const tapeColor = $('<div>').addClass('form-group col-lg-3')
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
let formType;

const updatePage = climb => {
    $("#climbList").removeClass("hide")
    $("#climbList").empty()
    $("#date").removeClass("hide")
    $("#totalClimbs").removeClass("hide")
    $("#targetTable").removeClass("hide")
    $("#targetBody").empty()
    $("#setterTable").removeClass("hide")
    $("#setterBody").empty()
    $("#myChart").removeClass("hide")

    const listTitle = `<li class="list-group-item" id="listTitle"><Strong>Current Routes in Gym</Strong></li>`
    $("#climbList").append(listTitle)

    $("#cardDate").text(moment().format('dddd MMMM Do YYYY'))

    if(climb === 'Boulder'){
        $.get('/api/boulders/sorted/walls', data => {
            const numClimb = data.length
            $("#totalClimbSpan").text(numClimb)
            data.map(boulder => {
                const {location, setter, tapeColor, climbColor, date} = boulder
                let climbColorId;
                if(climbColor === "So-Ill Green"){
                    climbColorId = "so-illgreen"
                } else {
                    climbColorId = climbColor.toLowerCase()
                }
                const newListItem = `<li class="list-group-item" id = "climbListItem">
                <strong>Location:</strong> ${location} <strong>Climb Color: </strong> <div id ="${climbColorId}"></div>
                <br>
                <strong>Grade:</strong> ${tapeColor} Tape
                </br>
                <strong>Date Set: </strong> ${moment(date).format("MM/DD/YY")}
                </br>
                <strong>Setter:</strong> ${setter}
                <button class="listButton">Edit</button>
                </br>
                </li>`
                $('#climbList').append(newListItem)
            })
            boulderColors.map(grade => {
                if(grade != "..."){
                    const numOfClimbs = data.filter(climb => climb.tapeColor === grade)
                    const newRow = `<tr>
                        <th scope="col">${grade}</th>
                        <th scope="col"></th>
                        <th scope="col">${numOfClimbs.length}</th>
                        <th scope="col"></th> 
                        <th scope="col"></th>
                        <th scope="col">${((numOfClimbs.length/data.length)*100).toFixed(2)}%</th>
                    </tr>`
                    $('#targetBody').append(newRow)
                }
            })
            $.get('/api/setters/active', setters => {
                setters.map(setter => {
                    const numOfClimbsSet = data.filter(climb => climb.setter === setter.initials)
                    const newRow = `<tr>
                        <th scope="col">${setter.initials}</th>
                        <th scope="col">${numOfClimbsSet.length}</th>
                    </tr>`
                    $('#setterBody').append(newRow)
                })
            })
        })
        $.get('/api/boulders/oldest', oldestClimb => {
            const {date} = oldestClimb[0]
            $('#oldClimb').text(moment(date,"YYYYMMDD").fromNow())
        })

    } else {
        $.get('/api/topRope/sorted', data => {
            
            const numClimb = data.length
            $("#totalClimbSpan").text(numClimb)

            data.map(tR => {
                const {location, setter, grade, climbColor, date} = tR
                let climbColorId;
                if(climbColor === "So-Ill Green"){
                    climbColorId = "so-illgreen"
                } else {
                    climbColorId = climbColor.toLowerCase()
                }
                const newListItem = `<li class="list-group-item" id = "climbListItem">
                <strong>Location:</strong> ${location} <strong>Climb Color: </strong> <div id ="${climbColorId}"></div>
                <br>
                <strong>Grade:</strong> ${grade}
                </br>
                <strong>Date Set: </strong> ${moment(date).format("MM/DD/YY")}
                </br>
                <strong>Setter:</strong> ${setter}
                <button class="listButton">Edit</button>
                </br>
                </li>`
                $('#climbList').append(newListItem)
            })

            topRopeGrade.map(grade => {
                if(grade != "..."){
                    const numOfClimbs = data.filter(climb => climb.grade === grade)
                    const newRow = `<tr>
                        <th scope="col">${grade}</th>
                        <th scope="col"></th>
                        <th scope="col">${numOfClimbs.length}</th>
                        <th scope="col"></th> 
                        <th scope="col"></th>
                        <th scope="col">${((numOfClimbs.length/data.length)*100).toFixed(2)}%</th>
                    </tr>`
                    $('#targetBody').append(newRow)
                }
            })
            $.get('api/setters', setters => {
                setters.map(setter => {
                    const numOfClimbsSet = data.filter(climb => climb.setter === setter.initials)
                    if(numOfClimbsSet.length > 0 || setter.active === true){
                        const newRow = `<tr>
                            <th scope="col">${setter.initials}</th>
                            <th scope="col">${numOfClimbsSet.length}</th>
                        </tr>`
                        $('#setterBody').append(newRow)
                    }
                })
            })

        })
        $.get('/api/topRope/oldest', oldestClimb => {
            const {date} = oldestClimb[0]
            $('#oldClimb').text(moment(date,"YYYYMMDD").fromNow())
        })
    }
}

const updateForm = climb => {
    hasChanged = false;
    rowTwo.remove()
    rowTwo.empty()
    setterInput.empty()
    gradeInput.empty()
    locationInput.empty()
    routeInput.empty()
    if (climb === 'Boulder'){
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
            let newOption = $('<option>')
            if(i < 10){
                const num = "0"+i
                newOption.text(num)
                locationInput.append(newOption)
            } else {
                newOption.text(i)
            }
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
    let defaultOption = $('<option>').text("...")
    setterInput.append(defaultOption)
    $.get('/api/setters/active', setters => {
        setters.map( setter => {
            let newOption = $('<option>').text(setter.initials)
            setterInput.append(newOption)
        })
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
    updatePage(climb)
}

filter.on("click", 'button', event => {
    formType = $('#inputType').val();
    
    event.preventDefault();

    if(formType !== "Boulder" && formType !== "Top Rope/Lead"){
        alert("Please Choose What Data You'd Like to See")
    } else {
        if(hasChanged){
           updateForm(formType)
        } else {
            updatePage(formType)
        }
    }


})

filter.on("change", "select", event => {
    event.preventDefault()
    if (event.target.id === 'inputType'){
        console.log("something changed")
        hasChanged = true;
    }
})

// Chart Data
const chart = new Chart(ctx, {
    // Chart Type
    type: 'bar',

    // Dataset
    data: {
        labels: ['7', '8', '9', '10a', '10b', '10c', '10d', '11a', '11b', '11c', '11d', '12a', '12b', '12c', '12d', '13a'],
        datasets: [{
            label: 'Test table',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [4, 7, 9, 11, 8, 10, 4, 5, 9, 7, 5, 2, 2]
        },{
            label: 'Test table 2',
            backgroundColor: 'blue',
            borderColor: 'rgb(255, 99, 132)',
            data: [6, 5, 11, 8, 12, 6, 8, 3, 2, 5, 7, 2, 1, 1, 1, 1]
        }]
    },

    // Additional Options for Chart
    options: {}
});