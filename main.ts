basic.forever(function () {
    led.plot(2, 2)
    if (input.isGesture(Gesture.Shake)) {
        basic.showIcon(IconNames.Heart)
    }
    else if (input.buttonIsPressed(Button.A)) {

        basic.showLeds(`
    # . . . #
    . # . # .
    . . # . .
    . # . # .
    # . . . #
`)

    }
    else if (input.buttonIsPressed(Button.B)){

        basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . # . # .
    # . . . #
`)


    }


   
        let x = input.acceleration(Dimension.X)
        let y = input.acceleration(Dimension.Y)
        basic.clearScreen()

        if (x > 300 || y > 300) {
            basic.showString("High")

        } else if (x < 300) {
            led.plot(0, 2)
            led.plot(1, 2)
            basic.showString("Slow")
        } else {

            basic.showString("unknown")
        }

        basic.pause(50)


})
