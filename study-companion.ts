let temp: number;
let disableTempWarn: boolean;

input.buttonA.onEvent(ButtonEvent.Click, function() {
    disableTempWarner();
})

input.buttonB.onEvent(ButtonEvent.Click, function () {
    music.playMelody("B C C5 B A - - - ", 330)
    pause(1000)
})
function getTemp() {
    temp = input.temperature(TemperatureUnit.Celsius)
    console.log(`Temperature: ${temp}`)
    return (temp);
}

function tempWarner(t: number) {
    if (disableTempWarn === false) {
        if (t > 24) {
            // tempWarnAnimation()

            light.showRing("red red red red red red red red red red")
            console.log(`Your room is too hot for comfortable studying!`)
            light.showRing("black")
            
        }


    }
}
function disableTempWarner() {
    disableTempWarn = true;
}
forever(function () {
    getTemp();

})
