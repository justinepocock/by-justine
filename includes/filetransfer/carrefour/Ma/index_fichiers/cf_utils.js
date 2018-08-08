function setFactura(){
	$('#selectYearCombo').css('display','block');
	$('#selectYear').css('display','block');
	
	var dFactura = new Date();
	var facturaYear=dFactura.getFullYear();
	document.getElementById("selectYear").style.display='block';
	
	if (typeof(mesGlobal) != 'undefined' && dFactura.getMonth()== '0' && mesGlobal=='vacio') {
		facturaYear =dFactura.getFullYear()-1;		
	} else{
		facturaYear =dFactura.getFullYear();		
	}
	document.getElementById("selectYear").innerHTML = facturaYear;
	 
	var select = document.getElementById("selectYear");		
		for(var i=facturaYear;i>facturaYear-7; i--) {
			var opt = i;
			var el = document.createElement("option");
			el.textContent = opt;
			el.value = opt;				
			select.appendChild(el);
		}  

		select.firstElementChild.selected=true;
		var selectedYear= select.firstElementChild.value;
		if (localStorage.getItem('selectedYearST')!='undefined' || localStorage.getItem('selectedYearST')!=null && localStorage.getItem('selectedYearST')!=select.options[0].text){
			var selectedYear = localStorage.getItem('selectedYearST');
			setMonthBill(selectedYear);		
		}else {				
			setMonthBill(selectedYear);	
		}

}

function setMonthBill(selectedYear){
			var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
			var select = document.getElementById("selectYear");								
			if (selectedYear===undefined || selectedYear===null || selectedYear==='undefined'){
				 selectedYear = select.options[select.selectedIndex].text;
			}
			select.value=selectedYear;
			//var selectedYear = select.options[select.selectedIndex].value;			
			localStorage.setItem('selectedYearST', selectedYear);
			var currentYear =  new Date();
			if (selectedYear != currentYear.getFullYear()){	
				$('#filter_month br').remove('br');
				$('#filter_month > span:nth-child(6)').after('<br style=""><br style="">');
				var dte = new Date();
				dte.setDate(15);
				dte.setMonth(0);
				dte.setFullYear(selectedYear);
				var diaActual = dte.getDate();
				var mesActual = dte.getMonth()+1;
				var anyoActual = dte.getFullYear();
				var diasFestivos = ["243","253","257","2612"];
				var arrayLength = diasFestivos.length;
				
						
				var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
				$('#filter_month span').each(function(index,value){
				//$(this).html(months[dte.getMonth()].substring(0, 3).toUpperCase());
				var fechaExtracto = ''+dte.getDate()+'/'+dte.getMonth()+'/'+dte.getFullYear();
				$(this).html(months[dte.getMonth()].substring(0,3).toUpperCase());
				$(this).attr('data-numberMonth',fechaExtracto);
				dte.setMonth(dte.getMonth() + 1);	

				if(index === 11){
					var dataNumber = $(this).attr('data-numbermonth').split("/");
					startDate = new Date(dataNumber[2], dataNumber[1], dataNumber[0]);
					var mesIni = parseInt(startDate.getMonth()) + 1;
					startDate.setMonth(startDate.getMonth()-1);
					//var mesIni = parseInt(startDate.getMonth()) + 1;

					var endDate = new Date(startDate);	
					endDate.setMonth(endDate.getMonth()+1);
					var mesFin = parseInt(endDate.getMonth()) + 1;
					
					$('#fInicio2').val(21+'/'+mesIni+'/'+startDate.getFullYear());
					$('#fFin2').val(20+'/'+mesFin+'/'+endDate.getFullYear());
					$(this).addClass('bk_base_ao');
				}				
			});	
					var mesFin;
					var endDate = new Date(startDate);	
					endDate.setMonth(endDate.getMonth()+1);
					//mesFin = parseInt(endDate.getMonth()) + 1;
					mesFin =11;
				
					//var d = new Date(jQuery.now());
					var numMax = 12;
					var mes;
					var posi;
					var mesConcat1;			
					$('#filter_month span').css('display', 'none');
					$('#filter_month span').removeClass('bk_base_ao');
					$('#filter_month br').css('display', 'none');
					var ultimo = $('#filter_month span').size()-1;
					var i = numMax;
					while (i > 0) {
						if (i === 1) {
						  $($('#filter_month span').get(ultimo)).addClass('bk_base_ao');
						}						
						$($('#filter_month span').get(ultimo)).css('display', 'block');
						i = i - 1;
						ultimo = ultimo - 1; 
					}	
					
					var tablaMes = ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'];
					//selecciona el mes clicado en la consulta de factura
					/*if($('#filtroFechaFin').val() !== undefined){
						var mesFacturaSelec = $('#filtroFechaFin').val().substr($('#filtroFechaFin').val().length-2,$('#filtroFechaFin').val().length);	
						
						$('#filter_month span').each(function(){
							if($(this).html() === tablaMes[mesFacturaSelec-1]){
								$(this).click();
							}
							
						});
						//$($('#filter_month span').get(mesFacturaSelec-1)).click();
					}*/
					
				$('#filter_month span').css('display', 'block');
				$('#filter_month br').css('display', '');
				$('#fFin2').val(endDate.getFullYear().toString()+'01');
				
			} else {
				
				var dte = new Date(jQuery.now());
				dte.setDate(15);				
				
				var diaActual = dte.getDate();
				var mesActual = dte.getMonth()+1;
				var anyoActual = selectedYear; 
				var diasFestivos = ["243","253","257","2612"];
				var mesPropertie='vacio';
				var arrayLength = diasFestivos.length;

				 if ((typeof(mesGlobal) != 'undefined') ){
					var mesPropertie = mesGlobal;					
				}
		
				if(mesPropertie!=='vacio'){
					dte.setMonth(dte.getMonth( ) - 11);
				}else{
					dte.setMonth(dte.getMonth( ) - 12);
				}
				//dte.setYear(anyoActual);
				
				$('#filter_month span').each(function(index,value){
				//$(this).html(months[dte.getMonth()].substring(0, 3).toUpperCase());
					var fechaExtracto = ''+dte.getDate()+'/'+dte.getMonth()+'/'+dte.getFullYear();
					$(this).html(months[dte.getMonth()].substring(0,3).toUpperCase());
					$(this).attr('data-numberMonth',fechaExtracto);
					dte.setMonth(dte.getMonth() + 1);	

					if(index === 11){
						var dataNumber = $(this).attr('data-numbermonth').split("/");
						startDate = new Date(dataNumber[2], dataNumber[1], dataNumber[0]);
						startDate.setMonth(startDate.getMonth()-1);
						var mesIni = parseInt(startDate.getMonth()) + 1;

						var endDate = new Date(startDate);	
						endDate.setMonth(endDate.getMonth()+1);
						var mesFin = parseInt(endDate.getMonth()) + 1;
						
						$('#fInicio2').val(21+'/'+mesIni+'/'+startDate.getFullYear());
						$('#fFin2').val(20+'/'+mesFin+'/'+endDate.getFullYear());
						$(this).addClass('bk_base_ao');
					}				
				});	
					
					var endDate = new Date(startDate);	
					endDate.setMonth(endDate.getMonth()+1);
					var mesFin = parseInt(endDate.getMonth()) + 1;

					var mes;
					var posi;
					var mesConcat1;			
					$('#filter_month span').css('display', 'none');
					$('#filter_month span').removeClass('bk_base_ao');
					$('#filter_month br').css('display', 'none');
					var ultimo = $('#filter_month span').size()-1;
					var i = mesFin;
					while (i > 0) {
						if (i === mesFin) {
						  $($('#filter_month span').get(ultimo)).addClass('bk_base_ao');
						}						
						$($('#filter_month span').get(ultimo)).css('display', 'block');
						$('#filter_month br').css('display', '');
						i = i - 1;
						ultimo = ultimo - 1; 
					}	
					
					var tablaMes = ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'];
					
					if(mesFin.toString().length<2){
							mesConcat1 = "0"+mesFin;
						}else{
							mesConcat1 = mesFin.toString();
						}
									
					$('#fFin2').val(endDate.getFullYear().toString()+mesConcat1);
					$(this).addClass('bk_base_ao');
					$('#filter_month br').remove('br');
					var count = 0;
					for(i=0; i< $('#filter_month span').size();i++){	  
					  if ($($('#filter_month span').get(i)).css('display')=='block'){
						  count=count+1;
						  if (count==7 ){
							 // $('#filter_month span').html('<br style="">');      
							   $('#filter_month > span:nth-child('+i+')').after('<br style=""><br style="">');
						  }
					  } 
					};
				}
		};


