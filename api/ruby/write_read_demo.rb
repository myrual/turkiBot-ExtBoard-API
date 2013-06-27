require "i2c/i2c"
@demo = ::I2C.create("/dev/i2c-1")
@demo.write(0x04, 0x00)
