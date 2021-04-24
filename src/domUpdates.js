// query selectors??

let domUpdates = {

  //for displaying destinations drop down, consider map or forEach

  greetTraveler(traveler) {
    const welcomeTraveler = document.querySelector("#welcomeTraveler");
    welcomeTraveler.innerText =
      `Welcome, ${traveler.name.split(" ")[0]}`;
  },

  displayAmountSpent(traveler) {
    const amountSpent = document.querySelector("#amountSpent");
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
    const tripCards = document.querySelector("#tripCards");
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
    const destinationSelect = document.querySelector("#destinationSelect");
    destinationSelect.innerHTML = "";
    console.log(destinations)
    destinations.forEach(destination => {
      destinationSelect.insertAdjacentHTML("beforeend",   `
          <option value="${destination.id}">${destination.destination}</option>
        `)
    });
  },
}


export default domUpdates;
