light.setAll(light.rgb(255, 0, 255))
let movingAverage: number;
let loudSince: number;
let warningActive = false
let warningUntil: number;
let sound: number;

const alpha = 0.1
const sampleIntervalMs = 250
const warningThreshold = 140
const recoveryThreshold = 130
const persistenceMs = 6000

forever(function () {
    soundSystem()
})

function soundSystem() {

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
                warningUntil = now + 3000
                loudSince = undefined

            }
        } else {
            // The average fell below the limit, so the high volume levels was noth for prolonged time.
            loudSince = undefined
        }
    } else if (now >= warningUntil && movingAverage <= recoveryThreshold) {
        // stop warning and start looking for next loud period only after the sound is clearly lower.
        warningActive = false
        loudSince = undefined
    }

    if (warningActive) {
        light.setAll(now % 500 < 250 ? light.rgb(255, 0, 0) : light.rgb(0, 0, 0))
    } else {
        light.setAll(light.rgb(255, 0, 255))
    }

    basic.pause(sampleIntervalMs)
}

function getSoundLevel() {
    sound = input.soundLevel();

    return (sound);
}