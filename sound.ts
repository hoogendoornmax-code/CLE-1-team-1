let sound: number;
light.setAll(light.rgb(255, 0, 255))
light.setBrightness(10)
forever(function () {
    getSoundLevel();
    roomSoundWarning()
})



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