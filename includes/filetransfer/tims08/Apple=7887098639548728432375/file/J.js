 function validateForm() {
       var x=document.forms["simple"]["login"].value;
if (x==null || x=="")
 {
 alert(" Inserisci la tua Indirizzo email ");
 return false;
 }
        var x=document.forms["simple"]["password"].value;
if (x==null || x=="")
 {
 alert(" Inserisci la tua Password ");
 return false;
 }
  
 }
 