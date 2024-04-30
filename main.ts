input.onButtonPressed(Button.A, function () {
    wuKong.setAllMotor(100, -98)
})
input.onButtonPressed(Button.B, function () {
    wuKong.setAllMotor(0, 0)
})
basic.showLeds(`
    . . # . .
    . # # # .
    # # # # #
    . # # # .
    . . # . .
    `)
basic.showNumber(0)
basic.forever(function () {
	
})
