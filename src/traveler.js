class Traveler {
  constructor(traveler, tripData, destinationsData) {
    this.id = traveler.id;
    this.name = traveler.name;
    this.travelerType = traveler.travelerType;
    this.tripData = tripData.filter(trip => trip.userID === this.id)

    //do i need this one? or is there another way to go about it?
    this.destinationsData = [];
    this.tripData.forEach(trip => {
      const destinations = destinationsData.filter(destination => destination.id === trip.destinationID)
      this.destinationsData.push(destinations[0])
    });
  }

  calcSpentThisYear() {
    //need to calculate amount spent on trips this year including 10% fee
    //need to use destination id from tripData to get destination info which includes price
  }
}

export default Traveler;
