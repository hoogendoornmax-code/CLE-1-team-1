let sound: number;
light.setAll(light.rgb(255, 0, 255))
light.setBrightness(10)
forever(function () {
    getSoundLevel();
    roomSoundWarning()
})

let movingAverage = 0
let speed = 0.9 // 0 - 1
function obtainAverage()
{
    movingAverage = movingAverage * (1 - speed) + sound * speed
    console.log(`Average sound level ${movingAverage}`)
}

function getSoundLevel() {
    sound = input.soundLevel();
    console.log(sound);
    return (sound);
}

function roomSoundWarning() {
    if (sound > 160) {
        aniFlashRed();
    }
}