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
input.onButtonPressed(Button.A, function () {
    Esquerra()
})
input.onButtonPressed(Button.AB, function () {
    PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J4, true)
    PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J3, false)
    Endavant()
})
input.onButtonPressed(Button.B, function () {
    Dreta()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.SmallDiamond)
    neZha.stopAllMotor()
    PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J4, false)
    PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J3, true)
})
function Dreta () {
    basic.showArrow(ArrowNames.East)
    neZha.setMotorSpeed(neZha.MotorList.M1, -100)
    neZha.setMotorSpeed(neZha.MotorList.M4, -60)
}
basic.showIcon(IconNames.Diamond)
basic.pause(1000)
basic.forever(function () {
	
})