$(document).ready(function() {
	/* Script utilizado para mostrar las notificaciones dependiendo de si son mensajes o alertas */
	if( $('#messages').length>0 ){
		var numNotif = $('#numMaxAlert').val();
		$('#msg_filter button').click(function(event){
			var cont = 0;
			if($(event.currentTarget).attr('data-filter') === 'mensajes'){
				if($('#msg_sortable tbody tr#mensaje').size() <= numNotif){
					$('#moreMessages').css('display','none');
				}else{
					$('#moreMessages').css('display','block');
				}
				$('#msg_sortable tbody tr').each(function(){
					if($(this).attr('id') === 'mensaje'){				
						if(cont>=numNotif){
							$(this).removeAttr('style');
						}
						cont++;
					}
				});
			}else if($(event.currentTarget).attr('data-filter') === 'alertas'){
				if($('#msg_sortable tbody tr#alerta').size() <= numNotif){
					$('#moreMessages').css('display','none');
				}else{
					$('#moreMessages').css('display','block');
				}
				$('#msg_sortable tbody tr').each(function(){			
						if($(this).attr('id') === 'alerta'){				
						if(cont>=numNotif){
							$(this).removeAttr('style');
						}
						cont++;
					}
				});
			}else{
				if($('#msg_sortable tbody tr').size() <= numNotif){
					$('#moreMessages').css('display','none');
				}else{
					$('#moreMessages').css('display','block');
				}
				$('#msg_sortable tbody tr').each(function(){
					if(cont>=numNotif){
						$(this).removeAttr('style');
					}
					cont++;
				});
			}
		});	
		
		if($('#msg_sortable tbody tr').size() <= numNotif){
			$('#moreMessages').css('display','none');
		}else{
			$('#moreMessages').css('display','block');
		}
	}
					
	
	//Desactiva el disabled de los campos del cotitular
	if($('#profile').length>0){
		$('#profile input').each(function(){
			if($(this).attr('name') !== "nif" && $(this).attr('name') !== "nif-cotitular"){
				$(this).removeAttr('disabled');
			}
			if ($(this).attr('readonly')) {
				$(this).addClass('input-readonly'); 
			}
		});
	}

	//Desactiva el requerimiento de los campos del cotitular
		if($('#SolicitudTarjeta').length>0){
			if($('#r_cotitular input[checked]').val() === 'no'){		
				$('#request_cotitular').css('display','none');
				$('#cotitular_name').removeAttr( "required" );
				$('#cotitular_last_name').removeAttr( "required" );
				$('#cotitular_gender').removeAttr( "required" );
				$('#cotitular_nif').removeAttr( "required" );
				$('#cotitular_mail').removeAttr( "required" );
				$('#cotitular_mail2').removeAttr( "required" );				
				$('#cotitular_mobile').removeAttr( "required" );				
				$('#cotitular_birth_date').removeAttr( "required" );
				$('#cotitular_contract').removeAttr( "required" );
				$('#cotitular_revenue').removeAttr( "required" );
				$('#cotitular_job_year').removeAttr( "required" );
				$('#rb_male').removeAttr( "required" );
				$('#rb_cotitular_fijo').removeAttr( "required" );
			}else if($('#r_cotitular input[checked]').val() === 'si'){
				$('#request_cotitular').css('display','block');
				$('#cotitular_name').attr("required",'');
				$('#cotitular_last_name').attr("required",'');
				$('#cotitular_gender').attr( "required" );
				$('#cotitular_nif').attr("required",'');
				$('#cotitular_mail').attr("required",'');
				$('#cotitular_mail2').attr("required",'');
				$('#cotitular_mobile').attr("required",'');
				$('#cotitular_birth_date').attr("required",'');
				$('#cotitular_contract').attr("required",'');
				$('#cotitular_revenue').attr("required",'');
				$('#cotitular_job_year').attr("required",'');
				$('#rb_male').attr("required",'');
				$('#rb_cotitular_fijo').attr("required",'');
			}else if($('#r_cotitular input[checked]').val() === undefined){
				$('#request_cotitular').css('display','none');
				$('#cotitular_name').removeAttr( "required" );
				$('#cotitular_last_name').removeAttr( "required" );
				$('#cotitular_gender').removeAttr( "required" );
				$('#cotitular_nif').removeAttr( "required" );
				$('#cotitular_mail').removeAttr( "required" );
				$('#cotitular_mail2').removeAttr( "required" );				
				$('#cotitular_mobile').removeAttr( "required" );
				$('#cotitular_birth_date').removeAttr( "required" );	
				$('#cotitular_contract').removeAttr( "required" );
				$('#cotitular_revenue').removeAttr( "required" );
				$('#cotitular_job_year').removeAttr( "required" );
				$('#rb_male').removeAttr( "required" );
				$('#rb_cotitular_fijo').removeAttr( "required" );
			}

			$('#r_cotitular input').click(function(event){	
			if($(event.currentTarget).val() === 'no'){		
				$('#cotitular_name').removeAttr( "required" );
				$('#cotitular_last_name').removeAttr( "required" );
				$('#cotitular_gender').removeAttr( "required" );
				$('#cotitular_nif').removeAttr( "required" );
				$('#cotitular_mail').removeAttr( "required" );
				$('#cotitular_mail2').removeAttr( "required" );				
				$('#cotitular_mobile').removeAttr( "required" );
				$('#cotitular_birth_date').removeAttr( "required" );
				$('#cotitular_contract').removeAttr( "required" );
				$('#cotitular_revenue').removeAttr( "required" );
				$('#cotitular_job_year').removeAttr( "required" );
				$('#rb_male').removeAttr( "required" );
				$('#rb_cotitular_fijo').removeAttr( "required" );
			}else{
				$('#cotitular_name').attr("required",'');
				$('#cotitular_last_name').attr("required",'');
				$('#cotitular_gender').attr( "required" );
				$('#cotitular_nif').attr("required",'');
				$('#cotitular_mail').attr("required",'');
				$('#cotitular_mail2').attr("required",'');
				$('#cotitular_mobile').attr("required",'');
				$('#cotitular_birth_date').attr("required",'');
				$('#cotitular_contract').attr("required",'');
				$('#cotitular_revenue').attr("required",'');
				$('#cotitular_job_year').attr("required",'');
				$('#rb_male').attr("required",'');
				$('#rb_cotitular_fijo').attr("required",'');
			}		
		});	
	}


/*Sacar la ventan modal de condiciones legales en forma de pago*/
		if ($('#request_2').length > 0) {
		  $('#terms a').click(function () {
		    setTimeout(function () { //calls click event after a certain time
		      $('#form_legacy_layer').css('overflow', '');
		      $('#form_legacy_layer').css('height', '');
		      $('#form_legacy_layer').css('padding-top', '');
		      $('#form_legacy_layer').css('margin-top', '');
		      $('#form_legacy_layer').css('padding-bottom', '');
		      $('#form_legacy_layer').css('display', 'block');
		    }, 500);
		  });
		}
/*FIN*/

/*Sacar la ventan modal de condiciones legales en forma de pago RESUMEN*/
		if ($('#request_3').length > 0) {
		  $('#terms a#privacidadTarjeta').click(function () {
		    setTimeout(function () { //calls click event after a certain time
		      $('#form_legacy_layer').css('overflow', '');
		      $('#form_legacy_layer').css('height', '');
		      $('#form_legacy_layer').css('padding-top', '');
		      $('#form_legacy_layer').css('margin-top', '');
		      $('#form_legacy_layer').css('padding-bottom', '');
		      $('#form_legacy_layer').css('display', 'block');
		    }, 500);
		  });

		  $('#terms a#tgss').click(function () {
		    setTimeout(function () { //calls click event after a certain time
		      $('#form_legacy_layerTGSS').css('overflow', '');
		      $('#form_legacy_layerTGSS').css('height', '');
		      $('#form_legacy_layerTGSS').css('padding-top', '');
		      $('#form_legacy_layerTGSS').css('margin-top', '');
		      $('#form_legacy_layerTGSS').css('padding-bottom', '');
		      $('#form_legacy_layerTGSS').css('display', 'block');
		    }, 500);
		  });
		}
/*FIN*/

/*Carga la poblacion introduciendo el codigo postal
    if($("#cp").length>0){
	    $("#cp").keyup(function() {
	        recuperarLocalidad(this);
	    });
		
	     $("#cp").change(function() {
	       recuperarLocalidad(this); 
	    });
    }
*/	
    if($("#home_year").length>0){
	    $("#home_year").keyup(function() {
	        validaLimitFecha(this);
	    });
    }	

    if($("#job_year").length>0){
	    $("#job_year").keyup(function() {
	        validaLimitFecha(this);
	    });
    }
	
	/*Setear fecha actual en el datepicker, inicio*/

    if(("#filter_month").length>0){                
	    var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
	   	var d = new Date(jQuery.now());
		var diaActual = d.getDate();
		var mesActual = d.getMonth()+1;
		var anyoActual = d.getFullYear();
		var diasFestivos = ["243","253","257","2612"];
		var mesPropertie='vacio';
		var arrayLength = diasFestivos.length;
		var flag = 0;
		
		var fechaInit = new Date(jQuery.now());
		
		if ((typeof(mesGlobal) != 'undefined') ){
			var mesPropertie = mesGlobal;
		}
		d.setDate(15);
		if(mesPropertie!=='vacio'){
			d.setMonth(d.getMonth( ) - 11);
		}else{
			d.setMonth(d.getMonth( ) - 12);
		}

		
	   	$('#filter_month span').each(function(index,value){

			//$(this).html(months[d.getMonth()].substring(0, 3).toUpperCase());
			var fechaExtracto = ''+d.getDate()+'/'+d.getMonth()+'/'+d.getFullYear();
			$(this).html(months[d.getMonth()].substring(0,3).toUpperCase());
			$(this).attr('data-numberMonth',fechaExtracto);
			d.setMonth(d.getMonth() + 1);	

			if(index === 11){
				var dataNumber = $(this).attr('data-numbermonth').split("/");
				startDate = new Date(dataNumber[2], dataNumber[1], dataNumber[0]);
				startDate.setMonth(startDate.getMonth()-1);
				var mesIni = parseInt(startDate.getMonth()) + 1;

				var endDate = new Date(startDate);	
				endDate.setMonth(endDate.getMonth()+1);
				var mesFin = parseInt(endDate.getMonth()) + 1;
				
				$('#fInicio2').val(21+'/'+mesIni+'/'+startDate.getFullYear());
				$('#fFin2').val(20+'/'+mesFin+'/'+endDate.getFullYear());
				$(this).addClass('bk_base_ao');
			}
			
		});
		
		$('#account_statement .sel_cont .fc_selectd div').each(function(){
		  	if($(this).attr('data-value') === $('#filtroTipoExtracto').val()){
		   		$('#opt_sel1 em').html($(this).html());
		   		$('#tipoextracto').val($('#filtroTipoExtracto').val());
		    }
	    });
		//Comprueba si estas en el tab de Factura,aqui
		if ((typeof(startDate) != "undefined") && (document.getElementById('opt_sel1').innerHTML.indexOf('Factura') > -1)){			
			/*var dFactura = new Date();
			document.getElementById("selectYear").style.display='block';
			document.getElementById("selectYear").innerHTML = dFactura.getFullYear();
			 
			var select = document.getElementById("selectYear");		
				for(var i=dFactura.getFullYear();i>dFactura.getFullYear()-7; i--) {
					var opt = i;
					var el = document.createElement("option");
					el.textContent = opt;
					el.value = opt;				
					select.appendChild(el);
				}  

				select.firstElementChild.selected=true;
				var selectedYear= select.firstElementChild.value;
				if (localStorage.getItem('selectedYearST')!='undefined' || localStorage.getItem('selectedYearST')!=null && localStorage.getItem('selectedYearST')!=select.options[0].text){
					var selectedYear = localStorage.getItem('selectedYearST');
					setMonthBill(selectedYear);		
				}else {				
					setMonthBill(selectedYear);	
				}*/
				setFactura();
		}else{		
			var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
			var d = new Date(jQuery.now());
			var diaActual = d.getDate();
			var mesActual = d.getMonth()+1;
			var anyoActual = d.getFullYear();
			var diasFestivos = ["243","253","257","2612"];
			var arrayLength = diasFestivos.length;
			var flag = 0;
			
			var fechaInit = new Date(jQuery.now()); 
			$('#selectYearCombo').css('display','none');
			/* Should set first date to 21, but another function also performs this action 

					
				fechaInit.setDate(21);
				var endDate = "", noOfDaysToAdd = 5, count = 0;
				while(count < noOfDaysToAdd)
				{
					flag = 0;
					endDate = new Date(fechaInit.setDate(fechaInit.getDate() + 1));
					if(endDate.getDay() != 0 && endDate.getDay() != 6)
					{
						for (var i = 0; i < arrayLength; i++) 
						{
							if (diasFestivos[i].toString()===endDate.getDate().toString()+mesActual.toString())
							{
								flag++;
							}
						}
						if (flag<1)
						{
							count++;
						}
					}
				}*/

				d.setDate(15);
				if(diaActual>=21){
					d.setMonth(d.getMonth( ) - 11);
				}else{
					d.setMonth(d.getMonth( ) - 12);
				}

			
			$('#filter_month span').each(function(index,value){

				//$(this).html(months[d.getMonth()].substring(0, 3).toUpperCase());
				var fechaExtracto = ''+d.getDate()+'/'+d.getMonth()+'/'+d.getFullYear();
				$(this).html(months[d.getMonth()].substring(0,3).toUpperCase());
				$(this).attr('data-numberMonth',fechaExtracto);
				d.setMonth(d.getMonth() + 1);	

				if(index === 11){
					var dataNumber = $(this).attr('data-numbermonth').split("/");
					startDate = new Date(dataNumber[2], dataNumber[1], dataNumber[0]);
					startDate.setMonth(startDate.getMonth()-1);
					var mesIni = parseInt(startDate.getMonth()) + 1;

					var endDate = new Date(startDate);	
					endDate.setMonth(endDate.getMonth()+1);
					var mesFin = parseInt(endDate.getMonth()) + 1;
					
					$('#fInicio2').val(21+'/'+mesIni+'/'+startDate.getFullYear());
					$('#fFin2').val(20+'/'+mesFin+'/'+endDate.getFullYear());
					$(this).addClass('bk_base_ao');
				}
				
			});
			
			$('#account_statement .sel_cont .fc_selectd div').each(function(){
				if($(this).attr('data-value') === $('#filtroTipoExtracto').val()){
					$('#opt_sel1 em').html($(this).html());
					$('#tipoextracto').val($('#filtroTipoExtracto').val());
				}
			});
				if (document.getElementById("submitMovPG") !== null)
				{
					document.getElementById("submitMovPG").innerHTML = "VER EXTRACTO";
				}
			
		}
		

		$('#Extracts_form .fc_selectd div').click(function (event) {
			var mesFin;
			var endDate = new Date(startDate);	
			endDate.setMonth(endDate.getMonth()+1);
			mesFin = parseInt(endDate.getMonth()) + 1;
			
		  if ($(event.currentTarget).html() === 'Factura') {		
			select.firstElementChild.selected=true;
			var selectedYear= select.firstElementChild.value;
			if (localStorage.getItem('selectedYearST')!='undefined' || localStorage.getItem('selectedYearST')!=null && localStorage.getItem('selectedYearST')!=select.options[0].text){
				var selectedYear = localStorage.getItem('selectedYearST');
				setMonthBill(selectedYear);		
			}else {				
				setMonthBill(selectedYear);	
			}
			setMonthBill(selectedYear);	
			$('#selectYearCombo').css('display','block');
			
		 } else {
			$('#selectYearCombo').css('display','none');		 
			var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
			var d = new Date(jQuery.now());
			var diaActual = d.getDate();
			var mesActual = d.getMonth()+1;
			var anyoActual = d.getFullYear();
			var diasFestivos = ["243","253","257","2612"];
			var arrayLength = diasFestivos.length;
			var flag = 0;
			$('#filter_month br').remove('br');
			$('#filter_month > span:nth-child(6)').after('<br style=""><br style="">');
	
        /* Should set first date to 21, but another function also performs this action 

                
            fechaInit.setDate(21);
            var endDate = "", noOfDaysToAdd = 5, count = 0;
            while(count < noOfDaysToAdd)
            {
                flag = 0;
                endDate = new Date(fechaInit.setDate(fechaInit.getDate() + 1));
                if(endDate.getDay() != 0 && endDate.getDay() != 6)
                {
                    for (var i = 0; i < arrayLength; i++) 
                    {
                        if (diasFestivos[i].toString()===endDate.getDate().toString()+mesActual.toString())
                        {
                            flag++;
                        }
                    }
                    if (flag<1)
                    {
                        count++;
                    }
                }
            }*/

            d.setDate(15);
            if(diaActual>=21){
                d.setMonth(d.getMonth( ) - 11);
            }else{
                d.setMonth(d.getMonth( ) - 12);
            }

		
	   	$('#filter_month span').each(function(index,value){

			//$(this).html(months[d.getMonth()].substring(0, 3).toUpperCase());
			var fechaExtracto = ''+d.getDate()+'/'+d.getMonth()+'/'+d.getFullYear();
			$(this).html(months[d.getMonth()].substring(0,3).toUpperCase());
			$(this).attr('data-numberMonth',fechaExtracto);
			d.setMonth(d.getMonth() + 1);	

			if(index === 11){
				var dataNumber = $(this).attr('data-numbermonth').split("/");
				startDate = new Date(dataNumber[2], dataNumber[1], dataNumber[0]);
				startDate.setMonth(startDate.getMonth()-1);
				var mesIni = parseInt(startDate.getMonth()) + 1;

				var endDate = new Date(startDate);	
				endDate.setMonth(endDate.getMonth()+1);
				var mesFin = parseInt(endDate.getMonth()) + 1;
				
				$('#fInicio2').val(21+'/'+mesIni+'/'+startDate.getFullYear());
				$('#fFin2').val(20+'/'+mesFin+'/'+endDate.getFullYear());
				$(this).addClass('bk_base_ao');
			}
			$('#selectYearCombo').css('display','none');	
			
		});
		
		    $('#filter_month span').css('display', 'block');
		    $('#filter_month br').css('display', '');
			$('#fFin2').val(20+'/'+mesFin+'/'+endDate.getFullYear());
			($('#filter_month span').last()).click();
		  }
		});
	   	

		$('#filter_month span').click(function(event){
			var mesConcat3;
			var mesIni;
			var mesFin;
			var dataNumber = $(event.currentTarget).attr('data-numbermonth').split("/");
			startDate = new Date(dataNumber[2], dataNumber[1], dataNumber[0]);
			startDate.setMonth(startDate.getMonth()-1);
			mesIni = parseInt(startDate.getMonth()) + 1;

			var endDate = new Date(startDate);	
			endDate.setMonth(endDate.getMonth()+1);
			mesFin = parseInt(endDate.getMonth()) + 1;
			
			$('#fInicio2').val(21+'/'+mesIni+'/'+startDate.getFullYear());
			$('#fFin2').val(20+'/'+mesFin+'/'+endDate.getFullYear());

			if($('#opt_sel1 em').html().toLowerCase() === 'factura'){
				if(mesFin.toString().length<2){
					mesConcat3 = "0"+mesFin;
				}else{
					mesConcat3 = mesFin.toString();
				}
				$('#fFin2').val(endDate.getFullYear().toString()+mesConcat3);
			}	
			//$('#selectYearCombo').css('display','block');				
			
		});

//Fin fechas movimientos
		$('#cf_calendar02').click(function(){

			var numIni = parseInt($($('#filter_date1 span').get(0)).html());
			var numFin;

			$('.table-condensed td.day.disabled').not('.old').each(function(){
				numFin = parseInt($(this).html());
				if(numFin>=numIni){
					$(this).removeClass('disabled');
				}				
			});
		});
        
        /* Filter dates (grey dates) */
		var a = new Date(jQuery.now());
		var year 	= a.getFullYear();
		var month 	= a.getMonth()+1;
		if(month.toString().length<2){
			month = "0"+month;
		}
		var day 	= a.getDate();
		if(day.toString().length<2){
			day = "0"+day;
		}
		var currentDate = day+'/'+month+'/'+year;
		$('#filter_date2 .bk_grey.col-xs-4').each(function(index,value){
			if(index===0){
				$(this).html(day.toString());
			}else if(index===1){
				$(this).html(months[a.getMonth()].substring(0, 3).toUpperCase());
			}else if(index===2){
				$(this).html(year);
			}
			

		});
	   
        /* does nothing? commented 19/02/2016 */
//		$('#cf_calendar02').attr('data-date',currentDate);
//		$($('.datepicker-days').get(1)).find('tbody').find('td.day').not('.old').not('.new').each(function(){
//			$(this).removeClass('active');
//			if($(this).html() === a.getDate().toString()){
//				$(this).addClass('active');
//			}
//		});

//		$($('.datepicker-days').get(1)).find('tbody').find('td.day.disabled').not('.old').not('.new').removeClass('disabled');

        /* sets first day active, commented 19/02/2016 */
//        $($('.datepicker-days').get(0)).find('tbody').find('td.day').not('.old').not('.new').each(function(){
//            $(this).removeClass('active');
//            if($(this).html() === '1'){
//                $(this).addClass('active');
//            }
//        });

/*Ocultar boton más movimientos*/
		if($('#payment_sortable tbody tr').length<=10){
			$('#moreData').css('display','none');
		}else if($('#payment_sortable tbody tr').length>11){
			$('#moreData').css('display','block');
		}
	}

	//Setear seleccione una profesión en el combobox de Solicitud Pass
	//if($('#request').length>0){
	//	$('#opt_sel3 em').html('Seleccione una profesión');
	//	$('#opt_sel5 em').html('Seleccione un mes');
	//	$('#opt_sel6 em').html('Seleccione un año');		
	//}

	//Function para que desaparezca el combo si está desempleado
	$('#tipoTrabajo .fc_selectd').click(function(){
		if($('#opt_sel3 em').html().toLowerCase() === 'desempleado'){
			$('#tipoTrabajoDesaparece').css('display','none');
		}else if($('#tipoTrabajoDesaparece').css('display') === 'none'){
			$('#tipoTrabajoDesaparece').css('display','block');
		}
	});
	
	//Comprobar el nif o nie del titular que sea correcto
	$('#nif').focusout(function() {
		var dni = $('#nif').val();
		
		var dniCorrect = Nif(dni);		
		var nieCorrect = Nie(dni);		

		if (dniCorrect == false) {
			if (nieCorrect == false) {				
				$('#nif').css('background-position','right 10px');
				$('#nif').css('box-shadow','0 0 2px 1px #f50000');
				return false;
			}
		}
		$('#nif').css('background-position','right -32px');
		$('#nif').css('box-shadow','');	
	});

	//Comprobar el nif o nie del co-titular que sea correcto
	$('#cotitular_nif').focusout(function() {
		var dni = $('#cotitular_nif').val();

		var dniCorrect = Nif(dni);		
		var nieCorrect = Nie(dni);		

		if (dniCorrect == false) {
			if (nieCorrect == false) {				
				$('#cotitular_nif').css('background-position','right 10px');
				$('#cotitular_nif').css('box-shadow','0 0 2px 1px #f50000');
				return false;
			}
		}
		$('#cotitular_nif').css('background-position','right -32px');
		$('#cotitular_nif').css('box-shadow','');		
		
	});
	

	//Valida el Nif
		function Nif(dni) {
		  var numero
		  var letter
		  var letra
		  var expresion_regular_dni		 
		  expresion_regular_dni = /^\d{8}[a-zA-Z]$/;
		 
		  if(expresion_regular_dni.test (dni) == true){
			 numero = dni.substr(0,dni.length-1);
			 letter = dni.substr(dni.length-1,1);
			 numero = numero % 23;
			 letra='TRWAGMYFPDXBNJZSQVHLCKET';
			 letra=letra.substring(numero,numero+1);
			if (letra!=letter.toUpperCase()) {
			   return false;
			 }else{
			   return true;
			 }
		  }else{
			 return false
		  }
		}

		function Nie(value) {
			value = value.toUpperCase();
			if (!value.match('((^[A-Z]{1}[0-9]{7}[A-Z0-9]{1}$|^[T]{1}[A-Z0-9]{8}$)|^[0-9]{8}[A-Z]{1}$)')) {
				return false;
			}
			if (/^[T]{1}/.test(value)) {
				return (value[8] === /^[T]{1}[A-Z0-9]{8}$/.test(value));
			}
			if (/^[XYZ]{1}/.test(value)) {
				return (value[8] === "TRWAGMYFPDXBNJZSQVHLCKE".charAt(value.replace('X', '0')
				.replace('Y', '1')
				.replace('Z', '2')
				.substring(0, 8) % 23));
			}

			return false;
		}


	//Para introducir la armotizacion en la pagina de forma de pagos(Solicitud Pass)
	$('#porcentaje p').click(function(){
		$('#porcentaje p').each(function(index,value){
			if($(this).attr('class')==='pointer fhover bk_base_ao'){
				$('#porcentaje input[name=amr]').val(index);
			}
		});
	});
	
	//Focus out Campo Email
$('.sp_form').focusout(function() {
	if($(".sp_form[name='mail']:invalid").length==0){
		var email1 = $(".sp_form[name='mail']").val();
		var email2 = $(".sp_form[name='mail2']").val();
		if(email1 !== email2){
			$(".sp_form[name='mail']").css('background-position','right 10px');
			$(".sp_form[name='mail2']").css('background-position','right 10px');
		}else{
			$(".sp_form[name='mail']").css('background-position','right -32px');
			$(".sp_form[name='mail2']").css('background-position','right -32px');
		}		
	}else{
		$(".sp_form[name='mail']").css('background-position','right 10px');
		$(".sp_form[name='mail2']").css('background-position','right 10px');
	}
});
//Focus out Campo cotitular-Email
$('.sp_form').focusout(function() {
	if($(".sp_form[name='cotitular_mail']:invalid").length==0){
		var email1 = $(".sp_form[name='cotitular_mail']").val();
		var email2 = $(".sp_form[name='cotitular_mail2']").val();
		if(email1 !== email2){
			$(".sp_form[name='cotitular_mail']").css('background-position','right 10px');
			$(".sp_form[name='cotitular_mail2']").css('background-position','right 10px');
		}else{
			$(".sp_form[name='cotitular_mail']").css('background-position','right -32px');
			$(".sp_form[name='cotitular_mail2']").css('background-position','right -32px');
		}		
	}else{
		$(".sp_form[name='cotitular_mail']").css('background-position','right 10px');
		$(".sp_form[name='cotitular_mail2']").css('background-position','right 10px');
	}
});
	
	$($('#porcentaje p').get(0)).click();
	
	if( $('#aplicacionPorcentaje').length>0){
		var cantidadTotalIni = parseInt($($('#aplicacionPorcentaje p').get(0)).html().replace('€',''));
		var porcentajeAplicadoIni = 0;				 
	
		porcentajeAplicadoIni = cantidadTotalIni*0.05;		
		$('#porcentaje input[name=re_fee]').val(porcentajeAplicadoIni);
	}
	//Para controlar que el campo de ingreso mensual no se introduzca ni puntos ni comas
	$('#revenue').keypress(function (event) {
		console.log(event.which);
		if (event.which != 8 && isNaN(String.fromCharCode(event.which))) {
			event.preventDefault();
		}
	});
	//Para controlar que los Datos financieros mensuales no se introduzca ni puntos ni comas
	$('#otrosIngresos').keypress(function (event) {
		console.log(event.which);
		if (event.which != 8 && isNaN(String.fromCharCode(event.which))) {
			event.preventDefault();
		}
	});	
	$('#gastosVivienda').keypress(function (event) {
		console.log(event.which);
		if (event.which != 8 && isNaN(String.fromCharCode(event.which))) {
			event.preventDefault();
		}
	});	
	$('#gastosAutomovil').keypress(function (event) {
		console.log(event.which);
		if (event.which != 8 && isNaN(String.fromCharCode(event.which))) {
			event.preventDefault();
		}
	});
	$('#gastosOtrosPrestamos').keypress(function (event) {
		console.log(event.which);
		if (event.which != 8 && isNaN(String.fromCharCode(event.which))) {
			event.preventDefault();
		}
	});	
	/*END Datos financieros mensuales*/
});
/*Función que recupera localidades por codigo postal
function recuperarLocalidad(elem){
	var el = $(elem);
        
        if (el.val().length === 5) {
				if(el.val().substring(2,el.val().length)==='000'){
					el.val(el.val().substring(0,el.val().length-1)+'1');
				}
				$.ajax({
					url: "http://api.geonames.org/postalCodeSearchJSON?postalcode="+$('#cp').val()+"&country=ES&username=tecnicosfc",
					cache: false,
					dataType: "json",
					type: "GET",                
					success: function(data) {
						if (data.postalCodes[0]!=null)
						{
							$("#localidad").val(data.postalCodes[0]["placeName"]);
							$("#localidad").attr("readonly","true");
						}
						else
						{
							$("#localidad").val("");
							$("#localidad").removeAttr("readonly");
						}
					},
					error: function(){
						$("#localidad").val("");
					}
				});
			
        }
}
*/

