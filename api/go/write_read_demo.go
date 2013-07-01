package main
 
 import (
    "bitbucket.org/gmcbay/i2c"
        "log"
        )
 func main(){
        bp, err := i2c.Bus(1)
            if err != nil{
                        log.Panicf("failed to create bus: %v\n", err)
                            }
                                bp.WriteByte(0x04, 0x55, 0xCC)
 }
