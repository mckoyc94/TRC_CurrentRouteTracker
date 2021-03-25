// Variables
const date = $('.card-subtitle')
const ctx = document.getElementById('myChart').getContext('2d');

//
const day = moment().format('MMMM Do YYYY')
date.text(day)
console.log(day)

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
        }]
    },

    // Additional Options for Chart
    options: {}
});