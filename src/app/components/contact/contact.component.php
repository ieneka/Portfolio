<?php
$nombre = $_GET['nombre'];
$email = $_GET['email'];
$telefono = $_GET['telefono'];
$mensaje = $_GET['mensaje'];

$header = 'From: ' . $email . "\r\n";
$header .= "X-Mailer: PHP/" . phpversion() . "\r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$text = "Este mensaje fue enviado por: " . $nombre . " \r\n";
$text .= "Su email es: " . $email . "\r\n";
$text .= "Telefono de contacto: " .$phone . "\r\n";
$text .= "Mensaje: " . $_GET['mensaje'] . "\r\n";
$text .="Enviado el: " . date('d/m/Y', time());

$para = 'ienekamartinez@hotmail.com';
$asunto = 'Asunto del mensaje';

mail($para, $asunto, utf8_decode($text), $header);

header("Location:index.html")
?>