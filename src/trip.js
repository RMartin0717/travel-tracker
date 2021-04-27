class Trip {
  constructor(tripData, destinationsData) {
    this.id = tripData.id;
    this.userID = tripData.userID;
    this.destinationID = tripData.destinationID;
    this.travelers = tripData.travelers;
    this.date = tripData.date;
    this.duration = tripData.duration;
    this.status = tripData.status;
    this.suggestedActivities = tripData.suggestedActivities;
    this.destination = this.getTripDestination(destinationsData);
  }

  getTripDestination(destinationsData) {
    const travelerDestination = destinationsData.find(destination => destination.id === this.destinationID);
    return travelerDestination
  }

  calcTripCost() {
    const flightCost = this.destination.estimatedFlightCostPerPerson * this.travelers;
    const lodgingCost = this.destination.estimatedLodgingCostPerDay * this.travelers * this.duration;
    const tripCostPreFee = flightCost + lodgingCost;
    const rawTripCost = tripCostPreFee * 1.1;
    const roundTripCostToHundredths = () => {
      return Math.round(100 * rawTripCost) / 100;
    }
    const tripCost = roundTripCostToHundredths();
    return tripCost
  }
}

export default Trip;
