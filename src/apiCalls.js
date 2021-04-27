import domUpdates from "./domUpdates";

// const allTravelersURL = "http://localhost:3001/api/v1/travelers";

export const retrieveData = (travelerID) => {

  const singleTravelerURL = `http://localhost:3001/api/v1/travelers/${travelerID}`;
  const allTripsURL = "http://localhost:3001/api/v1/trips";
  const allDestinationsURL = "http://localhost:3001/api/v1/destinations";
  const modifySingleTripURL = "http://localhost:3001/api/v1/updateTrip";


  let retrieveSingleTraveler = fetch(singleTravelerURL)
    .then(response => response.json())
    .then(singleTravelerData => {
      return singleTravelerData
    })

  let retrieveAllTrips = fetch(allTripsURL)
    .then(response => response.json())
    .then(allTripsData => {
      return allTripsData
    })

  let retrieveAllDestinations = fetch(allDestinationsURL)
    .then(response => response.json())
    .then(allDestinationsData => {
      return allDestinationsData
    })

 return Promise.all([retrieveSingleTraveler, retrieveAllTrips, retrieveAllDestinations])
    .then(data => {
      let allData = {};
      allData.singleTraveler = data[0];
      allData.allTrips = data[1];
      allData.allDestinations = data[2];
      return allData
    })
    .catch(err => console.log("error"))
}

export const sendData = (newData) => {
  const allTripsURL = "http://localhost:3001/api/v1/trips"

  fetch(allTripsURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newData),
  })
    .catch(error => console.log("error"))
}
