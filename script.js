// ALL the code will go within this document.ready function
// jQuery will detect this state of readiness so that code included inside
// this function will only run once the DOM is ready for JavaScript code to execute.
$(document).ready(function () {

    // Display the time immediately on the Jumobtron header when the page runs
    $("#currentDay").html(moment().format('dddd, MMMM Do, YYYY, h:mm:ss a'));

    // This dynamically updates and displays the current time every second
    var update = function () {
        $("#currentDay").html(moment().format('dddd, MMMM Do, YYYY, h:mm:ss a'));
    }
    setInterval(update, 1000);



    function submitRecall(textID) {
        // Initializes an empty array
        var calendarListCurrent = [];

        // Run an if else statement, which checks to see if values exist in localStorage
        // if calendarListStorage is null, then use the empty array initilized earlier
        if (localStorage.getItem("calendarListStorage") === null) {
            calendarListCurrent;
        }
        // else, calendarListStorage has values
        // Therefore, use getItem to get the calendarListStorage array from localStorage
        // and make that the calendarListCurrent array
        else {
            calendarListCurrent = JSON.parse(localStorage.getItem("calendarListStorage"));
        }

        // Checking to see if a particular textID already exists in the calendarListCurrent
        let timeTestCheck = calendarListCurrent.find(calendarListCurrent => calendarListCurrent.time === textID);

        // if timeTestCheck is true, meaning that a particular textID already exists,
        // replace the value associated with that textID in the array of objects
        if (timeTestCheck) {

            // Using the map function to search and return the index position
            // of an object whose property matches a search
            // https://stackoverflow.com/questions/10557486/in-an-array-of-objects-fastest-way-to-find-the-index-of-an-object-whose-attribu
            // Searching for the index position of the object that corresponds to the value of textID
            var elementPos = calendarListCurrent.map((calendarListCurrent) => calendarListCurrent.time.indexOf(textID));

            // Creating an object based on the contents
            var eventReplace = {
                time: textID,
                events: document.getElementById(textID).value.trim()
            };

            // Splicing the object into the array
            // .splice requires three arguments
            // elementPos refers to the index position of the object in the array
            // 1 refers to the number of elements to be deleted
            // (1 because we're only deleting that particular element)
            // eventReplace is the element that is being inserted at that index
            // https://www.javascripttutorial.net/javascript-array-splice/
            calendarListCurrent.splice(elementPos, 1, eventReplace);
        }

        // if timeTestCheck is false, meaning that a particular textID doesn't yet exist,
        // create a new object associated with that textID and push it
        // into the array of objects
        else {

            // Creating an object based on the contents
            var eventNew = {
                time: textID,
                events: document.getElementById(textID).value.trim()
            };
            // Pushing this object into the array
            calendarListCurrent.push(eventNew);
        }

        // Set calendarListCurrent as the new version of calendarListStorage in localStorage
        localStorage.setItem("calendarListStorage", JSON.stringify(calendarListCurrent));
    };



    function buttonClick() {
        // Console logging the id of the button that is clicked
        console.log(this.id);

        // Appending "text" to the end of the id of the button that is clicked
        // And calling it a variable textID
        var textID = this.id + "text";

        // Calling the submitReacll function and passing it textID
        submitRecall(textID);
    }
    // event listener assigned to every button with the class buttonButton
    // that runs the function buttonClick when the buttno is clicked
    $(".buttonButton").on("click", buttonClick);



    function timeCheck() {
        // Getting the current time
        var currentTime = moment().format()

        // Looping through each element with the class of timeText
        $(".timeText").each(function () {

            // Getting the text string from each p with class timeText
            var timeClassText = $(this).text();

            // Parsing that text string and creating a moment object
            var timeClassTime = moment(timeClassText, ["h a"]);

            // Adding an hour to that moment
            var timeClassTimePlusOne = moment(timeClassTime).add(1, "hour").format()

            if (moment(currentTime).isBetween(timeClassTime, timeClassTimePlusOne)) {
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



    function eventsDisplay() {
        // Looping through each textarea element
        $("textarea").each(function () {

            // Getting the id of the textarea
            var textID = this.id;

            // Initializes an empty array
            var calendarListCurrent = [];

            // Run an if else statement, which checks to see if values exist in localStorage
            // if calendarListStorage is null, then use the empty array initilized earlier
            if (localStorage.getItem("calendarListStorage") === null) {
                calendarListCurrent;
            }
            // else, calendarListStorage has values
            // Therefore, use getItem to get the calendarListStorage array from localStorage
            // and make that the calendarListCurrent array
            else {
                calendarListCurrent = JSON.parse(localStorage.getItem("calendarListStorage"));
            }

            // Checking to see if a particular textID already exists in the calendarListCurrent
            let timeTestCheck = calendarListCurrent.find(calendarListCurrent => calendarListCurrent.time === textID);

            // if timeTestCheck is true, meaning that a particular textID already exists...
            if (timeTestCheck) {
                // Using the map function to search and return the index position
                // of an object whose property matches a search
                // https://stackoverflow.com/questions/10557486/in-an-array-of-objects-fastest-way-to-find-the-index-of-an-object-whose-attribu
                // Searching for the index position of the object that corresponds to the value of textID
                var elementPos = calendarListCurrent.map((calendarListCurrent) => calendarListCurrent.time.indexOf(textID));
                
                // Getting the property value at that index
                // (aka, getting the stored calendar events)
                var display = calendarListCurrent[elementPos].events
                
                // Display that property value in the textarea
                // (aka, displaying the stored calendar events)
                document.getElementById(textID).value = display;
            }
            // if timeTestCheck is false, meaning that a particular textID doesn't yet exist,
            // don't do anything, since there isn't any text to return
            else {
                return;
            }
        })
    };
    // Automatically display any events upon loading the page
    eventsDisplay()

});