light.setAll(255)
let shiny = 0;
let value = 0
forever(function () {
    value = pins.A2.analogRead()
    shiny = Math.map(value, 0, 1023, 0, 255)
    light.setBrightness(shiny)
    console.logValue("value", value)
})

light.setAll(255)
let shiny = 0
let value = 0
let adjustingVolume = false

forever(function () {
    if (pins.A3.digitalRead()) {
        adjustingVolume = false
        light.setAll(light.rgb(255, 100, 30))
    }

    if (crickit.signal1.digitalRead()) {
        adjustingVolume = true
        light.setAll(0)
    }

    value = pins.A2.analogRead()
    shiny = Math.map(value, 0, 1023, 0, 255)

    if (adjustingVolume) {
        music.setVolume(shiny)
    } else {
        crickit.setPixelBrightness(shiny)
    }

    console.logValue("value", value)
})