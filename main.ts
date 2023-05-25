led.enable(false)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 1) {
        pins.analogWritePin(AnalogPin.P2, 1023)
        pins.analogWritePin(AnalogPin.P3, 1023)
        basic.pause(50)
        pins.analogWritePin(AnalogPin.P2, 0)
        pins.analogWritePin(AnalogPin.P3, 0)
        basic.pause(50)
    } else {
        pins.analogWritePin(AnalogPin.P2, 0)
        pins.analogWritePin(AnalogPin.P3, 0)
    }
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 1) {
        music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
    } else {
        music.stopMelody(MelodyStopOptions.All)
    }
})
