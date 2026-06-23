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
    basic.pause(1000)
    basic.clearScreen()
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendString("SR")
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
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendString("SL")
})
input.onGesture(Gesture.ScreenUp, function () {
    radio.sendString("SC")
})
basic.showIcon(IconNames.Happy)
radio.setGroup(2)
basic.clearScreen()
