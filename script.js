// console.log ('hello world');

$(document).ready(onReady)

let divNumber = 0;

function onReady() {
    // console.log('ready jQuery');
    $('#generate-button').on('click', handleGenerate)
    $('#div-landing-pad').on('click', '.yellow-button', handleYellow)
    $('#div-landing-pad').on('click', '.delete-button', handleDelete)
    
}

function handleGenerate() {
    // console.log('generate button!');
    divNumber++;
    console.log('divNumber is now:', divNumber)
    $('#div-landing-pad').append(`
    <div>
        <p>${divNumber}</p>
        <span><button class="yellow-button">Yellow</button></span>
        <span><button class="delete-button">Delete</button></span>
    </div>
`)
}

function handleYellow() {
    // console.log('Yellow!');
    $(this).parent().parent().addClass('change-to-yellow')
}

function handleDelete() {
    $(this).parent().parent().remove()
}