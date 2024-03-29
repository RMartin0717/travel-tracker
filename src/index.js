import domUpdates from "./domUpdates";
import main from "./css/main.scss";
import Traveler from "./traveler";
import Trip from "./trip";

import {
  deleteData,
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
const tripCards = document.querySelector("#tripCards");

loginButton.addEventListener("click", userLogin);
estimateCostButton.addEventListener("click", estimateCost);
bookFlightButton.addEventListener("click", bookFlight);
tripCards.addEventListener("click", function(event) {
  cancelFlight(event)
})

let newTraveler, createdTrip;

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
    .then(response => errorMessage(response.status))
    .catch(error => {
      domUpdates.errorMessage(error)
    })
}

function createTrip() {
  event.preventDefault();
  if (destinationInput.value === "please-select" || !departureDateInput.value || !durationInput.value || !travelerInput.value) {
    missingInputNotice.classList.remove("hidden");
    return
  } else {
    missingInputNotice.classList.add("hidden");
    let newTrip = {
      id: Date.now(),
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
  const splitUsername = usernameInput.value.split("traveler");
  const getUserID = parseInt(splitUsername[1]);
  if (getUserID > 0 && getUserID <= 50 && passwordInput.value === "travel2020") {
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
  onStartup(newTraveler.id);
}

function cancelFlight(event) {
  deleteData(event.target.closest("article").id);
  onStartup(newTraveler.id)
}
