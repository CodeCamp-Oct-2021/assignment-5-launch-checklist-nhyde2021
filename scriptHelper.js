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

    let launchStatus = document.getElementById("launchStatus")
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");

    if (pilot === '' || copilot === '' || fuelLevel === '' || cargoLevel === '') {
        alert('All fields must be filled.');
    };
    if (validateInput(pilot) !== 'Is not a Number' || validateInput(copilot) !== 'Is not a Number') {
        alert('Name Cannot be a number');
    };
    if (validateInput(fuelLevel) !== 'Is a Number' || validateInput(cargoLevel) !== 'Is a Number') {
        alert('Fuel/Cargo Level Must be a number');
    };

    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch.`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch.`;

    if (fuelLevel < 10000) {

        list.style.visibility = 'visible';
        fuelStatus.innerHTML = `Not enough fuel for the journey`;
        launchStatus.style.color = "red";
        launchStatus.innerHTML = `Not ready for launch`
    }; 
    if (cargoLevel > 10000) {

        list.style.visibility = "visible";
        cargoStatus.innerHTML = `Too much mass for the shuttle to take off`;
        launchStatus.style.color = "red";
        launchStatus.innerHTML = `Not ready for launch`
    }; 
    if (fuelLevel >= 10000 && cargoLevel <= 10000) {

        list.style.visibility = 'hidden';
        launchStatus.innerHTML = 'Shuttle ready for launch';
        launchStatus.style.color = 'green';
    };
    
};

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
