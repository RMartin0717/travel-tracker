class Trip {
  constructor(tripData, destinationsData) {
    this.id = tripData.id;
    this.userID = tripData.userID;
    this.destinationID = tripData.destinationID;
    this.travlers = tripData.travelers;
    this.date = tripData.date;
    this.duration = tripData.duration;
    this.status = tripData.status;
    this.suggestedActivities = tripData.suggestedActivities;
    this.destinationsData = destinationsData;
    this.destination = this.getTripDestination();
  }

  getTripDestination() {
    const destinationName = this.destinationsData.find(destination => destination.id === this.destinationID)
    return destinationName
    //check destinations for tripData.destinationID
  }
}

export default Trip;