function validaLimitFecha(elem){
	var el = $(elem);
    var fecha = new Date();
	var anio = fecha.getFullYear();
    
        if (el.val().length === 4) {
				if(el.val()>anio){
					el.val(anio);
				}
        }
}


/*Muestra las lineas de contado y credito en solicitud de tarjeta formas de pago*/
function muestraContado(b) {
			var a = b;			
			$('#cash_limit1 .cash').each(function(index, value) {
								$(this).css('display', 'none');
								if ($(this).attr('class') === 'cash '
										+ a.id) {
									//$(this).find('p').removeClass('bk_white7');
									$(this).css('display', 'block');
									$($(this).find('#c1')).removeClass(
											'bk_white7')
									$($(this).find('#c1')).addClass(
											'bk_blue_p')
									$('#cash_limit1 .cash input').remove();
									$(this).append( '<input value="" name="re_cash_limit" id="re_cash_limit" type="hidden">');
									$(this).find('input').val($(this).find('#c1').html().replace(" €", ""));

								}
							});

			$('#porcentaje p').each(function(index,value){				
				 var cantidadTotal = parseInt($(a).html().replace('€',''));
				 var porcentajeAplicado = 0;

				 if(index === 0){
				 	//5% de porcentaje aplicado.
					porcentajeAplicado = cantidadTotal*0.05;
					porcentajeAplicado = Number(porcentajeAplicado).toFixed(2).replace(".",",").replace(/./g, function(c,i,a){return i && c !== "," && ((a.length - i) % 3 ===0) ? '.' + c : c;});
				 	$(this).html(porcentajeAplicado+'€');
				 }
				 if(index === 1){
					//10% de porcentaje aplicado.
					porcentajeAplicado = cantidadTotal*0.10;
					porcentajeAplicado = Number(porcentajeAplicado).toFixed(2).replace(".",",").replace(/./g, function(c,i,a){return i && c !== "," && ((a.length - i) % 3 ===0) ? '.' + c : c;});
				 	$(this).html(porcentajeAplicado+'€');
				 }
				 if(index === 2){
					//15% de porcentaje aplicado.
					porcentajeAplicado = cantidadTotal*0.15; 
					porcentajeAplicado = Number(porcentajeAplicado).toFixed(2).replace(".",",").replace(/./g, function(c,i,a){return i && c !== "," && ((a.length - i) % 3 ===0) ? '.' + c : c;});
				 	$(this).html(porcentajeAplicado+'€');
				 }

			});
			/*Movil*/
			$($('#porcentaje p').get(0)).trigger("touchstart");
			/*Desktop*/
			$($('#porcentaje p').get(0)).click();			
		}		

		document.addEventListener("DOMContentLoaded",
			function(event) {
			if(document.getElementById(1) !== null){
				document.getElementById(1).click();
				document.getElementById(1).className = document
						.getElementById(1).className
						+ " bk_blue_p";
			}
		});

		document.addEventListener("DOMContentLoaded", 
			function(event) {
			if(document.getElementById('c1') !== null){	
				document.getElementById('c1').click();
				document.getElementById('c1').className = document
						.getElementById('c1').className
						+ " bk_blue_p";
			}
		});

