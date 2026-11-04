
input.onSwitchMoved(SwitchDirection.Left, function () {
    animations.drawFace(light.rgb(255, 255, 0))
})

input.onSwitchMoved(SwitchDirection.Right, function () {
    animations.drawHeart(light.rgb(255, 0, 0))
})

input.buttonB.onEvent(ButtonEvent.Click, function () {
    temperature.disableTempWarner()
    animations.drawAltFace(light.rgb(200, 100, 10))
})

// Knop A kort indrukken: starten of 15 minuten toevoegen.
input.buttonA.onEvent(ButtonEvent.Click, function () {
    timer.buttonClick()
})

// Knop A lang indrukken: stoppen en resetten.
input.buttonA.onEvent(ButtonEvent.LongClick, function () {
    timer.buttonLongClick()
})

let temp: number

animations.drawFace(light.rgb(255, 255, 0))

forever(function () {
    sound.soundSystem();
    temperature.getTemp();
    temperature.tempWarner(temp);



    timer.startTimerLoop()
})
