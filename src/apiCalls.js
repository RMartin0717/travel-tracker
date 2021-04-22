import domUpdates from "./domUpdates";

// const allTravelersURL = "http://localhost:3001/api/v1/travelers";

export const retrieveData = () => {

  const singleTravelerURL = "http://localhost:3001/api/v1/travelers/50";
  const allTripsURL ="http://localhost:3001/api/v1/trips";
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
      console.log(allData, "data in promise all")
      return allData
    })
    .catch(err => console.log("error"))
}

// see project spec for URL for deleting single trip

// const retrieveAllTravelersData = fetch(allTravelersURL)
//   .then(response => response.json())
//   .then(data => data)
//   .then(data => domUpdates.allTripsData = data)
