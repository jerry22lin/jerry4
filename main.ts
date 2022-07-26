basic.forever(function () {
    basic.showNumber(input.compassHeading())
    if (input.compassHeading() <= 5 || input.compassHeading() >= 355) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
})