/*Función que comprueba si hemos elegido un rango mayor a 1 año*/
function comprobarFechaLimite(){
	finiString  = $('#cf_calendar01').attr('data-date').split("/");
	fechaIni = new Date(finiString[2], finiString[1], finiString[0]);
	
	fFinString  = $('#cf_calendar02').attr('data-date').split("/");
	fechaFin = new Date(fFinString[2], fFinString[1], fFinString[0]);

	var days = showDays(fechaFin,fechaIni);
	if(days>365){
		$('#out_Message').find('#message').html('No puede seleccionar un rango mayor a un año');
		$('#out_Message').modal('show');  
	}
}

function showDays(firstDate,secondDate){

    var startDay = new Date(firstDate);
    var endDay = new Date(secondDate);
    var millisecondsPerDay = 1000 * 60 * 60 * 24;

    var millisBetween = startDay.getTime() - endDay.getTime();
    var days = millisBetween / millisecondsPerDay;

     // Round down.
    return ( Math.floor(days));

}

/*Función que muestra más movimiento en la tabla de movimientos*/
function masMovimientos(){
		$('#payment_sortable tbody tr.hidden').each(function(index,value){
			if(index<10){
				$(this).removeClass('hidden');
			}			
			if($('#payment_sortable tr.hidden').size()===0){
				$('#moreData a').html('Cargar menos datos');
				$('#moreData span').removeClass('cf_ico-dropdown');
				$('#moreData span').addClass('cf_ico-dropdown-u');
				$('#moreData a').attr('onclick','menosMovimientos();');
			}
		});	
	}

