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
    if (input.compassHeading() <= 185 && input.compassHeading() >= 175) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    }
})
