// GLOBAL VARIABLES
let temp: number;
let disableTempWarn: boolean = false;

//MAIN LOOP
forever(function () {
    getTemp();
    tempWarner(temp);
})

//BUTTON INPUTS
input.buttonA.onEvent(ButtonEvent.Click, function () {

})

input.buttonB.onEvent(ButtonEvent.Click, function () {
    disableTempWarner();
    pause(1000)
})

// FUNCTIONS
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
        music.playMelody("A B C5 C B - - - ", 330)

    } else {
        disableTempWarn = true;
        music.playMelody("B C C5 B A - - - ", 330)
        light.setAll(light.rgb(0, 0, 255))
    }
}

//Animation & Light Functions

// Makes Lights Flash Red
function aniFlashRed() {
    for (let i = 0; i < 3; i++) {

        light.setAll(light.rgb(255, 0, 0))
        pause(100);
        light.setAll(light.rgb(0, 0, 0))
        pause(100);
    }
    //Reset to base status light
    light.setAll(light.rgb(255, 0, 255))
}