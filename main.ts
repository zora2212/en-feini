input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(randint(0, 6))
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.compassHeading())
})
basic.forever(function () {
	
})
