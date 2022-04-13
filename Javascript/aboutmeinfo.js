// ============== HOBBIES MODAL ==============

// ============== The variables are assigned within a const to prevent change, a const for the open modal, modal content and closed modal is defined and holds the Id's   ==============
const open_hobbies_modal = document.getElementById('open_hobbies_modal');
const modal_hobbies = document.getElementById('modal_hobbies');
const close_hobbies_modal = document.getElementById('close_hobbies_modal');

// ============== When the button in the html page with the Id "open_hobbies_modal" is clicked, that modal would be given the class "show", within the css stylesheet the class "show: holds an opacity value of 1 and enables pointer-events allowing the user to interact with the close button within the modal ==============
open_hobbies_modal.addEventListener('click', () => {
    modal_hobbies.classList.add('show');

});

// ============== The close_hobbies_modal close button works the same as the open button however instead of adding the "show" class to the modal it would remove the class making the content not visible and interactable ==============
close_hobbies_modal.addEventListener('click', () => {
    modal_hobbies.classList.remove('show');

});

// ============== This is repeated a total of 3 times for each button/section for the about me page, creating more would be a simple task/adjustment ==============


// ============== ACHIEVEMENTS MODAL ==============
const open_achievements_modal = document.getElementById('open_achievements_modal');
const modal_achievements = document.getElementById('modal_achievements');
const close_achievements_modal = document.getElementById('close_achievements_modal');


open_achievements_modal.addEventListener('click', () => {
    modal_achievements.classList.add('show');

});


close_achievements_modal.addEventListener('click', () => {
    modal_achievements.classList.remove('show');

});

// ============== CHILDHOOD MODAL ==============
const open_childhood_modal = document.getElementById('open_childhood_modal');
const modal_childhood = document.getElementById('modal_childhood');
const close_childhood_modal = document.getElementById('close_childhood_modal');


open_childhood_modal.addEventListener('click', () => {
    modal_childhood.classList.add('show');

});


close_childhood_modal.addEventListener('click', () => {
    modal_childhood.classList.remove('show');

});
