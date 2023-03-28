input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showNumber(randint(0, 10))
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    for (let index = 0; index < 10; index++) {
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.SmallHeart)
    }
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    for (let index = 0; index < 10; index++) {
        basic.showString("Hola")
    }
    basic.clearScreen()
})
basic.pause(1000)
basic.showIcon(IconNames.Happy)
basic.clearScreen()
