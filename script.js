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
    }
    $(".buttonButton").on("click",buttonClick);




    function timeCheck () {
        // Getting the current time
        var currentTime = moment().format()
        console.log(currentTime);

        // Looping through each element with the class of timeText
        $(".timeText").each(function(){

            // Getting the text string from each p with class timeText
            var timeClassText = $(this).text();
            console.log(timeClassText);
            
            // Parsing that text string and creating a moment object
            var timeClassTime = moment(timeClassText,["h a"]);
            console.log(timeClassTime.format());

            // Adding an hour to that moment
            var timeClassTimePlusOne = moment(timeClassTime).add(1, "hour").format()
            console.log(timeClassTimePlusOne);

            // Checking if the current time falls BETWEEN two time ranges
            if (moment(currentTime).isBetween(timeClassTime,timeClassTimePlusOne)) {
                console.log("between");
                // if it's between, set class in the row as present
            }
            else if (moment(currentTime).isBefore(timeClassTime)) {
                console.log("before")
                // if's it before, set class in the row as future
            }
            else if (moment(currentTime).isAfter(timeClassTime)) {
                console.log("after")
                // if's it after, set class in the row as past
            }

        });
        

    }
    timeCheck()


});