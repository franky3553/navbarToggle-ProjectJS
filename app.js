// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

// selections
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

// nav toggle event
navToggle.addEventListener('click', function(){
   links.classList.toggle('show-links');
});