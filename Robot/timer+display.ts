

const strip = light.createStrip(pins.A1, 64);
//timer
let timerRunning: boolean = false
let timerStarted: boolean = false
let remainingSeconds: number = 900
let ledStrips: number = 0

light.setAll(light.rgb(100, 20, 40))


//ticking timer
function showTimer() {
    let remainingHours = Math.floor(remainingSeconds / 3600)
    let remainingMinutes = Math.floor(remainingSeconds / 60) % 60
    let seconds = remainingSeconds % 60

    console.log(`${remainingHours} h ${remainingMinutes} m ${seconds} s`)
}

//doet de timer + een kwartier
function addTimer() {
    remainingSeconds += 900

    if (remainingSeconds > 7200) {
        remainingSeconds = 7200
    }

    console.log("15 minuten toegevoegd!")
    showTimer()
}
// start de timer en eindigt hem als de tijd om is
function startTimerLoop() {
    if (timerRunning && remainingSeconds > 0) {
        pause(1000)
        remainingSeconds -= 1
        showTimer()
        lightLedStrip()

        if (remainingSeconds <= 0) {
            timerRunning = false
            console.log("Tijd is voorbij!")
            music.magicWand.play()
        }
    } else {
        pause(100)
    }
}

//laat de timer lopen
loops.forever(function () {
    startTimerLoop()
})

// lights up timer
function lightLedStrip() {

    if (remainingSeconds > 3600) {

        // Tweede uur: blauw
        let remainingStrips = remainingSeconds - 3600

        ledStrips = Math.ceil((remainingStrips / 3600) * 64)

        for (let i = 0; i < 64; i++) {
            if (i < ledStrips) {
                strip.setPixelColor(i, light.rgb(0, 0, 255))
            } else {
                strip.setPixelColor(i, light.rgb(0, 0, 0))
            }
        }

    } else {

        // Eerste uur: groen
        ledStrips = Math.ceil((remainingSeconds / 3600) * 64)

        for (let i = 0; i < 64; i++) {
            if (i < ledStrips) {
                strip.setPixelColor(i, light.rgb(0, 255, 0))
            } else {
                strip.setPixelColor(i, light.rgb(0, 0, 0))
            }
        }

    }
}


input.buttonA.onEvent(ButtonEvent.Click, function () {
    // is de timer
    if (timerStarted === false) {
        timerStarted = true
        timerRunning = true

        console.log("Timer gestart!")
        showTimer()
    } else {
        addTimer()
        timerRunning = true
    }

    

    light.setAll(light.rgb(100, 200, 0))

    strip.setAll(light.rgb(0, 255, 100))

})

// zet de timer handmatig gelijk uit
input.buttonA.onEvent(ButtonEvent.LongClick, function () {
    timerRunning = false
    timerStarted = false
    remainingSeconds = 0
    console.log("Timer: off")
})

input.buttonB.onEvent(ButtonEvent.Click, function () {
    for (let i = 0; i < 64; i++) {
        strip.setPixelColor(i, light.rgb(255, 0, 0))
        pause(100)
    }

})
