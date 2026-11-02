input.onSwitchMoved(SwitchDirection.Left, function () {
    animations.drawFace(light.rgb(255, 255, 0));
})
input.onSwitchMoved(SwitchDirection.Right, function () {
    animations.drawSun(light.rgb(255, 166, 0));
})
input.buttonB.onEvent(ButtonEvent.Click, function () {
    temperature.disableTempWarner();
    pause(1000)
    animations.drawAltFace(light.rgb(200, 100, 10))
})
input.buttonA.onEvent(ButtonEvent.Click, function () {
    animations.drawHeart(light.rgb(255, 0, 0));
})
input.buttonA.onEvent(ButtonEvent.LongClick, function () {
    animations.drawHeart(light.rgb(255, 0, 0));
})
//timerbuttons
input.buttonA.onEvent(ButtonEvent.Click, function () {
    // is de timer
    if (timerStarted === false) {
        remainingSeconds = 900
        timerStarted = true
        timerRunning = true

        console.log("Timer gestart!")
        timer.showTimer()
    } else {
        timer.addTimer()
        timerRunning = true
    }

    light.setAll(light.rgb(100, 200, 0))

    strip.setAll(light.rgb(0, 255, 100))

})

// zet de timer handmatig gelijk uit
input.buttonA.onEvent(ButtonEvent.LongClick, function () {
    timerRunning = false
    timerStarted = false
    remainingSeconds = 0
    console.log("Timer: off")
})

input.buttonB.onEvent(ButtonEvent.Click, function () {
    for (let i = 0; i < 64; i++) {
        strip.setPixelColor(i, light.rgb(255, 0, 0))
        pause(100)
    }

})
let strip = light.createStrip(pins.A1, 64)
animations.drawFace(light.rgb(255, 255, 0));
let temp: number;

forever(function () {
    sound.soundSystem();
    temperature.getTemp();
    temperature.tempWarner(temp);
    timer.startTimerLoop()
})