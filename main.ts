input.onButtonPressed(Button.A, function () {
    basic.showString("L")
    radio.sendString("L")
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("STOP")
    radio.sendString("STOP")
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("F")
    radio.sendString("F")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("R")
    radio.sendString("R")
})
basic.showIcon(IconNames.Surprised)
radio.setGroup(1)
basic.clearScreen()
basic.forever(function () {
	
})
