import turkiBot.extboard.motorA1 as motor

def forward():
    motor.leftWheel.ForwardStep(3)
    motor.rightWhell.ForwardStep(3)
    status = motor.run()
    if status.result == motor.SUCCESS:
        print("run without block")
    else if status.result == motor.BLOCKED:
        print("run but blocked by")
