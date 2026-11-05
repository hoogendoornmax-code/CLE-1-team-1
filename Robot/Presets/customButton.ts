    let sig5;

    forever(function () {
        sig5 = crickit.signal5.analogRead()
        console.log(sig5)

        if (sig5 >= 900) {
            drawHeart(light.rgb(120, 10, 70))
        }
    }) 