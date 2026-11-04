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



const heartIndices = [9, 10, 13, 14, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 41, 42, 43, 44, 45, 46, 50, 51, 52, 53, 59, 60];
const smileyFace = [26, 29, 41, 46, 50, 51, 52, 53];
const altSmileyFace = [9, 14, 17, 18, 21, 22, 26, 29, 41, 46, 50, 51, 52, 53];
const sadFace = [26, 29, 42, 43, 44, 45, 49, 54];


function drawFace(color: number) {
    strip.clear(); // Turn off all LEDs first

    for (let i = 0; i < smileyFace.length; i++) {
        strip.setPixelColor(smileyFace[i], color);
    }
}

function drawSadFace(color: number) {
    strip.clear(); // Turn off all LEDs first

    for (let i = 0; i < sadFace.length; i++) {
        strip.setPixelColor(sadFace[i], color);
    }
}


input.onSwitchMoved(SwitchDirection.Left, function () {
    drawFace(light.rgb(255, 255, 0));
})

input.onSwitchMoved(SwitchDirection.Right, function () {
    drawSadFace(light.rgb(255, 255, 0));
})