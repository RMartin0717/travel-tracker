// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import main from "./css/main.scss"
import domUpdates from "./domUpdates";
import {
  retrieveData,
  // sendData
} from "./apiCalls";
//import class files

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

window.onload = fetchData();

//how do i start the process of starting the API calls?
//i think once they are started, onStartup should run


function fetchData() {
  retrieveData()
    .then(allFetchedData => console.log(allFetchedData, "data in index.js"))
    //

}
