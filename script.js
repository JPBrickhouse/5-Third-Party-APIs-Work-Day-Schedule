// ALL the code will go within this document.ready function
// jQuery will detect this state of readiness so that code included inside
// this function will only run once the DOM is ready for JavaScript code to execute.
$(document).ready(function() {
    
    // Displaying the current date and day of the week
    var currentDay = moment().format('dddd, MMMM Do, YYYY');
    $("#currentDay").html(currentDay);
















});