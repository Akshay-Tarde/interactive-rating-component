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

// Making conditional rendering of the components

let isSubmit = false;
const submitBtn = document.querySelector('.submit-btn');
const ratingState = document.querySelector('.rating-state');
const thankYouState = document.querySelector('.thank-you-state');
function toggleSubmit() {
    isSubmit = true;
    ratingState.style.display = 'none';
    thankYouState.style.display= 'grid';
}
submitBtn.addEventListener('click', toggleSubmit);