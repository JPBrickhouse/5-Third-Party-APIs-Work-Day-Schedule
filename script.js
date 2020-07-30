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
    // It also changes the textarea value

    

    function submitRecall(event) {
        event.preventDefault();
        
        
        // Check if it's blank
        // If blank, just store it in localStorage
        // Else, recall from local storage and display
        // NEED to display initially, too

        
    };



    
    
    // Defining the function buttonClick, which defines what happens when
    // the submit buttons are clicked...
    function buttonClick () {
        console.log(this.id);
        
        var textID = this.id + "text";
        console.log(textID);


        // UPDATE FROM HERE
        // WRITE THE FUNCTION submitRecall
        // CALL THE FUNCTION AND OUTPUT THE VALUE

        document.getElementById(textID).value = "Store";

    }
    $(".buttonButton").on("click",buttonClick);




    function timeCheck () {
        // Getting the current time
        var currentTime = moment().format()

        // Looping through each element with the class of timeText
        $(".timeText").each(function(){

            // Getting the text string from each p with class timeText
            var timeClassText = $(this).text();
            
            // Parsing that text string and creating a moment object
            var timeClassTime = moment(timeClassText,["h a"]);

            // Adding an hour to that moment
            var timeClassTimePlusOne = moment(timeClassTime).add(1, "hour").format()

            if (moment(currentTime).isBetween(timeClassTime,timeClassTimePlusOne)) {
                // if it's between, set class in the row as present
                var overallRow = this.parentElement.parentElement;
                overallRow.classList.remove("past", "present", "future");
                overallRow.classList.add("present");
            }
            else if (moment(currentTime).isBefore(timeClassTime)) {
                // if's it before, set class in the row as future
                var overallRow = this.parentElement.parentElement;
                overallRow.classList.remove("past", "present", "future");
                overallRow.classList.add("future");
            }
            else if (moment(currentTime).isAfter(timeClassTime)) {
                // if's it after, set class in the row as past
                var overallRow = this.parentElement.parentElement;
                overallRow.classList.remove("past", "present", "future");
                overallRow.classList.add("past");
            }
        });
    }
    // Running the time check function by default as the page loads
    timeCheck()


});