let temp: number;
let disableTempWarn:boolean = false;

input.buttonA.onEvent(ButtonEvent.Click, function() {
    
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
            light.showRing("red red red red red red red red red red");
            console.log(`Your room is too hot for comfortable studying!`);
            light.showRing("black");
            music.playMelody("B C C5 B C B G G ", 300);
            pause(2000);
        }


    }
}
function disableTempWarner() {
    if (disableTempWarn === true)
    {
        disableTempWarn = false
   } else {
        disableTempWarn = true;
   }
}
forever(function () {
    getTemp();
    tempWarner();
})
