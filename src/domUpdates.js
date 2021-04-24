// query selectors??

let domUpdates = {

  //for displaying destinations drop down, consider map or forEach

  greetTraveler(traveler) {
    console.log(traveler)
    const welcomeTraveler = document.querySelector("#welcomeTraveler");
    welcomeTraveler.innerText =
      `Welcome, ${traveler.name.split(" ")[0]}`;
  },

  displayAmountSpent(traveler) {
    console.log(traveler, "is he here?");
    const amountSpent = document.querySelector("#amountSpent");
    if (traveler.calcSpentThisYear() === 0 ) {
      amountSpent.innerText =
      `Earn frequent flier miles every time you travel with us!`
    }
    if (traveler.calcSpentThisYear() > 0 ) {
      amountSpent.innerText =
      `Congrats! You have ${traveler.calcSpentThisYear() * 10} frequent flier miles because you have spent $${traveler.calcSpentThisYear()} on trips this year!`
    }
  }

}


export default domUpdates;
