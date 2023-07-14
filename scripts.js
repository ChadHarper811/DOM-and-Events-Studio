// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {
    
    let flightStatus = document.getElementById("flightStatus");
    let shuttleBackground = document.getElementById("shuttleBackground");
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    let rocket = document.getElementById("rocket")

    let takeOff = document.getElementById("takeoff")
    takeOff.addEventListener("click", function(event) {
        let confirm = window.confirm("Confirm that the shuttle is ready for takeoff.");
            if (confirm) {
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            spaceShuttleHeight.innerHTML = 10000;
            } else {} 
    });

    let landing = document.getElementById("landing")
    landing.addEventListener("click", function(event) {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerHTML = 0;
    });

    let missionAbort = document.getElementById("missionAbort")
    missionAbort.addEventListener("click", function (event) {
        let confirm = window.confirm("Confirm that you want to abort the mission.")
            if (confirm) {
                flightStatus.innerHTML = "Mission aborted.";
                shuttleBackground.style.backgroundColor = "green";
                spaceShuttleHeight.innerHTML = 0;
            } else {}
    });

    let xaxis = 245;
    rocket.style.top = `${xaxis}px`;
    
    let up = document.getElementById("up")
    up.addEventListener("click", function() {
        xaxis = xaxis - 10
        rocket.style.top = `${xaxis}px`
        spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) + 10000;
    });
    
    let down = document.getElementById("down")
    down.addEventListener("click", function() {
        xaxis = xaxis + 10
        rocket.style.top = `${xaxis}px`
        spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) - 10000;
    });

    let yaxis = 0;
    rocket.style.right = `${yaxis}px`;

    let right = document.getElementById("right")
    right.addEventListener("click", function() {
        yaxis = yaxis - 10
        rocket.style.right = `${yaxis}px`
    });

    let left = document.getElementById("left")
    left.addEventListener("click", function() {
        yaxis = yaxis + 10
        rocket.style.right = `${yaxis}px`
    });
});