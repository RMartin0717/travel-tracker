const welcomeTraveler = document.querySelector("#welcomeTraveler");
const amountSpent = document.querySelector("#amountSpent");

const destinationInput = document.querySelector("#destinationInput");
const departureDateInput = document.querySelector("#departureDate");
const durationInput = document.querySelector("#durationInput");
const travelerInput = document.querySelector("#travelerInput");
const estimateCostButton = document.querySelector("#estimateCostButton");
const bookFlightButton = document.querySelector("#bookFlightButton");

const tripCards = document.querySelector("#tripCards");

let domUpdates = {


  greetTraveler(traveler) {
    welcomeTraveler.innerText =
      `Welcome, ${traveler.name.split(" ")[0]}`;
  },

  displayAmountSpent(traveler) {
    if (traveler.calcSpentThisYear() === 0 ) {
      amountSpent.innerText =
      `Earn frequent flier miles every time you travel with us!`
    }
    if (traveler.calcSpentThisYear() > 0 ) {
      amountSpent.innerText =
      `Congrats! You have ${traveler.calcSpentThisYear() * 10} frequent flier miles because you have spent $${traveler.calcSpentThisYear()} on trips this year!`
    }
  },

  displayTravelerTrips(traveler) {
    tripCards.innerHTML = "";
    traveler.tripData.forEach(trip => {
      tripCards.insertAdjacentHTML("beforeend",   `
        <article>
          <h3>What a Good Trip</h3>
          <p>Destination: ${trip.destination.destination}</p>
          <img src=${trip.destination.image} alt=${trip.destination.alt} />
          <p>Date: ${trip.date}</p>
          <p>Duration: ${trip.duration}</p>
          <p>Status: ${trip.status}</p>
        </article>
        `)
    });
  },
  displayDestinationList(destinations) {
    destinationInput.innerHTML = `<option value="please-select">--Please Select a Destination--</option>`;
    destinations.forEach(destination => {
      destinationInput.insertAdjacentHTML("beforeend",   `
          <option value="${destination.id}">${destination.destination}</option>
        `)
    });
  },

  displayEstimatedCost(cost) {
    estimateCost.innerText = `Estimated Cost: $${cost}`;
  },


}


export default domUpdates;