/*Función que oculta movimientos*/
function menosMovimientos(){
	$('#payment_sortable tbody tr').each(function(index,value){
		if(index>=10){
			$(this).addClass('hidden');
		}
	});
	$('#moreData a').html('Cargar más datos');
	$('#moreData span').removeClass('cf_ico-dropdown-u');
	$('#moreData span').addClass('cf_ico-dropdown');
	$('#moreData a').attr('onclick','masMovimientos();');	
	
	$(document).scrollTop( $("#mainb_link").offset().top );   		
}

/////////////////////////////////////////
//////ContenidosCentrales/Login.jsp//////
/////////////////////////////////////////
/*Scripts utilizados en el CSElement Login*/

 function mostrarMensajeEmail() {
			if(typeof $('#telefonoCliente').val() !== "undefined"){
				$('#telefonoCliente').val($('#telefonoCliente').val().replace($('#telefonoCliente').val().substring(0,$('#telefonoCliente').val().length-4), "***"));
				$('.login_msg.bk_grey2.text-center').find('[name="putTelefono"]').each(function(){
					$(this).append($('#telefonoCliente').val());
				});				
			}

			if(typeof $('#emailCliente').val() !== "undefined"){
				$('#emailCliente').val($('#emailCliente').val().replace($('#emailCliente').val().substring(0,$('#emailCliente').val().indexOf("@")-4), "****"));
				$('.login_msg.bk_grey2.text-center').find('[name="putMail"]').each(function(){
					$(this).append($('#emailCliente').val());
				});				
			}

			var mensaje = $('#mailerror').val();
			if(typeof mensaje !== "undefined"){
				$('#new_user .login_msg.bk_grey2.text-center').css('display','block');
				$('#new_user form').css('display','none');
				$('#link_new_user').click();				
				$('.login_msg.bk_grey2.text-center section').each(function() {
					if ($(this).attr('id') === mensaje) {
						$(this).find('header').append()
						$(this).css('display', 'block');
						dlShowMessage(mensaje);
					} else {
						$(this).css('display', 'none');
					}
				});
			}else{
				var mensaje = $('#errorForgotPass').val();
				if(typeof mensaje !== "undefined"){
					$('#forgot_password .login_msg.bk_grey2.text-center').css('display','block');
					$('#forgot_password form').css('display','none');
					$('#link_forgot_password').click();
					$('.login_msg.bk_grey2.text-center section').each(function() {
						if ($(this).attr('id') === mensaje) {
							$(this).css('display', 'block');
							dlShowMessage(mensaje);
						} else {
							$(this).css('display', 'none');
						}
					});
				}
			}
			var message = $('#registroError').val();
			if(typeof message !== "undefined"){
				$('#new_user .login_msg.bk_grey2.text-center').css('display','block');
				$('#new_user form').css('display','none');
				$('#link_new_user').click();
				
				$('.login_msg.bk_grey2.text-center section').each(function() {
					if ($(this).attr('id') === message) {					
						$(this).find('header').append()
						$(this).css('display', 'block');
						dlShowMessage(message);
					} else {
						$(this).css('display', 'none');
					}
				});
			}
			
			var message = $('#registroErrorNoTarjeta').val();
			if(typeof message !== "undefined"){
				$('#new_user .login_msg.bk_grey2.text-center').css('display','block');
				$('#new_user form').css('display','none');
				$('#link_new_user').click();
				//ErrorRegistro();
				$('.login_msg.bk_grey2.text-center section').each(function() {
					if ($(this).attr('id') === message) {
						$(this).find('header').append()
						$(this).css('display', 'block');
						dlShowMessage(message);
					} else {
						$(this).css('display', 'none');
					}
				});
			}
			
			var message = $('#registroSinDatos').val();
			if(typeof message !== "undefined"){
				$('#new_user .login_msg.bk_grey2.text-center').css('display','block');
				$('#new_user form').css('display','none');
				$('#link_new_user').click();
				//ErrorRegistro();
				$('.login_msg.bk_grey2.text-center section').each(function() {
					if ($(this).attr('id') === message) {
						$(this).find('header').append()
						$(this).css('display', 'block');
						dlShowMessage(message);
					} else {
						$(this).css('display', 'none');
					}
				});
			}
			var message = $('#server_Down_New_User').val();
			if(typeof message !== "undefined" && message !== ""){
				$('#new_user .login_msg.bk_grey2.text-center').css('display','block');
				$('#new_user form').css('display','none');
				$('#link_new_user').click();				
				$('.login_msg.bk_grey2.text-center section').each(function() {
					if ($(this).attr('id') === message) {
						$(this).find('header').append()
						$(this).css('display', 'block');
						dlShowMessage(message);
					} else {
						$(this).css('display', 'none');
					}
				});
			}
			var message = $('#nif_nie_incorrecto').val();
			if(typeof message !== "undefined" && message !== ""){
				$('#new_user .login_msg.bk_grey2.text-center').css('display','block');
				$('#new_user form').css('display','none');
				$('#link_new_user').click();				
				$('.login_msg.bk_grey2.text-center section').each(function() {
					if ($(this).attr('id') === message) {
						$(this).find('header').append()
						$(this).css('display', 'block');
						dlShowMessage(message);
					} else {
						$(this).css('display', 'none');
					}
				});
			}
			var message = $('#cardOverturned').val();
			if(typeof message !== "undefined" && message !== ""){
				$('#new_user .login_msg.bk_grey2.text-center').css('display','block');
				$('#new_user form').css('display','none');
				$('#link_new_user').click();				
				$('.login_msg.bk_grey2.text-center section').each(function() {
					if ($(this).attr('id') === message) {
						$(this).find('header').append()
						$(this).css('display', 'block');						
					} else {
						$(this).css('display', 'none');
					}
				});
			}
			
			var message = $('#registroForgotErrorNoTarjeta').val();
			if(typeof message !== "undefined"){				
				$('#forgot_password .login_msg.bk_grey2.text-center').css('display','block');
				$('#forgot_password form').css('display','none');
				$('#link_forgot_password').click();
				$('.login_msg.bk_grey2.text-center section').each(function() {
					if ($(this).attr('id') === message) {						
						$(this).css('display', 'block');	
						dlShowMessage(message);						
					} else {
						$(this).css('display', 'none');						
					}
				});				
				$('#link_forgot_password').click();
			}			
			
			var sectionMostrar = $('#contratoIrregularForgot').val();
			if(typeof sectionMostrar !== "undefined"){				
				$('#forgot_password .login_msg.bk_grey2.text-center').css('display','block');
				$('#forgot_password form').css('display','none');
				$('#link_forgot_password').click();
				$('.login_msg.bk_grey2.text-center section').each(function() {
					if ($(this).attr('id') === sectionMostrar) {						
						$(this).css('display', 'block');	
						dlShowMessage(sectionMostrar);						
					} else {
						$(this).css('display', 'none');						
					}
				});
				$('#link_forgot_password').click();
			}			
		}

		 $(window).load(function() {
			 //Mostrar mensaje de error si viene de nuevo user.
			 mostrarMensajeEmail();
			 

			 if ($('#login[name="loginTemporalPass"]').length > 0) {
				  $('#confirm_user_pass, #new_user_pass').keyup(function () {
				    if (!($('#new_user_pass').val() === $('#confirm_user_pass').val())) {
				      $('#confirm_user_pass').css('background-position', 'right 10px');
				      $('#login .msg_login[name="passNoCoinciden"]').css('display', 'block');
				    } else {
				      $('#confirm_user_pass').css('background-position', 'right -32px');
				      $('#login .msg_login[name="passNoCoinciden"]').css('display', 'none');
				    }
				  });
				  $('#confirm_user_pass, #new_user_pass').blur(function () {
				    if (!($('#new_user_pass').val() === $('#confirm_user_pass').val())) {
				      $('#confirm_user_pass').css('background-position', 'right 10px');
				      $('#login .msg_login[name="passNoCoinciden"]').css('display', 'block');
				    } else {
				      $('#confirm_user_pass').css('background-position', 'right -32px');
				      $('#login .msg_login[name="passNoCoinciden"]').css('display', 'none');
				    }
				  });
				}
			});

