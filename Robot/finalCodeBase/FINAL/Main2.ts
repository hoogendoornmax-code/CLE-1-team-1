// Button Logic Variables
let firstCompression: number = 0;
let sig5 = 0;
let buttonIsCompressed = 0;
let wasPressed = false;
//General Variables
let strip = light.createStrip(pins.A1, 64)
let temp: number;
// Startup Features
animations.drawFace(light.rgb(255, 255, 0));
// Main Loop
forever(function () {
    sound.soundSystem();
    temperature.getTemp();
    temperature.tempWarner(temp);
    timer.startTimerLoop()
    customButtons();
})



input.onSwitchMoved(SwitchDirection.Left, function () {
    animations.drawFace(light.rgb(255, 255, 0));
})
input.onSwitchMoved(SwitchDirection.Right, function () {
    animations.drawHeart(light.rgb(255, 0, 0));
})
input.buttonB.onEvent(ButtonEvent.Click, function () {
    temperature.disableTempWarner();
    animations.drawAltFace(light.rgb(200, 100, 10))
})





// Complex button logic function is not in Custom.ts but here.
// This is done to create a true sepperation between features.
// But mostly, all of the button work is happening in Main.ts.
// So it is easier to keep the button logic here.


function customButtons() {
    const now = control.millis();
    sig5 = crickit.signal5.analogRead();
    // Bellow log is for debugging
    // console.log(`sig 5 value ${sig5}`);

    let isCurrentlyPressed = sig5 >= 500;

    // detects the exACt moment the button goes down
    if (isCurrentlyPressed && !wasPressed) {
        firstCompression = now;
        buttonIsCompressed = 0; // Reset action state on new press
        console.log(`First compression occurred at ${firstCompression}`);
    }
    // Bellow log is for debugging
    // console.log(`sig5 digital read ${sig5}`)

    // Short or Long press (Triggers upon release based on how long it was held)
    if (!isCurrentlyPressed && wasPressed) {
        if (firstCompression > 0) {
            let holdDuration = now - firstCompression;

            if (holdDuration >= 4000) {
                buttonIsCompressed = 3; // 4-Second Long Press
            } else if (holdDuration >= 2000) {
                buttonIsCompressed = 2; // 2-Second Long Press
            } else {
                buttonIsCompressed = 1; // Short Press
            }
        }
        firstCompression = 0; // reset timer tracking
    }



    // Remember the button state for the next loop iteration
    wasPressed = isCurrentlyPressed;
    // Bellow log is for debugging
    // console.log(`what button type is being activated: ${buttonIsCompressed}`);
    // console.log(`what button type is being activated${buttonIsCompressed}`)
    // Short Press
    if (buttonIsCompressed === 1) {
        // ---------------- contents of the button ----------------
        // This is a timer started and adder
        if (timer.timerStarted === false) {
            timer.remainingSeconds = 900
            timer.timerStarted = true
            timer.timerRunning = true
            timer.secondTimer = control.millis() + 1000;
            console.log("Timer started!")
            timer.showTimer()
        } else {
            timer.addTimer()
            timer.timerRunning = true
        }

        light.setAll(light.rgb(100, 200, 0))

        // ---------------- contents of the button ----------------
        buttonIsCompressed = 0;
    }

    // Long Press
    if (buttonIsCompressed === 2) {
        // ---------------- contents of the button ----------------
        timer.timerRunning = false
        timer.timerStarted = false
        timer.remainingSeconds = 0
        console.log("Timer: off")
        strip.clear();
        // ---------------- contents of the button ----------------
        buttonIsCompressed = 0;
    }
    // 4-Second Long Press Action
    if (buttonIsCompressed === 3) {
        temperature.disableTempWarner();
        buttonIsCompressed = 0;
    }
} 