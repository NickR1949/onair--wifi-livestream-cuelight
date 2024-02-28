/* sendData - part of oair cue light
 * version 1.0.0 23/02/2024
 * by © Nick Rutt
 */
 
function sendData(data) {
 
    const XHR = new XMLHttpRequest();

 
    // Define what happens on successful data submission
    XHR.addEventListener('load', function (event) {
       /* alert('Yeah! Data sent and response loaded.');*/
    });

    // Define what happens in case of error
    XHR.addEventListener('error', function (event) {
        alert('Oops! Something went wrong.');
    });

    // Set up request
    XHR.open('GET', '/lights/'+ data,true);

    // Add the required HTTP header for form data GET requests
    XHR.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    // Finally, send our data.
    XHR.send();
    
}
