input.onButtonPressed(Button.A, function () {
    radio.sendString("L")
    basic.showLeds(`
        . . # . .
        . # . . .
        # . . . .
        . # . . .
        . . # . .
        `)
})
input.onGesture(Gesture.Shake, function () {
    radio.sendString("S")
    basic.showLeds(`
        . . . . .
        . # . # .
        . # . # .
        . # . # .
        . . . . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("F")
    basic.showLeds(`
        . . # . .
        . # . # .
        # . . . #
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("R")
    basic.showLeds(`
        . . # . .
        . . . # .
        . . . . #
        . . . # .
        . . # . .
        `)
})
basic.showIcon(IconNames.Happy)
radio.setGroup(2)
basic.clearScreen()
basic.forever(function () {
	
})
