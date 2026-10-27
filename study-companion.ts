let temp: number;
let disableTempWarn: boolean = false;

input.buttonA.onEvent(ButtonEvent.Click, function () {

})

input.buttonB.onEvent(ButtonEvent.Click, function () {
    music.playMelody("B C C5 B A - - - ", 330)
    disableTempWarner();
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
            light.setAll(light.rgb(255, 0, 0))
            console.log(`Your room is too hot for comfortable studying!`);

            music.playMelody("B C C5 B C B G G ", 300);
            pause(10000);
            light.setAll(light.rgb(0, 255, 0))
        }


    }
}
function disableTempWarner() {
    if (disableTempWarn === true) {
        disableTempWarn = false
    } else {
        disableTempWarn = true;
        light.setAll(light.rgb(0, 0, 255))
    }
}
forever(function () {
    getTemp();
    tempWarner(temp);
})