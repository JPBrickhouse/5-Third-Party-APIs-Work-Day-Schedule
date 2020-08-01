# 5-Third-Party-APIs-Work-Day-Schedule

## Homework 5 Introduction
We were tasked with creating a simple calendar application that allows the user to save events for each hour of the day. The events would be saved to localStorage and would persist even if the page was refreshed or exited. As well, based on the time of the day, the calendar would dynamically update styles and formatting.

## Overall Notes

Starter code was provided for the index.html and style.css files. No code was provided for the script.js file.

### index.html
Several divs have been introduced to organize and group content:
- All of these utilize Bootstrap to enable responsive design functionality.
- Each row corresponds to a block of time (9am, 10am, etc.), has a column diplaying the time, a column displaying a textarea with user-input calendar events, and a column with a save button.
- All of the textareas have ids (09text, 10text, etc).
- All of the save buttons have ids (09, 10, etc).
- These ids are utilized by the javascript file to present and update content

### style.css
The majority of the style.css code was provided to us, and only nominal edits were made to refine the visual styles and formatting.

### script.js
The bulk of the content for this application can be found in the script.js file. This is written in primarily "vanilla" javascript, but also syntax sourced from the jQuery CDN Library and the Moment.js CDN Library. Numerous functions, event listeners, buttons, etc. have all been generated in order to ensure the functionality of the daily calendar. These items include, but are not limited to, the following:
- update() - This function utilizes the Moment.js CDN library to display the current date and time. In tandem with a setInterval function, this dynamically updates every second.
- submitRecall () - This function stores the calender events in localStorage, overwriting and updating any existing calendar events that it encounters.
- buttonClick () - This function runs when any button is clicked, and it calls the submitRecall function.
- timeCheck() - This function utilizes the Moment.js CDN library to check for the current time. Depending on the time, the styles of the time-block rows in the html change, corresponding to "past" events, "present" events, or "future" events. This function is called immediately when the page loads.
- eventsDisplay() - This function recalls the calendar events from localStorage and displays them on the page. This function is called immediately when the page loads.

## Final Thoughts
- This project was an excellect exercise, expanding up Homework 4's use of localStorage.
- Multiple functions are running simultaneously, and the use of javascript CDNs (jQuery, Moment.js) was new.
- Dynamically updating styles based on time of day was a unique implementation
- Further notes have been commented upon with the code itself.
