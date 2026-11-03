input.buttonA.onEvent(ButtonEvent.Click, function () {
    // is de timer
    if (timer.timerStarted === false) {
        timer.timerStarted = true
        timer.timerRunning = true
        timer.remainingSeconds = 900

        console.log("Timer gestart!")
        timer.showTimer()
    } else {
        timer.addTimer()
        timer.timerRunning = true
    }

    light.setAll(light.rgb(100, 200, 0))

    strip.setAll(light.rgb(0, 255, 100))

})

// zet de timer handmatig gelijk uit
input.buttonA.onEvent(ButtonEvent.LongClick, function () {
    timer.timerRunning = false
    timer.timerStarted = false
    timer.remainingSeconds = 0
    console.log("Timer: off")
})

input.buttonB.onEvent(ButtonEvent.Click, function () {
    for (let i = 0; i < 64; i++) {
        strip.setPixelColor(i, light.rgb(255, 0, 0))
        pause(100)
    }

})