/*Scripts utilizados en el CSElement Login*/


/*Script utilizado en misDatos para quitar los campos disabled cuando estamos como cotitular*/
$('#profile input').each(function(){
if($(this).attr('name') !== "nif" && $(this).attr('name') !== "nif-cotitular" && $(this).attr('name') !== "country"){
$(this).removeAttr('disabled');
}
});


  var profileFormPassed = false;

if ($('[data-form-to="validate-form"]').exists()) {

    var form 			= $('[data-form-to="validate-form"]'),
        newPassword 	= form.find('[data-name="newPassword"]'),
        confirmPassword = form.find('[data-name="confirmPassword"]');

    newPassword.on('keyup', function() {

        if (!($(this).val().length >= 8 && /[0-9]/.test($(this).val()))) {

            profileFormPassed = false;
            $(this).addClass('password-invalid-check');
        } else {
            profileFormPassed = true;
            $(this).removeClass('password-invalid-check');
        }

        if (!($(this).val() === confirmPassword.val() && confirmPassword.val().length >= 8 && /[0-9]/.test($(this).val()))) {

            confirmPassword.addClass('password-invalid-check');
        } else {
            confirmPassword.removeClass('password-invalid-check');
        }
    });

    confirmPassword.on('keyup', function() {

        if (!($(this).val().length >= 8 && $(this).val() === newPassword.val() && /[0-9]/.test($(this).val()))) {

            profileFormPassed = false;
            $(this).addClass('password-invalid-check');
        } else {
            profileFormPassed = true;
            $(this).removeClass('password-invalid-check');
        }
    });
}

