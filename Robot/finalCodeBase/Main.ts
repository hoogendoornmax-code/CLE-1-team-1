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

let strip = light.createStrip(pins.A1, 64)
animations.drawFace(light.rgb(255, 255, 0));
let temp: number;

forever(function () {
    sound.soundSystem();
    temperature.getTemp();
    temperature.tempWarner(temp);
    timer.startTimerLoop()
})