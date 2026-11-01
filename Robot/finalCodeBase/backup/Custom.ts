
/**
 * Use this file to define custom functions and blocks.
 * Read more at https://makecode.adafruit.com/blocks/custom
 */


namespace animations {
    let strip = light.createStrip(pins.A1, 64)
    const smileyFace = [26, 29, 41, 46, 50, 51, 52, 53];
    const heartIndices = [9, 10, 13, 14, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 41, 42, 43, 44, 45, 46, 50, 51, 52, 53, 59, 60];
    const altSmileyFace = [9, 14, 17, 18, 21, 22, 26, 29, 41, 46, 50, 51, 52, 53];
    const sadFace = [26, 29, 42, 43, 44, 45, 49, 54];
    const sunShape = [0, 4, 7, 9, 11, 14, 18, 19, 20, 21, 24, 26, 27, 28, 29, 30, 33, 34, 35, 36, 37, 39, 42, 43, 44, 45, 49, 52, 54, 56, 59, 63];

    export function drawFace(color: number): void {
        strip.clear(); // Turn off all LEDs first

        for (let i = 0; i < smileyFace.length; i++) {
            strip.setPixelColor(smileyFace[i], color);
        }
    }
    export function drawSun(color: number) {
        strip.clear(); // Turn off all LEDs first

        for (let i = 0; i < sunShape.length; i++) {
            strip.setPixelColor(sunShape[i], color);
        }
    }


    export function drawSadFace(color: number) {
        strip.clear(); // Turn off all LEDs first

        for (let i = 0; i < sadFace.length; i++) {
            strip.setPixelColor(sadFace[i], color);
        }
    }

    export function drawAltFace(color: number) {
        strip.clear(); // Turn off all LEDs first

        for (let i = 0; i < altSmileyFace.length; i++) {
            strip.setPixelColor(altSmileyFace[i], color);
        }
    }

    export function drawHeart(color: number) {
        strip.clear(); // Turn off all LEDs first

        for (let i = 0; i < heartIndices.length; i++) {
            strip.setPixelColor(heartIndices[i], color);
        }
    }
}


namespace temperature {
    // SETTINGS
    let maxAcceptableTemp: number = 27
    // VARIABLES
    let disableTempWarn: boolean = false;
    // FUNCTIONS
    export function getTemp() {
        temp = input.temperature(TemperatureUnit.Celsius)
        console.log(`Temperature: ${temp}`)
        return (temp);
    }

    export function tempWarner(t: number) {
        if (disableTempWarn === false) {
            if (t > maxAcceptableTemp) {
                // tempWarnAnimation()
                animations.drawSun(light.rgb(200, 0, 0))
                console.log(`Your room is too hot for comfortable studying!`);

                music.playMelody("B C C5 B C B G G ", 300);
                pause(10000);
                light.setAll(light.rgb(0, 255, 0))
            }


        }
    }
    export function disableTempWarner() {
        if (disableTempWarn === true) {
            disableTempWarn = false
            music.playMelody("A B C5 C B - - - ", 330)

        } else {
            disableTempWarn = true;
            music.playMelody("B C C5 B A - - - ", 330)
            light.setAll(light.rgb(0, 0, 255))
        }
    }
}