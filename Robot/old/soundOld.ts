light.setAll(light.rgb(255, 0, 255))
let movingAverage: number;
let loudSince: number;
let warningActive = false
let sound: number;

const alpha = 0.1
const sampleIntervalMs = 250
const warningThreshold = 140
const recoveryThreshold = 130
const persistenceMs = 6000

forever(function () {
    getSoundLevel();
    const now = control.millis();

    // Start from the first real reading rather than from an artificial zero.
    if (movingAverage === undefined) {
        movingAverage = sound
    } else {
        movingAverage += alpha * (sound - movingAverage)
        console.log(Math.round(movingAverage));
    }
    //Warning isnt active, start this
    if (!warningActive) {
        //Is the latest walking average too loud? Yes? Proceed.
        if (movingAverage >= warningThreshold) {
            //Is this the first time frkkn loud times? Yes? Define the start time by grabbing the current total runtime as a start moment for this activity.
            if (loudSince === undefined) {

                loudSince = now
                console.log(`First loud noice as been sinse ${Math.round(loudSince) / 1000} secconds of runtime`);
            }
            // If it's been loud
            if (now - loudSince >= persistenceMs) {
                console.log(`It's been ${persistenceMs} sinse ${Math.round(loudSince) / 1000} secconds and sound remained high, issuing a warning now.`);
                warningActive = true
                loudSince = undefined

                soundWarner()
            }
        } else {
            // The average fell below the limit, so the high period was not continuous.
            loudSince = undefined
        }
    } else if (movingAverage <= recoveryThreshold) {
        // Rearm only after the sound is clearly lower.
        warningActive = false
    }

    basic.pause(sampleIntervalMs)
})

function getSoundLevel() {
    sound = input.soundLevel();

    return (sound);
}

function soundWarner() {

    aniFlashRed();
}

function aniFlashRed() {
    for (let i = 0; i < 3; i++) {

        light.setAll(light.rgb(255, 0, 0))
        pause(100);
        light.setAll(light.rgb(0, 0, 0))
        pause(100);
    }
    //Reset to base status light
    light.setAll(light.rgb(255, 0, 255))
}