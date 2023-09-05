function Endavant () {
    basic.showArrow(ArrowNames.North)
    neZha.setMotorSpeed(neZha.MotorList.M1, -100)
    neZha.setMotorSpeed(neZha.MotorList.M4, -100)
}
function Esquerra () {
    basic.showArrow(ArrowNames.West)
    neZha.setMotorSpeed(neZha.MotorList.M1, -60)
    neZha.setMotorSpeed(neZha.MotorList.M4, -100)
}
function Dreta () {
    basic.showArrow(ArrowNames.East)
    neZha.setMotorSpeed(neZha.MotorList.M1, -100)
    neZha.setMotorSpeed(neZha.MotorList.M4, -60)
}
basic.showIcon(IconNames.Diamond)
basic.pause(1000)
basic.forever(function () {
    serial.writeValue("direcció", PlanetX_Basic.trimpot(PlanetX_Basic.AnalogRJPin.J2))
    serial.writeValue("llum", input.lightLevel())
})
basic.forever(function () {
    if (input.lightLevel() > 200) {
        PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J4, true)
        PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J3, false)
        if (PlanetX_Basic.trimpot(PlanetX_Basic.AnalogRJPin.J2) < 341) {
            Esquerra()
        } else if (PlanetX_Basic.trimpot(PlanetX_Basic.AnalogRJPin.J2) > 682) {
            Dreta()
        } else {
            Endavant()
        }
    } else {
        basic.showIcon(IconNames.SmallDiamond)
        neZha.stopAllMotor()
        PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J4, false)
        PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J3, true)
    }
})
