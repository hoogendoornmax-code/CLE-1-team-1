light.setAll(255)
let shiny = 0;
let value = 0
forever(function () {
    value = pins.A2.analogRead()
    shiny = Math.map(value, 0, 1023, 0, 255)
    light.setBrightness(shiny)
    console.logValue("value", value)
})
