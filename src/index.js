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

const destinationInput = document.querySelector("#destinationInput");
const departureDateInput = document.querySelector("#departureDate");
const durationInput = document.querySelector("#durationInput");
const travelerInput = document.querySelector("#travelerInput");
const estimateCostButton = document.querySelector("#estimateCostButton");
const bookFlightButton = document.querySelector("#bookFlightButton");

estimateCostButton.addEventListener("click", createTrip, estimateCost);
bookFlightButton.addEventListener("click", createTrip, bookFlight);

let newTraveler, createdTrip;

window.onload = onStartup();

function onStartup() {
  retrieveData()
    .then(allFetchedData => {
      newTraveler = new Traveler(allFetchedData.singleTraveler, allFetchedData.allTrips.trips, allFetchedData.allDestinations.destinations);
      domUpdates.greetTraveler(newTraveler)
      domUpdates.displayAmountSpent(newTraveler)
      domUpdates.displayTravelerTrips(newTraveler)
      domUpdates.displayTravelerTrips(newTraveler)
      domUpdates.displayDestinationList(allFetchedData.allDestinations.destinations)
    //   storeTraveler(newTraveler)
    //   storeAllData(allFetchedData.allTrips.trips, allFetchedData.allDestinations.destinations)
    })
    .catch(error => console.log("error"))
    //maybe destructute data coming in
    //create instances needed in .then()'s
    //call methods here from domUpdates to display to DOM
}

// function storeTraveler(traveler) {
//   const currentTraveler = traveler
//   console.log(currentTraveler)
// }
//
// function storeAllData(allTrips, allDestinations) {
//   const trips = allTrips;
//   const destinations = allDestinations;
// }

function createTrip() {
  let newTrip = {
    id: 400,
    userID: 50,
    destinationID: 800,
    travelers: travelerInput.value,
    date: departureDateInput.value,
    duration: durationInput.value,
    status: "Pending"
  }
  createdTrip = new Trip (trip);
  console.log(createdTrip)
}

function estimateCost() {
  const cost = createdTrip.calcTripCost();
  domUpdates.displayEstimatedCost(cost);
}

function bookFlight() {

}
