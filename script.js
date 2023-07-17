// console.log ('hello world');

$(document).ready(onReady)

// global variable to update whenever Generate button is clicked
let divNumber = 0;

// function for handlers after page is fully loaded
function onReady() {
    // console.log('ready jQuery');
    $('#generate-button').on('click', handleGenerate)
    $('#div-landing-pad').on('click', '.yellow-button', handleYellow)
    $('#div-landing-pad').on('click', '.delete-button', handleDelete)
}

// function to run whenever clicking Generate button
// want to increment divNumber by 1 upon click
// want to add new div with 
function handleGenerate() {
    // console.log('generate button!');
    divNumber++;
    // console.log('divNumber is now:', divNumber)
    $('#div-landing-pad').append(`
    <div class="big-div">
        <p>${divNumber}</p>
        <div>
            <button class="yellow-button">Yellow</button>
            <button class="delete-button">Delete</button>
        </div>
    </div>
`)
}

// function to run whenever clicking Yellow button
// want to traverse upwards to closest item with class of big-div and add another class (CSS for that class will change the div to yellow background)
function handleYellow() {
    // console.log('Yellow!');
    $(this).closest('.big-div').addClass('change-to-yellow')
}

// function to run whenever clicking Delete button
// want to delete the whole div by finding big-div class using tree traversal in reference to delete button
function handleDelete() {
    // console.log('Delete!');
    $(this).closest('.big-div').remove()
}