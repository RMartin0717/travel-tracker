import chai from 'chai';
const expect = chai.expect;

import Traveler from "../src/traveler";
import travelerTestingData from "./traveler-testing-data";
import tripsTestingData from "./trips-testing-data";
import destinationsTestingData from "./destinations-testing-data";

describe("Traveler", () => {
  let traveler
  beforeEach(() => {
    traveler = new Traveler(travelerTestingData[0], tripsTestingData, destinationsTestingData);
  });
  it("Should have properties that store traveler data", () => {
    expect(traveler.id).to.equal(3);
    expect(traveler.name).to.equal("Sibby Dawidowitsch");
    expect(traveler.travelerType).to.equal("shopper");
  });
  it("Should have a parameter that takes in trip data and stores the traveler's data in a property", () => {
    expect(traveler.tripData).to.deep.equal([
      {
      "id": 3,
      "userID": 3,
      "destinationID": 22,
      "travelers": 4,
      "date": "2020/05/22",
      "duration": 17,
      "status": "pending",
      "suggestedActivities": []
      },
      {
      "id": 50,
      "userID": 3,
      "destinationID": 16,
      "travelers": 5,
      "date": "2020/07/02",
      "duration": 17,
      "status": "approved",
      "suggestedActivities": []
      },
      {
      "id": 65,
      "userID": 3,
      "destinationID": 35,
      "travelers": 4,
      "date": "2020/03/21",
      "duration": 18,
      "status": "approved",
      "suggestedActivities": []
      },
      {
      "id": 102,
      "userID": 3,
      "destinationID": 3,
      "travelers": 3,
      "date": "2020/09/26",
      "duration": 8,
      "status": "approved",
      "suggestedActivities": []
      },
    ])
  });
  it("Should have a parameter that takes in destination data and stores data for destinations the traveler has visited", () => {
    expect(traveler.destinationsData).to.deep.equal([
      {
      "id": 22,
      "destination": "Rome, Italy",
      "estimatedLodgingCostPerDay": 90,
      "estimatedFlightCostPerPerson": 650,
      "image": "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      "alt": "people standing inside a colosseum during the day"
      },
      {
      "id": 16,
      "destination": "Bangkok, Thailand",
      "estimatedLodgingCostPerDay": 35,
      "estimatedFlightCostPerPerson": 988,
      "image": "https://images.unsplash.com/photo-1563492065599-3520f775eeed?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
      "alt": "ornate buildings with a garden during the day"
      },
      {
      "id": 35,
      "destination": "Anchorage, Alaska",
      "estimatedLodgingCostPerDay": 200,
      "estimatedFlightCostPerPerson": 100,
      "image": "https://images.unsplash.com/photo-1539545547102-90ae2c140089?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      "alt": "man riding on kayak surrounded by mountains"
      },
      {
      "id": 3,
      "destination": "Sydney, Austrailia",
      "estimatedLodgingCostPerDay": 130,
      "estimatedFlightCostPerPerson": 950,
      "image": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      "alt": "opera house and city buildings on the water with boats"
      }
    ])
  });
  it.only("Should have a method to calculate the amount spent on trips this year including a travel agent's 10% fee", () => {

  });
});
