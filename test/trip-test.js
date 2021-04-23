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
    expect(trip.travlers).to.equal(1);
    expect(trip.date).to.equal("2019/09/16");
    expect(trip.duration).to.equal(8);
    expect(trip.status).to.equal("approved");
    expect(trip.suggestedActivities).to.deep.equal([]);
  });
});
