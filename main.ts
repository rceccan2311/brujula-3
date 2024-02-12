basic.forever(function () {
    basic.showString("" + (input.compassHeading()))
    basic.showArrow(ArrowNames.North)
    basic.showLeds(`
        . . . . .
        # . . . #
        # # . . #
        # . # . #
        # . . # #
        `)
    basic.showArrow(ArrowNames.South)
    basic.showLeds(`
        # # # # #
        # . . . .
        # # # # #
        . . . . #
        # # # # #
        `)
    basic.showArrow(ArrowNames.East)
    basic.showLeds(`
        # # # # #
        # . . . .
        # # # # .
        # . . . .
        # # # # #
        `)
    basic.showArrow(ArrowNames.West)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
})
