// ALL the code will go within this document.ready function
// jQuery will detect this state of readiness so that code included inside
// this function will only run once the DOM is ready for JavaScript code to execute.
$(document).ready(function() {
    
    // Displaying the current date and day of the week in the Jumbotron Header
    var update = function () {
        $("#currentDay").html(moment().format('dddd, MMMM Do, YYYY, h:mm:ss a'));
    }
    // This dynamically updates and displays the current time every second
    setInterval(update, 1000);




    // Set classes on all the text area time blocks
    // If the time has passed, set the class to .past
    // If the time is present, set the class to .present
    // If the time is future, set the class to .future




    // Set values?

    // Set IDs on all the textareas
    // nineAMtextarea, tenAMtextarea, etc.
    // Set IDs on all of the buttons
    // nineAMbutton, tenAMbutton, etc.
    // When the submit button is pushed, the text content is saved in localStorage

    $(".buttonButton").on("click", function () {
        console.log($(this).val());
    });

});