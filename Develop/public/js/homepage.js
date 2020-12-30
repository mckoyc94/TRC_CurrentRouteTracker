const hello = $('h1')
const button = $('button')
button.on('click', () => {
    console.log("clicked")
    hello.css("color", "red")
} )