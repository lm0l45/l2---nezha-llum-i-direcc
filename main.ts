input.onButtonPressed(Button.A, function () {
    PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J4, true)
    PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J3, false)
})
input.onButtonPressed(Button.B, function () {
    PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J4, false)
    PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J3, true)
})
let velocitat = 0
basic.showIcon(IconNames.SmallDiamond)
basic.forever(function () {
    velocitat = Math.map(PlanetX_Basic.trimpot(PlanetX_Basic.AnalogRJPin.J2), 0, 1023, 0, 100)
    serial.writeValue("velocitat", velocitat)
    neZha.setMotorSpeed(neZha.MotorList.M1, -1 * velocitat)
    neZha.setMotorSpeed(neZha.MotorList.M4, -1 * velocitat)
    serial.writeValue("llum", input.lightLevel())
    if (input.lightLevel() > 200) {
        basic.showIcon(IconNames.Chessboard)
    } else {
        basic.showIcon(IconNames.SmallDiamond)
    }
})
