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
    const sortedTravelerTrips = travelerTrips.sort((a,b) => b.date.split("/").join("") - a.date.split("/").join(""))
    return sortedTravelerTrips
  }

  calcSpentThisYear() {
    const yearsTrips = this.tripsThisYear();
    const spentThisYear = yearsTrips.reduce((total, trip) => {
      return total + trip.calcTripCost()
    }, 0)
    return spentThisYear

  }
  tripsThisYear() {
    const currentDate = new Date();
    const parsedCurrentDate = this.parseDate(currentDate);

    const tripsThisYear = this.tripData.filter(trip => {
      const parsedDate = trip.date.split("/").join("");
      return parsedDate >= parsedCurrentDate - 10000
    })
    return tripsThisYear
  }

  parseDate(date) {
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    const parsedDate = `${yyyy}${mm}${dd}`
    return parsedDate
  }
}

export default Traveler;