if($('#login_confirm_form').exists()) {

	$('#login_confirm_form').on('submit', function(e) {
	 

		if(profileFormPassed){
			$('#login_confirm_form').submit();
		} 
		else
		{ 
			e.preventDefault();
			$('#msg_Login_confirm').html('El campo Nueva contraseña y Confirmar contraseña deben contener mínimo ocho caracteres y al menos un digito numeral, además de ser iguales.');
			$('#msg_Login_confirm').css('display','block');
		} 

		e.preventDefault();
	});
}


function validateEmailRequest() {

	var passed = false;

	if ($('[data-compare-to="confirmEmail"]').exists()) {	
		
		var email 		 = $('[data-compare-to="confirmEmail"]').val(),
			confirmEmail = $('[data-name="confirmEmail"]').val();

		if(email === confirmEmail){
			passed = true; 
		}
	}

	return passed;
}
		function createCookie(c_name, value) {
			var expires;    
			var  daysLeft= getMonthDaysLeft();
				date = new Date();
				//date.setTime(date.getTime()+(getMonthDaysLeft()*24*60*60*1000));
				date.setTime(date.getTime()+(daysLeft*24*60*60*1000));
				expires = "; expires="+date.toGMTString();
				document.cookie = c_name+"="+value+expires+"; path=/";
		}


		function manageCookie (){
		//Comprobamos que la cookie existe
			var deviceCookie = sValorCookie('deviceCookie');
			if (deviceCookie !='true' && deviceCookie== '0111'  ){
				return 'false';
			} else if (deviceCookie == 'false'){
				createCookie('deviceCookie', 0);			
			}
			return 'true';
		}

		function sValorCookie(c_name){	
			aCookies = document.cookie.split("; ");
			
			for (var iCont = 0 ; iCont < aCookies.length ; iCont ++){
				if (aCookies[iCont].indexOf(c_name + "=", 0) == 0){
					return aCookies[iCont].substring(c_name.length + 1);
				}
			}
			return 'false';
		} 
		function getMonthDaysLeft(){
			date = new Date();
			return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate() - date.getDate();
		}
		function modifyCookie (){
			var c_value = sValorCookie('deviceCookie')+1;
			if(c_value!== '01111'){createCookie('deviceCookie', c_value );}
					
		}

/*Scripts utilizados en Solicitud tarjeta*/

