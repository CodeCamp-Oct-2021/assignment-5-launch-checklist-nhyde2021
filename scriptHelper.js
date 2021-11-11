// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    if (testInput === '') {
        return 'Empty'
    } else if (!isNaN(testInput)) {
        return 'Is a Number'
    } else if (isNaN(testInput)) {
        return 'Is not a Number'
    };
    
};

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  let pilotValidation = validateInput(pilot);
  if (pilotValidation !== 'Is not a Number') {
      alert(pilot + ' ' + pilotValidation);
  };
   let copilotValidation = validateInput(copilot);
   if (copilotValidation !== 'Is not a Number') {
       alert(copilot + ' ' + copilotValidation);
   };
   let fuelLevelValidation = validateInput(fuelLevel);
   if (fuelLevelValidation !== 'Is a Number') {
       alert(fuelLevel + ' ' + fuelLevelValidation);
   };
   let cargoMassValidation = validateInput(cargoLevel);
   if (cargoMassValidation !== 'Is a Number') {
       alert(cargoLevel + ' ' + cargoMassValidation);
   };
   
   
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
