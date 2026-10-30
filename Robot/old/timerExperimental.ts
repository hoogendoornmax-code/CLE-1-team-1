let timerRunning: boolean = false
let timerStarted: boolean = false
let remainingSeconds: number = 900

function showTimer() {
    let remainingHours = Math.floor(remainingSeconds / 3600)
    let remainingMinutes = Math.floor(remainingSeconds / 60) % 60
    let seconds = remainingSeconds % 60

    console.log(`${remainingHours} h ${remainingMinutes} m ${seconds} s`)
}

function addTimer() {
    remainingSeconds += 900
    console.log("15 minuten toegevoegd!")
    showTimer()
}

function startTimerLoop(x: boolean) {
    if (x = true) {
        forever(function () {
            if (timerRunning && remainingSeconds > 0) {
                pause(1000)
                remainingSeconds -= 1
                showTimer()

                if (remainingSeconds === 0) {
                    timerRunning = false
                    console.log("Tijd is voorbij!")
                    music.baDing.play()
                }

            }

        })
    }
}

input.buttonA.onEvent(ButtonEvent.Click, function () {
    if (timerStarted === false) {
        timerStarted = true
        timerRunning = true

        console.log("Timer gestart!")
        showTimer()

        startTimerLoop(true)
    } else {
        addTimer()
        timerRunning = true
        if (remainingSeconds > 7200) {
            remainingSeconds = 7199
        }
    }
})


input.buttonA.onEvent(ButtonEvent.LongClick, function () {

    startTimerLoop(false)
    timerRunning = false
    timerStarted = false


    console.log("timer: off")
})
