// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import domUpdates from "./domUpdates";
import main from "./css/main.scss";
import Traveler from "./traveler";
import Trip from "./trip";

import {
  retrieveData,
  // sendData
} from "./apiCalls";

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

let newTraveler;

window.onload = onStartup();

function onStartup() {
  retrieveData()
    .then(allFetchedData => {
      newTraveler = new Traveler(allFetchedData.singleTraveler, allFetchedData.allTrips.trips, allFetchedData.allDestinations.destinations);
      domUpdates.greetTraveler(newTraveler)
      domUpdates.displayAmountSpent(newTraveler)
    })
    .catch(error => console.log("error"))
    //maybe destructute data coming in
    //create instances needed in .then()'s
    //call methods here from domUpdates to display to DOM
}
