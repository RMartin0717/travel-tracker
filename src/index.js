import domUpdates from "./domUpdates";
import main from "./css/main.scss";
import Traveler from "./traveler";
import Trip from "./trip";

import {
  retrieveData,
  sendData
} from "./apiCalls";

const destinationInput = document.querySelector("#destinationInput");
const departureDateInput = document.querySelector("#departureDateInput");
const durationInput = document.querySelector("#durationInput");
const travelerInput = document.querySelector("#travelerInput");
const estimateCostButton = document.querySelector("#estimateCostButton");
const bookFlightButton = document.querySelector("#bookFlightButton");
const missingInputNotice = document.querySelector("#missingInput");
const usernameInput = document.querySelector("#usernameInput");
const passwordInput = document.querySelector("#passwordInput");
const loginError = document.querySelector("#loginError");
const loginButton = document.querySelector("#loginButton");
const loginForm = document.querySelector("#loginForm");

loginButton.addEventListener("click", userLogin);
estimateCostButton.addEventListener("click", estimateCost);
bookFlightButton.addEventListener("click", bookFlight);

let newTraveler, createdTrip;

// window.onload = onStartup();

function onStartup(travelerID) {
  retrieveData(travelerID)
    .then(allFetchedData => {
      newTraveler = new Traveler(allFetchedData.singleTraveler, allFetchedData.allTrips.trips, allFetchedData.allDestinations.destinations)
      domUpdates.destinationsDataDOM = allFetchedData.allDestinations.destinations
      domUpdates.allTripsDataDOM = allFetchedData.allTrips.trips
      domUpdates.greetTraveler(newTraveler)
      domUpdates.displayAmountSpent(newTraveler)
      domUpdates.displayTravelerTrips(newTraveler)
      domUpdates.displayTravelerTrips(newTraveler)
      domUpdates.displayDestinationList(allFetchedData.allDestinations.destinations)
    })
    .catch(error => console.log("error"))
}

function createTrip() {
  event.preventDefault();
  if (!destinationInput.value || !departureDateInput.value || !durationInput.value || !travelerInput.value) {
    missingInputNotice.classList.remove("hidden");
    return
  } else {
    missingInputNotice.classList.add("hidden");
    let newTrip = {
      id: domUpdates.allTripsDataDOM.length++,
      userID: newTraveler.id,
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

function userLogin() {
  event.preventDefault();
  if (usernameInput.value.includes("traveler") && usernameInput.value.length === 10 && passwordInput.value === "travel2020") {
    const splitUsername = usernameInput.value.split("traveler");
    const getUserID = parseInt(splitUsername[1]);
    onStartup(getUserID);
    loginForm.classList.add("hidden");
  } else {
    loginError.classList.remove("hidden");
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
