// DOM VARIABLES

// JAVASCRIPT VARIABLES

// FUNCTION DEFINITIONS

// FUNCTION CALLS

// EVENT LISTENERS

// creating a div but assigning class row and class time-block
// three col within each row
// - one for time, one for textarea, one for save button
// time col going to have class hour (ln 39)
// add time as text to time col

// how is that container built? 

// is this needed when the js is written in its own file?

$(document).ready(function () {

$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

var arrayOfHours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

for(var i = 0; i < arrayOfHours.length; i++){

    var row = $("<div>");
    row.addClass("row time-block")
    $(".container").append(row);

    var timeCol = $("<p>");
    timeCol.addClass("col-1 hour");
    timeCol.text(arrayOfHours[i]);
    row.append(timeCol);

    var textField = $("<textarea>");
    textField.addClass("description col-10");
    row.append(textField);

    var buttonCol = $("<button>");
    buttonCol.addClass("saveBtn btn col-1 fas fa-save");
    row.append(buttonCol);

    if (arrayOfHours[i] === moment().hours()){
        textField.addClass("present");
    } else if (arrayOfHours[i] > moment().hours()){
        textField.addClass("future");
    } else {
        textField.addClass("past");
    }
    
}

function saveClick(e) {
    var textEvent = $(this.previousElementSibling).val();
}

$(document).on("click", ".saveBtn", saveClick);

});





