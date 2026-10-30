const strip = light.createStrip(pins.A1, 64);

// The exact numbers from your image
const heartIndices = [9, 10, 13, 14, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 41, 42, 43, 44, 45, 46, 50, 51, 52, 53, 59, 60];
const smileyFace = [26, 29, 41, 46, 50, 51, 52, 53];
const altSmileyFace = [9, 14, 17, 18, 21, 22, 26, 29, 41, 46, 50, 51, 52, 53];
const sadFace = [26, 29, 42, 43, 44, 45, 49, 54];
const sunShape = [0, 4, 7, 9, 11, 14, 18, 19, 20, 21, 24, 26, 27, 28, 29, 30, 33, 34, 35, 36, 37, 39, 42, 43, 44, 45, 49, 52, 54, 56, 59, 63];
function drawSun(color: number) {
    strip.clear(); // Turn off all LEDs first

    for (let i = 0; i < sunShape.length; i++) {
        strip.setPixelColor(sunShape[i], color);
    }
}


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

function drawAltFace(color: number) {
    strip.clear(); // Turn off all LEDs first

    for (let i = 0; i < altSmileyFace.length; i++) {
        strip.setPixelColor(altSmileyFace[i], color);
    }
}
input.onSwitchMoved(SwitchDirection.Left, function () {
    drawFace(light.rgb(255, 255, 0));
})

input.onSwitchMoved(SwitchDirection.Right, function () {
   drawSun(light.rgb(255, 255, 0));
})
function drawHeart(color: number) {
    strip.clear(); // Turn off all LEDs first

    for (let i = 0; i < heartIndices.length; i++) {
        strip.setPixelColor(heartIndices[i], color);
    }
}

input.buttonA.onEvent(ButtonEvent.Click, function () {
    drawHeart(light.rgb(255, 0, 0));
});

input.buttonB.onEvent(ButtonEvent.Click, function () {
    drawAltFace(light.rgb(200, 100, 10))
})