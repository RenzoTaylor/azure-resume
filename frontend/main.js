window.addEventListener('DOMContentLoaded', (Event) =>{ // Sets up an event listener that waits for the entire HTML document to be loaded and ready
    getVisitCount(); // Calls the getVisitCount function when the document is fully loaded
})

const functionApi = 'http://localhost:7071/api/get-resume-counter'; // Defines a constant named functionApi and assigns it an empty string. Replace this empty string with a valid URL

const getVisitCount = () => { // Defines a function named getVisitCount
    let count = 30; // Initializes a variable count with the value 30
    fetch(functionApi) // Makes a network request to the URL specified by functionApi
        .then(response => response.json()) // Converts the response from the API (which is typically in JSON format) to a JavaScript object
        .then(response => { // Handles the converted response object
            console.log("Website called function API."); // Logs a message to the console indicating that the API was called
            count = response.count; // Updates the count variable with a value from the API response
            document.getElementById("counter").innerText = count; // Updates the text content of an HTML element with the ID counter to display the new count value
        })
        .catch(error => {
            console.log(error); // Catches any errors that occur during the fetch request and logs them to the console
        });
        return count; // Returns the count value from the getVisitCount function. Note: this returned value is not used in the provided code
};