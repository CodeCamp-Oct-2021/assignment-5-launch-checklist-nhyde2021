// const scriptHelper = require('./scriptHelper');

const { pickPlanet } = require("./scriptHelper");

// const { pickPlanet } = require("./scriptHelper");

// const { formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {

    let form = document.querySelector("form");
    let faultyItems = document.getElementById("faultyItems");
    faultyItems.style.visibility = "hidden";

    form.addEventListener("submit", function (event) {
    event.preventDefault();

    let pilotNameInput = document.querySelector("input[name=pilotName]");
    let copilotNameInput = document.querySelector("input[name=copilotName]");
    let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
    let cargoMassInput = document.querySelector("input[name=cargoMass]");

    formSubmission(
        document,
        faultyItems,
        pilotNameInput.value,
        copilotNameInput.value,
        fuelLevelInput.value,
        cargoMassInput.value
    );

   });



   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })

   let randomPlanet = pickPlanet(listedPlanets);
   
});