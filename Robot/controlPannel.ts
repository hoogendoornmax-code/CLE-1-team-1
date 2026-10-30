light.setAll(0xff0000)
forever(function () {
    if (pins.A2.digitalRead()) {
        light.setAll(light.rgb(255, 0, 255))
    }
    if (pins.A3.digitalRead()) {
        light.setAll(light.rgb(255, 100, 30))
    }
    if (crickit.signal1.digitalRead()) {
        light.setAll(0)
    }
    if (crickit.signal2.digitalRead()) {
        light.setAll(light.rgb(124, 50, 200))
    }
    if (crickit.signal3.digitalRead()) {
        light.setAll(light.rgb(100, 70, 20))
    }
})