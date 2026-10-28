
let timerMiliSeconds: number = 3600000
let timerRunning: boolean = false

let remainingSeconds: number = timerMiliSeconds / 1000
let remainingMinutes: number = 0
let seconds: number = 0

function showTimer() {
    remainingMinutes = Math.floor(remainingSeconds / 60)
    seconds = remainingSeconds % 60

    console.log(
        `${remainingMinutes} m ${seconds} s`
    )
}

function startTimer() {
    if (timerRunning) {
        return
    }

    timerRunning = true

    while (remainingSeconds > 0) {
        showTimer()

        loops.pause(1000)

        remainingSeconds -= 1
    }

    timerRunning = false
    remainingSeconds = 0

    console.log("Tijd is voorbij!")
    music.baDing.play()
}

function addTimer() {
    remainingSeconds += 900

    console.log("15 minuten toegevoegd!")
    showTimer()
}

input.buttonA.onEvent(ButtonEvent.Click, function () {
    startTimer()
})

input.buttonB.onEvent(ButtonEvent.Click, function () {
    addTimer()
})


