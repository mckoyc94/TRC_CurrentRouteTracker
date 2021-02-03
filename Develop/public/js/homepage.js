const date = $('.card-subtitle')
const ctx = document.getElementById('myChart').getContext('2d');

date.text("Testing Weather")

const chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['7', '8', '9', '10a', '10b', '10c', '10d', '11a', '11b', '11c', '11d', '12a', '12b', '12c', '12d', '13a'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [4, 7, 9, 11, 8, 10, 4, 5, 9, 7, 5, 2, 2]
        }]
    },

    // Configuration options go here
    options: {}
});