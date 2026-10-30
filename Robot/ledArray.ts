// 10 13 17 18 19 20 21 22 25 26 27 28 29 30 33 34 35 36 37 38 42 43 44 45 51 52

const strip = light.createStrip(pins.A1, 64);
light.setAll(light.rgb(100, 20, 40))

input.buttonA.onEvent(ButtonEvent.Click, function () {
    light.setAll(light.rgb(100, 200, 0))

    strip.setAll(light.rgb(0, 255, 100))

})

input.buttonB.onEvent(ButtonEvent.Click, function () {
    for (let i = 0; i < 64; i++) {
        strip.setPixelColor(i, light.rgb(255, 0, 0))
        pause(100)
    }

})