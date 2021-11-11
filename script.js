// Write your JavaScript code here!

window.addEventListener("load", function() {
    let form = document.querySelector("form");
    let pilotNameInput = document.querySelector("input[name=pilotName]");
    let copilotNameInput = document.querySelector("input[name=copilotName]");
    let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
    let cargoMassInput = document.querySelector("input[name=cargoMass]");
    let launchStatus = document.getElementById("launchStatusCheck")
    let faultyItems = document.getElementById("faultyItems");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");

    form.addEventListener("submit", function (event) {
        
        if (pilotNameInput.value === '' || copilotNameInput.value === '' || fuelLevelInput.value === '' || cargoMassInput.value === '') {
            alert('All fields must be filled.');
            event.preventDefault();
        };
        

        pilotStatus.innerHTML = `Pilot ${pilotNameInput} is ready.`;
        copilotStatus.innerHTML = `Pilot ${copilotNameInput} is ready.`;
    
        if (fuelLevelInput.value < 10000) {
            event.preventDefault();

            faultyItems.style.visibility = "visible";
            fuelStatus.innerHTML = `Not enough fuel for the journey`;
            launchStatus.style.color = "red";
            launchStatus.innerHTML = `Not ready for launch`
        }; 
        if (cargoMasslInput.value < 10000) {
            event.preventDefault();

            faultyItems.style.visibility = "visible";
            cargoStatus.innerHTML = `Not enough fuel for the journey`;
            launchStatus.style.color = "red";
            launchStatus.innerHTML = `Not ready for launch`
        }; 
        if (fuelLevelInput.value >= 10000 && cargoMassInput.value <= 10000) {
            event.preventDefault();

            launchStatus.innerHTML = 'Shuttle ready for launch';
            launchStatus.style.color = 'green';
        }
    });

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
   
});