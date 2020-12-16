let on_off_light = 0
input.onButtonPressed(Button.A, function () {
    if (on_off_light == 0) {
        on_off_light = 1
        led.setBrightness(255)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        basic.clearScreen()
        on_off_light = 0
    }
})
