import Trip from "./trip";

class Traveler {
  constructor(traveler, tripData, destinationsData) {
    this.id = traveler.id;
    this.name = traveler.name;
    this.travelerType = traveler.travelerType;
    this.tripData = this.retrieveTravelerTripData(tripData, destinationsData);
  }

  retrieveTravelerTripData(tripData, destinationsData) {
    let travelerTrips = [];
    tripData.forEach(trip => {
      if (trip.userID === this.id) {
        const newTrip = new Trip(trip, destinationsData);
        travelerTrips.push(newTrip);
      }
    })
    return travelerTrips
  }

  calcSpentThisYear() {
    //need to calculate amount spent on trips this year including 10% fee
    //need to use destination id from tripData to get destination info which includes price
  }
}

export default Traveler;
