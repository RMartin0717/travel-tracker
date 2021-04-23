import chai from 'chai';
const expect = chai.expect;

import Trip from "../src/trip";
import tripsTestingData from "./trips-testing-data";
import destinationsTestingData from "./destinations-testing-data";

describe("Trip", () => {
  let trip
  beforeEach(() => {
    trip = new Trip(tripsTestingData[0], destinationsTestingData);
  });
  it("Should have properties that store trip data", () => {
    expect(trip.id).to.equal(1);
    expect(trip.userID).to.equal(44);
    expect(trip.destinationID).to.equal(49);
    expect(trip.travelers).to.equal(2);
    expect(trip.date).to.equal("2019/09/16");
    expect(trip.duration).to.equal(8);
    expect(trip.status).to.equal("approved");
    expect(trip.suggestedActivities).to.deep.equal([]);
  });
  it("Should find the destination data for an instance of a trip", () => {
    expect(trip.destination).to.deep.equal({
      "id": 49,
      "destination": "Castries, St Lucia",
      "estimatedLodgingCostPerDay": 650,
      "estimatedFlightCostPerPerson": 90,
      "image": "https://images.unsplash.com/photo-1524478075552-c2763ea171b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80",
      "alt": "aerial photography of rocky mountain under cloudy sky"
      });
  });
  it("Should calculate the cost of the trip including flight cost and logdging cost for total travelers with 10% agent fee", () => {
    expect(trip.calcTripCost()).to.equal(11638);
  })
});
