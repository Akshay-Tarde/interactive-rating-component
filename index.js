// event.target.classList.remove('rating-btn:focus', 'rating-btn:hover');
// event.target.classList.add('selected-btn');
// Taking input from the button

const ratingButtons = document.querySelectorAll('.rating-btn'); 
let selectedButton = null;

// function to change styling of the selected button
function changeStyle(btn) {
    const previousSelected = document.getElementById('selected-btn');
    if (previousSelected) {
        previousSelected.id = null;
    }
    selectedButton.id = 'selected-btn';
}

// callback function 
function getRating(event) {
    selectedButton = event.target;
    changeStyle(selectedButton);
    console.log(`Button pressed`);
    //console.log(event);
}
ratingButtons.forEach(item => item.addEventListener('click', getRating));

