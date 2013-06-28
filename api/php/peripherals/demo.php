<?php
	require_once( 'i2c_bus.php' );
	$demoi2c = new i2c_bus(4);
	$demoi2c->write_register(0x22, 10);
?>