function nacionalidadCode(id){
		var mapPaises= {'Afganistán':'AF','Åland, Islas':'AX','Albania':'AL','Alemania':'DE','Andorra':'AD','Angola':'AO','Anguila':'AI','Antártida':'AQ','Antigua y Barbuda':'AG','Arabia Saudita':'SA','Argelia':'DZ','Argentina':'AR','Armenia':'AM','Aruba':'AW','Australia':'AU','Austria':'AT','Azerbaiyán':'AZ','Bahamas (las)':'BS','Bangladesh':'BD','Barbados':'BB','Bahrein':'BH','Bélgica':'BE','Belice':'BZ','Benin':'BJ','Bermudas':'BM','Belarús':'BY','Bolivia (Estado Plurinacional de)':'BO','Bonaire, San Eustaquio y Saba':'BQ','Bosnia y Herzegovina':'BA','Botswana':'BW','Brasil':'BR','Brunei Darussalam':'BN','Bulgaria':'BG','Burkina Faso':'BF','Burundi':'BI','Bhután':'BT','Cabo Verde':'CV','Camboya':'KH','Camerún':'CM','Canadá':'CA','Qatar':'QA','Chad':'TD','Chile':'CL','China':'CN','Chipre':'CY','Colombia':'CO','Comoras (las)':'KM','Corea (la República Popular Democrática de)':'KP','Corea (la República de)':'KR','Côte d\'Ivoire':'CI','Costa Rica':'CR','Croacia':'HR','Cuba':'CU','Curaçao':'CW','Dinamarca':'DK','Dominica':'DM','Ecuador':'EC','Egipto':'EG','El Salvador':'SV','Emiratos Árabes Unidos (los)':'AE','Eritrea':'ER','Eslovaquia':'SK','Eslovenia':'SI','España':'ES','Estados Unidos de América (los)':'US','Estonia':'EE','Etiopía':'ET','Filipinas (las)':'PH','Finlandia':'FI','Fiji':'FJ','Francia':'FR','Gabón':'GA','Gambia (la)':'GM','Georgia':'GE','Ghana':'GH','Gibraltar':'GI','Granada':'GD','Grecia':'GR','Groenlandia':'GL','Guadeloupe':'GP','Guam':'GU','Guatemala':'GT','Guayana Francesa':'GF','Guernsey':'GG','Guinea':'GN','Guinea Bissau':'GW','Guinea Ecuatorial':'GQ','Guyana':'GY','Haití':'HT','Honduras':'HN','Hong Kong':'HK','Hungría':'HU','India':'IN','Indonesia':'ID','Iraq':'IQ','Irán (República Islámica de)':'IR','Irlanda':'IE','Bouvet, Isla':'BV','Isla de Man':'IM','Navidad, Isla de':'CX','Islandia':'IS','Caimán, (las) Islas':'KY','Cocos / Keeling, (las) Islas':'CC','Cook, (las) Islas':'CK','Feroe, (las) Islas':'FO','Georgia del Sur (la) y las Islas Sandwich del Sur':'GS','Heard (Isla) e Islas McDonald':'HM','Malvinas [Falkland], (las) Islas':'FK','Marianas del Norte, (las) Islas':'MP','Marshall, (las) Islas':'MH','Pitcairn':'PN','Salomón, Islas':'SB','Turcas y Caicos, (las) Islas':'TC','Islas Ultramarinas Menores de los Estados Unidos (las)':'UM','Vírgenes británicas, Islas':'VG','Vírgenes de los Estados Unidos, Islas':'VI','Israel':'IL','Italia':'IT','Jamaica':'JM','Japón':'JP','Jersey':'JE','Jordania':'JO','Kazajstán':'KZ','Kenya':'KE','Kirguistán':'KG','Kiribati':'KI','Kuwait':'KW','Lao, (la) República Democrática Popular':'LA','Lesotho':'LS','Letonia':'LV','Líbano':'LB','Liberia':'LR','Libia':'LY','Liechtenstein':'LI','Lituania':'LT','Luxemburgo':'LU','Macao':'MO','Macedonia (la ex República Yugoslava de)':'MK','Madagascar':'MG','Malasia':'MY','Malawi':'MW','Maldivas':'MV','Malí':'ML','Malta':'MT','Marruecos':'MA','Martinique':'MQ','Mauricio':'MU','Mauritania':'MR','Mayotte':'YT','México':'MX','Micronesia (Estados Federados de)':'FM','Moldova (la República de)':'MD','Mónaco':'MC','Mongolia':'MN','Montenegro':'ME','Montserrat':'MS','Mozambique':'MZ','Myanmar':'MM','Namibia':'NA','Nauru':'NR','Nepal':'NP','Nicaragua':'NI','Níger (el)':'NE','Nigeria':'NG','Niue':'NU','Norfolk, Isla':'NF','Noruega':'NO','Nueva Caledonia':'NC','Nueva Zelandia':'NZ','Omán':'OM','Países Bajos (los)':'NL','Pakistán':'PK','Palau':'PW','Palestina, Estado de':'PS','Panamá':'PA','Papua Nueva Guinea':'PG','Paraguay':'PY','Perú':'PE','Polinesia Francesa':'PF','Polonia':'PL','Portugal':'PT','Puerto Rico':'PR','Reino Unido de Gran Bretaña e Irlanda del Norte (el)':'GB','Sahara Occidental':'EH','República Centroafricana (la)':'CF','República Checa (la)':'CZ','Congo (el)':'CG','Congo (la República Democrática del)':'CD','Dominicana, (la) República':'DO','Reunión':'RE','Rwanda':'RW','Rumania':'RO','Rusia, (la) Federación de':'RU','Samoa':'WS','Samoa Americana':'AS','Saint Barthélemy':'BL','Saint Kitts y Nevis':'KN','San Marino':'SM','Saint Martin (parte francesa)':'MF','San Pedro y Miquelón':'PM','San Vicente y las Granadinas':'VC','Santa Helena, Ascensión y Tristán de Acuña':'SH','Santa Lucía':'LC','Santo Tomé y Príncipe':'ST','Senegal':'SN','Serbia':'RS','Seychelles':'SC','Sierra leona':'SL','Singapur':'SG','Sint Maarten (parte neerlandesa)':'SX','República Árabe Siria':'SY','Somalia':'SO','Sri Lanka':'LK','Swazilandia':'SZ','Sudáfrica':'ZA','Sudán (el)':'SD','Sudán del Sur':'SS','Suecia':'SE','Suiza':'CH','Suriname':'SR','Svalbard y Jan Mayen':'SJ','Tailandia':'TH','Taiwán (Provincia de China)':'TW','Tanzania, República Unida de':'TZ','Tayikistán':'TJ','Territorio Británico del Océano Índico (el)':'IO','Tierras Australes Francesas (las)':'TF','Timor-Leste':'TL','Togo':'TG','Tokelau':'TK','Tonga':'TO','Trinidad y Tabago':'TT','Túnez':'TN','Turkmenistán':'TM','Turquía':'TR','Tuvalu':'TV','Ucrania':'UA','Uganda':'UG','Uruguay':'UY','Uzbekistán':'UZ','Vanuatu':'VU','Santa Sede (la)':'VA','Venezuela (República Bolivariana de)':'VE','Vietnam':'VN','Wallis y Futuna':'WF','Yemen':'YE','Djibouti':'DJ','Zambia':'ZM','Zimbabwe':'ZW'};
		
		var code;
			switch(id){
				case 'titular_PaisNacimiento':
					code = mapPaises[$('#birth_country').val()];
					$('#paisNacimientoCodigo').val(code);
				case 'titular_Nacionalidad':
					code = mapPaises[$('#nationality').val()];
					$('#nacionalidad').val(code);					
				case 'cotitular_Nacionalidad':
					code = mapPaises[$('#cotitular_nationality').val()];
					$('#cotitular_nacionalidad').val(code);					
				case 'cotitular_PaisNacimiento':
					code = mapPaises[$('#cotitular_birth_country').val()];
					$('#cotitular_paisNacimientoCodigo').val(code);			
			}
}
		
function provinciaCode(id){
	var mapProvincia= {'ALAVA':'01','ALBACETE':'02','ALICANTE':'03','ALMERIA':'04','AVILA':'05','BADAJOZ':'06','BALEARES':'07','BARCELONA':'08','BURGOS':'09','CACERES':'10','CADIZ':'11','CASTELLON':'12','CIUDAD REAL':'13','CORDOBA':'14','LA CORUÑA':'15','CUENCA':'16','GERONA':'17','GUADALAJARA':'18','GUIPUZCOA':'20','HUELVA':'21','HUESCA':'22','JAEN':'23','LEON':'24','LERIDA':'25','LA RIOJA':'26','LUGO':'27','MADRID':'28','MALAGA':'29','MURCIA':'30','NAVARRA':'31','ORENSE':'32','ASTURIAS':'33','PALENCIA':'34','LAS PALMAS':'35','PONTEVEDRA':'36','SALAMANCA':'37','TENERIFE':'38','CANTABRIA':'39','SEGOVIA':'40','SEVILLA':'41','SORIA':'42','TARRAGONA':'43','TERUEL':'44','TOLEDO':'45','VALENCIA':'46','VALLADOLID':'47','VIZCAYA':'48','ZAMORA':'49','ZARAGOZA':'50','CEUTA':'51','MELILLA':'52'}
	if (id==='titular_Provincia'){
		var code = mapProvincia[$('#provinciaNacimiento').val()];
		$('#codigoProvinciaNacimiento').val(code);
	}
	if (id==='cotitular_Provincia'){
		var code = mapProvincia[$('#cotitular_provinciaNacimiento').val()];
		$('#cotitular_codigoProvinciaNacimiento').val(code);		
	 
	}
}
function cotitular_detectarNIE(){	
	var nie =$('#cotitular_nif').val().toLowerCase();
	if ((nie.charAt(0)=='x')|| (nie.charAt(0)=='y') || (nie.charAt(0)=='z')){
		$('#cotitular_tipoNIE').css('display', 'block');
		$('#cotitular_tipoTResidencia').attr('required', true);			
		$('#cotitular_swNacional').val('02');
	}else{
		$('#cotitular_tipoNIE').css('display', 'none');				
		$('#cotitular_tipoTResidencia').removeAttr('required');
		$('#cotitular_swNacional').val('01');
	}
} 