// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import domUpdates from "./domUpdates";
import main from "./css/main.scss";
import Traveler from "./traveler";
import Trip from "./trip";

import {
  retrieveData,
  sendData
} from "./apiCalls";

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

const destinationInput = document.querySelector("#destinationInput");
const departureDateInput = document.querySelector("#departureDateInput");
const durationInput = document.querySelector("#durationInput");
const travelerInput = document.querySelector("#travelerInput");
const estimateCostButton = document.querySelector("#estimateCostButton");
const bookFlightButton = document.querySelector("#bookFlightButton");
const missingInputNotice = document.querySelector("#missingInput");

estimateCostButton.addEventListener("click", estimateCost);
bookFlightButton.addEventListener("click", bookFlight);

let newTraveler, createdTrip;

window.onload = onStartup();

function onStartup() {
  retrieveData()
    .then(allFetchedData => {
      newTraveler = new Traveler(allFetchedData.singleTraveler, allFetchedData.allTrips.trips, allFetchedData.allDestinations.destinations)
      domUpdates.destinationsDataDOM = allFetchedData.allDestinations.destinations
      domUpdates.allTripsDataDOM = allFetchedData.allTrips.trips
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
  event.preventDefault();
  if (!destinationInput.value || !departureDateInput.value || !durationInput.value || !travelerInput.value) {
    missingInputNotice.classList.remove("hidden");
    return
  } else {
    missingInputNotice.classList.add("hidden");
    let newTrip = {
      id: domUpdates.allTripsDataDOM.length++,
      userID: 50,
      destinationID: parseInt(destinationInput.value),
      travelers: travelerInput.value,
      date: departureDateInput.value.split("-").join("/"),
      duration: durationInput.value,
      status: "Pending"
    }
    const currentDestination = domUpdates.getTripDestination(newTrip.destinationID);
    createdTrip = new Trip(newTrip, [currentDestination]);
    return createdTrip
  }
}

function estimateCost() {
  event.preventDefault();
  createTrip();
  const cost = createdTrip.calcTripCost();
  domUpdates.displayEstimatedCost(cost);
}

function bookFlight() {
  event.preventDefault();
  createdTrip = createTrip();
  let {id, userID, destinationID, travelers, date, duration, status} = createdTrip
  let newData = {id: id, userID: userID, destinationID: destinationID, travelers: travelers, date: date, duration: duration, status: status, suggestedActivities: []}
  sendData(newData);
}
