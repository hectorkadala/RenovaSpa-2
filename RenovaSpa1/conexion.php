<?php
	$conexion = mysql_connect("localhost","root","") Or die("No se pudo conectar");
	if($conexion){
		mysql_select_db("renovaspa1",$conexion);
	}else{
		echo "Error";
	}
?>