let item = 0
let item2 = 0
basic.forever(function () {
    item = sonar.ping(
    DigitalPin.P8,
    DigitalPin.P9,
    PingUnit.Inches
    )
    item2 = sonar.ping(
    DigitalPin.P16,
    DigitalPin.P13,
    PingUnit.Inches
    )
    if (item < 5 && item > 0.1) {
        basic.pause(2000)
        servos.P2.setAngle(90)
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P12, 0)
        music.play(music.stringPlayable("G A B - - - - - ", 500), music.PlaybackMode.UntilDone)
        I2C_LCD1602.LcdInit(39)
        I2C_LCD1602.clear()
        I2C_LCD1602.ShowString("Hello", 5, 0)
        I2C_LCD1602.ShowString("Welcome!!", 3, 1)
        basic.pause(2000)
    } else {
        servos.P2.setAngle(0)
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P12, 1)
    }
    if (item2 < 5 && item2 > 0.1) {
        basic.pause(2000)
        servos.P1.setAngle(90)
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P12, 0)
        music.play(music.stringPlayable("B A G - - - - - ", 500), music.PlaybackMode.UntilDone)
        I2C_LCD1602.clear()
        I2C_LCD1602.ShowString("Goodbye!!", 3, 0)
        I2C_LCD1602.ShowString("Come again!!", 1, 1)
        basic.pause(2000)
    } else {
        servos.P1.setAngle(0)
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P12, 1)
    }
})
