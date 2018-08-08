//******************************
//******Deafault Function*******
//******************************
/*
 *	Default Function:En el caso de que no se haya establecido un pathname de un entorno determinado se carga el propio del navegador

//if (window.customPathName =='null'){
	// window.customPathName = document.location.pathname;
//}
*/
 function analyticFormat (value){	
	if (value!=null && value!='undefined'){ 
		 var str  = value.toString();	
		 str =str.replace('€','');
		 str =str.replace(".", "");
	}	
	return str;
 } 
 
 function cetelemToAnalitycFormat(value){
	if (value!=null && value!='undefined'){ 
		var str  = value.toString();
		value = str.substr(0, str.length-2) + "," + str.substr(str.length-2);
	}	
	return value;
 }
  function cMasivaToAnalitycFormat(value){
	if (value!=null && value!='undefined'){ 
		var str  = value.toString();
		value = str.substr(0, str.length-3) + "," + str.substr(str.length-3);
		if (str.substr(str.length-1) ==='0') {value = value.substr(0, value.length-1) }
	}	
	return value;
 }

var env = {
	'pro_delivery' : '/ss/sfc',
	'default' : '/cs/sfc'
	//'default' : window.location.pathname
};
var flag ="true";

window.pageDevice ={
	'layoutLogin': 'Homesfc.html',
	'layoutPG' : 'PosicionGlobal.html',
	'layoutOperation' : 'Operaciones.html',
	'newUser' : 'Homesfc.html',
	'layoutMisDatos' : 'MisDatos.html',
	'layoutPrePersonalExterno' : 'PrestamoPersonalExterno.html',
	//'LayoutSolicitudPass' : 'SolicitudPASS.html',
	'layoutPrincipal' : '',
	'layoutGenericaContenido' : 'Ventajas.html',
	'Layout_Messages_Alerts' : 'Alertas.html',
	'layoutAyuda' : 'Ayuda.html',
	'layoutChat' : 'Chat.html',
	'layoutPrePersonalExterno' : 'PrestamoPersonal.html',
	'prestamoPersonal_link': 'Operaciones.html'
	
};
window.pageDesktop ={
	'homesfc': 'Homesfc.html',
	'PosicionGlobal' : 'PosicionGlobal.html',	
	'newUser' : 'Homesfc.html',
	'MisDatos' : 'MisDatos.html',
	'layoutPrePersonalExterno' : 'PrestamoPersonalExterno.html',
	//'Solicitud' : 'SolicitudPASS.html', 
	'layoutPrincipal' : '',
	'Ventajas' : 'Ventajas.html',
	'Alertas' : 'Alertas.html',
	'Ayuda' : 'Ayuda.html',
	'Chat' : 'Chat.html',
	'prestamoPersonal_link': 'Operaciones.html',
	'/prestamoPersonal' : 'PrestamoPersonalExt.html',
	'/PrestamoPersonal' : 'PrestamoPersonalExt.html',	
	'Operaciones' : 'Operaciones.html'
	
};

var dataOp ={ 
			'url' : '',
			'seccion' : '',
			'subseccion' : '',
			'subsubseccion' : '',
			'tipo_pagina' : 'producto',
			'usuario_estado' : 'logado',	
			'usuario_id' : '',		
			'usuario_tipo' : '',	
			'usuario_fechaNacimiento' : '',	
			'usuario_formapago'	: '',
			
			'producto_id' : '',
			'producto_nombre' : '',
			'producto_categoria' : '',
			'producto_precio' : '',
			'producto_precio_ofertado' : '',
			'id_transaccion' : '',
			'producto_tipo' : 'online',

			'prestamo_destino' : '',			
			'prestamo_num_meses' : '',						
			
			'contado_limite' : '',
			'contado_disponible' : '',
			'contado_deuda' : '',
			'credito_limite' : '',				
			'credito_disponible' : '',
			'credito_deuda' : '',
			'mensualidad' : ''
			
			
};

function setPageName (client){
	for (var key in client){	
			if (location.href.indexOf(key) > -1){
				window.customPathName = customPath +'/'+ client[key]; 
			}
		}
}
function setEnvironment(environment){
//Se comprueba el entorno (Delivery o los demas) 
	customPath = (environment!= "null" && env[environment]!=undefined) ? env[environment] : env['default']; 
}
function setCustomPathName (){
	(navigator.userAgent.toLowerCase().search(/iphone|ipod|ipad|android|iemobile/) > -1 ) ? setPageName(window.pageDevice) : setPageName(window.pageDesktop);	
	if (window.customPathName === "null" || window.customPathName === undefined){
		window.customPathName = customPath;
	}
	/*else {
		if ((window.location.pathname==='/cs/Satellite' || window.location.pathname==='/ss/Satellite') || !(location.href.indexOf('d=Touch')> -1)){
			window.customPathName = customPath + '/SolicitudPASS.html';
		}
	}*/
}


//******************************
//******Deafault DataLayer******
//******************************
/*
 *	Default DataLayer:Estos son los atributos que por defecto van a tener todos los datalayers
 */
//window.customPathName = document.location.pathname;
 function getDefaultDL(data){
 
	var logado = (data.pageTitle=='PresPersonal')?'nologado':'logado';
 
	Object.keys(data).forEach(function (prop) {if (data[prop]=== 'null'){data[prop]='';}});
	if (checkStepVar()==="true"){		
		dataLayer = [{	
					'url' : window.customPathName +'/'+ data.pageTitle,
					'seccion' : data.pageTitle,
					'subseccion' : '',
					'subsubseccion' : '',
					'tipo_pagina' : 'servicio',
					'usuario_estado' : logado,	
					'usuario_id' : data.usuario_id,		
					'usuario_tipo' : data.usuario_tipo,	
					'usuario_fechaNacimiento' : data.usuario_fechaNacimiento,	
					'usuario_formapago'	: data.usuario_formapago			
				}];
	}	
}			

function getDefaultEventDL(NameEvent,eventCategory,eventAction,eventLabel){	
	dataLayer.push({
			'url' : window.customPathName +'/'+ NameEvent,
			'eventCategory' : eventCategory,
			'eventAction' : eventAction,
			'eventLabel' : eventLabel,	
			'event' : 'gaEvent'
		});
}

//**************************************
//****Identificación Cliente / Login****
//**************************************
/*
 *	Login: siempre que el usuario trate de logarse tenga éxito o no
 */
 //Evento que indica exito o error distinguiendo entre NuevoUsuario/olvideContraseña
 function processResultEvent (result) {
		$(window.dataLayer).each(function (){
			if (this.url !== undefined && (this.url.indexOf('NuevoUsuario')> -1)){
				getDefaultEventDL('NuevoUsuario/Registro','login','usuario_nuevo',result);
			} else if (this.url !== undefined && (this.url.indexOf('OlvidoContraseña')> -1)){
				getDefaultEventDL('OlvidoContraseña/CambioContraseña','login','recuperar_contraseña',result);
			}
		  });
} 
 //función que muestra las ventanas virtuales/mensajes que se muestran en el proceso de registro/logado/cambio de contraseña
 function dlShowMessage(msg){

//registra cuando se solicita recordar pass y se envía al correo 
	if(msg==="nu_msgOlvidoPassword" || msg==="msgOlvidoPassword" ){
		dataLayer.push({
			'url' : window.customPathName +'/EnvioPassEmail',
			'eventCategory' : 'login',
			'eventAction' : 'mensaje_envio_email',
			'eventLabel' : 'sendpass',	
			'event' : 'gaEventPage'
		});	
		processResultEvent ('exito');
		
		
//registra cuando se envía al correo la pass, con opcion de enviar al sms 
	}else if(msg==='nu_msgMailTel' || msg==='msgMailTel' ){
		dataLayer.push({
			'url' : window.customPathName +'/EnvioPassEmail&SMS',
			'eventCategory' : 'login',
			'eventAction' : 'mensaje_envio_email_sms',
			'eventLabel' : 'sendpass',	
			'event' : 'gaEventPage'
		});
		processResultEvent ('exito');
		
//registra cuando se envía sms con la pass 
	}else if(msg==="nu_msgSms" || msg==="msgSms"){
		dataLayer.push({
			'url' : window.customPathName +'/EnvioPassSMS',
			'eventCategory' : 'login',
			'eventAction' : 'mensaje_envio_sms',
			'eventLabel' : 'sendpass', 
			'event' : 'gaEventPage'
		});
		processResultEvent ('exito');

//registra cuando no se dispone de canales
	}else if(msg==='nu_msgError' || msg==='msgError' ){
		dataLayer.push({
			'url' : window.customPathName +'/ErrorEnvioPassATC',
			'eventCategory' : 'login',
			'eventAction' : 'mensaje_nocanal',
			'eventLabel' : 'nocanal',
			'event' : 'gaEventPage'
		});
		processResultEvent ('error');
		
	}else if(msg==='loginFail'){
		dataLayer.push({
			'url' : window.customPathName +'/Login',			
			'eventCategory' : 'login',
			'eventAction' : 'entrar',
			'eventLabel' : 'error',
			'event' : 'gaEvent'
		});		
	}else{ 
		dataLayer.push({
			'url' : window.customPathName +'/ErrorHomeSFC',
			'eventCategory' : 'login',
			'eventAction' : 'error_homesfc',
			'eventLabel' : 'error',
			'event' : 'gaEventPage'
		});
		processResultEvent ('error');
	}	
}


function dlCambioPass(){
	dataLayer.push({
		'url' : window.customPathName +'/CambioContraseña',
		'eventCategory' : 'login',
		'eventAction' : 'cambio_constraseña',
		'eventLabel' : 'cambiopass', 
		'event' : 'gaEventPage'
	});
}
function getCambioPassDL(data){	 
Object.keys(data).forEach(function (prop) {if (data[prop]=== 'null'){data[prop]='';}});
 if (checkStepVar()==="true"){	
	dataLayer = [{	
				'url' : window.customPathName +'/'+ data.pageTitle+'CambioContraseña',
				'seccion' : 'HomeSFC',
				'subseccion' : 'CambioContraseña',
				'subsubseccion' : '',
				'tipo_pagina' : 'servicio',
				'usuario_estado' : 'nologado',	
				'usuario_id' : data.usuario_id,		
				'usuario_tipo' : data.usuario_tipo,	
				'usuario_fechaNacimiento' : data.usuario_fechaNacimiento,	
				'usuario_formapago'	: data.usuario_formapago			
			}];
	getDefaultEventDL('CambioContraseña/ModificarContraseña', 'login', 'modificar_contraseña','cambiopass');
	}
}	




/*
 *	Proceso de registro
 */
function dlRegistro(){
	dataLayer.push({
		'url' : window.customPathName +'/NuevoUsuario',
		'eventCategory' : 'login',
		'eventAction' : 'nuevo_usuario',
		'eventLabel' : 'click',
		'event' : 'gaEvent'
	});
}

/*
 *	Recuperación de contraseña
 */
function dlOlvidoPass(){	
	dataLayer.push({
		'url' : window.customPathName +'/OlvidoContraseña',
		'eventCategory' : 'login',
		'eventAction' : 'recuperar_contraseña',
		'eventLabel' : 'click',	
		'event' : 'gaEvent'
	});
}
/*
 *	Error general cuando no se ha podido efectuar algun proceso en el login
 */

function errorHomeSFC(){
	dataLayer.push({
		'url' : window.customPathName +'/ErrorHomeSFC',
		'eventCategory' : 'login',
		'eventAction' : 'error_homesfc',
		'eventLabel' : 'error',
		'event' : 'gaEventPage'
	});
} 

//**************************************
//**********Posición Global*************
//**************************************
/*
 *	Evento Logado OK
 */
 
 function LoginOK(){	
	dataLayer.push({
				'url' : customPath+ '/Homesfc.html/LogadoOK',			
				'eventCategory' : 'login',
				'eventAction' : 'entrar',
				'eventLabel' : 'exito',
				'event' : 'gaEvent'
			});
}
/*
 *	Disponible
*/
 function dlConsultaDisponible(data,contadoLimite,contadoDisponible,contadoDeuda,creditoLimite,creditoDisponible,creditoDeuda,mensualidad){	
	if (checkStepVar()==="true"){
		dataLayer.push({
					'url' : window.customPathName +'/ResutaldosPG',
					'seccion' : data.pageTitle,
					'subseccion' : 'resultadosposicionglobal',
					'subsubseccion' : '',
					'tipo_pagina' : 'servicio',
					'usuario_estado' : 'logado',	
					'usuario_id' : data.usuario_id,		
					'usuario_tipo' : data.usuario_tipo,	
					'usuario_fechaNacimiento' : data.usuario_fechaNacimiento,	
					'usuario_formapago'	: data.usuario_formapago,
					
	/*
					'contado_limite' : contadoLimite,
					'contado_disponible' : contadoDisponible,
					'contado_deuda' : contadoDeuda,
					'credito_limite' : creditoLimite,				
					'credito_disponible' : creditoDisponible,
					'credito_deuda' : creditoDeuda,
					'mensualidad' : mensualidad,
	*/				
					'contado_limite' : analyticFormat (contadoLimite),	
					'contado_disponible' : analyticFormat (contadoDisponible),
					'contado_deuda' : analyticFormat (contadoDeuda),
					'credito_limite' : analyticFormat (creditoLimite),				
					'credito_disponible' : analyticFormat (creditoDisponible),
					'credito_deuda' : analyticFormat (creditoDeuda),
					'mensualidad' : analyticFormat (mensualidad),
					
					'event' : 'gaEventPage'		
			});	
	}			
}	
/*
 *	Movimientos
 */
function dlMovimientos(data, Movimientos){	
	if (checkStepVar()==="true"){
		Movimientos = (Movimientos == false || Movimientos == 'movimientos' || Movimientos == 'null') ? 'movimientos' : 'extractosMensuales'; 
		dataLayer.push({
					'url' : window.customPathName +'/Movimientos/' + Movimientos,
					'seccion' : data.pageTitle,
					'subseccion' : 'Movimientos',
					'subsubseccion' : Movimientos,
					'tipo_pagina' : 'servicio',
					'usuario_estado' : 'logado',	
					'usuario_id' : data.usuario_id,		
					'usuario_tipo' : data.usuario_tipo,	
					'usuario_fechaNacimiento' : data.usuario_fechaNacimiento,	
					'usuario_formapago'	: data.usuario_formapago,		
					'event' : 'gaEventPage'				
				});
		setStepVar("false");
	}
}	
function dlMovimientosClick(Movimientos){
	dataLayer.push({
		'url' : window.customPathName +'/Movimientos/' + Movimientos,
		'eventCategory' : data.pageTitle,
		'eventAction' : 'movimientos/'+ Movimientos,
		'eventLabel' : 'consulta tus movimientos',
		'event' : 'gaEvent'
	});
}

//**************************************
//*************Operaciones**************
//**************************************
/*
 *	DataLayer.push por defecto para las operaciones (paginas virtuales)
 */

 function getDefaultDLOP(data){ 	
 
		Object.keys(data).forEach(function (prop) {if (data[prop]=== 'null' || data[prop]=== undefined){data[prop]='';}});
		dataLayer.push({
					'url' : window.customPathName +'/'+ data.opTitle,
					'seccion' : data.pageTitle,
					'subseccion' : data.opTitle.split("/")[0],
					'subsubseccion' : data.opTitle.replace ( data.opTitle.split("/")[0]+"/", ""),
					'tipo_pagina' : 'producto',
					'usuario_estado' : 'logado',	
					'usuario_id' : data.usuario_id,		
					'usuario_tipo' : data.usuario_tipo,	
					'usuario_fechaNacimiento' : data.usuario_fechaNacimiento,	
					'usuario_formapago'	: data.usuario_formapago,
					'producto_id' : data.producto_id,
					'producto_nombre' : data.producto_nombre,
					'producto_categoria' : data.producto_categoria,
					//'producto_precio' : data.producto_precio,
					'producto_precio' : analyticFormat (data.producto_precio),
					//'producto_precio_ofertado' : data.producto_precio_ofertado,
					'producto_precio_ofertado' : analyticFormat (data.producto_precio_ofertado),
					'id_transaccion' : data.id_transaccion,	
					/*
						'contado_limite' : data.contado_limite,				
						'contado_disponible' : data.contado_disponible,
						'contado_deuda' : data.contado_deuda,
						'credito_limite' : data.credito_limite,				
						'credito_disponible' : data.credito_disponible,
						'credito_deuda' : data.credito_deuda,
						'mensualidad' : data.mensualidad,
					*/
					'contado_limite' : analyticFormat (data.contado_limite),				
					'contado_disponible' : analyticFormat (data.contado_disponible),
					'contado_deuda' : analyticFormat (data.contado_deuda),
					'credito_limite' : analyticFormat (data.credito_limite),				
					'credito_disponible' : analyticFormat (data.credito_disponible),
					'credito_deuda' : analyticFormat (data.credito_deuda),
					'mensualidad' : analyticFormat (data.mensualidad),

					
					'producto_tipo' : 'online'	
		});
}
 function getDefaultDLOPAplaza(data){ 
	
	Object.keys(data).forEach(function (prop) {if (data[prop]=== 'null' || data[prop]=== undefined){data[prop]='';}});
	if (flag==="true"){ 
		if (data.event ==='gaEventPage' ){		
			dataLayer.push({
						'url' : window.customPathName +'/'+ data.opTitle,
						'seccion' : data.pageTitle,
						'subseccion' : data.opTitle.split("/")[0],
						'subsubseccion' : data.opTitle.replace ( data.opTitle.split("/")[0]+"/", ""),
						'tipo_pagina' : 'servicio',
						'usuario_estado' : 'logado',	
						'usuario_id' : data.usuario_id,		
						'usuario_tipo' : data.usuario_tipo,	
						'usuario_fechaNacimiento' : data.usuario_fechaNacimiento,	
						'usuario_formapago'	: data.usuario_formapago,
						'producto_id' : data.producto_id,
						'producto_nombre' : data.producto_nombre,
						'producto_categoria' : data.producto_categoria,
						//'producto_precio' : data.producto_precio,
						'producto_precio' : analyticFormat (data.producto_precio),
						//'producto_precio_ofertado' : data.producto_precio_ofertado,
						'producto_precio_ofertado' : analyticFormat (data.producto_precio_ofertado),
						'id_transaccion' : data.id_transaccion,	
						'aplazamiento_importe':	data.aplazamiento_importe,
						'aplazamiento_compras' : data.aplazamiento_compras,
				
						
						'producto_tipo' : 'online',		
						'event' : data.event
			});
		} else{
			dataLayer.push({
					'url' : window.customPathName +'/'+ data.opTitle,
					'seccion' : data.pageTitle,
					'subseccion' : data.opTitle.split("/")[0],
					'subsubseccion' : data.opTitle.replace ( data.opTitle.split("/")[0]+"/", ""),
					'tipo_pagina' : 'servicio',
					'usuario_estado' : 'logado',	
					'usuario_id' : data.usuario_id,		
					'usuario_tipo' : data.usuario_tipo,	
					'usuario_fechaNacimiento' : data.usuario_fechaNacimiento,	
					'usuario_formapago'	: data.usuario_formapago,
					'producto_id' : data.producto_id,
					'producto_nombre' : data.producto_nombre,
					'producto_categoria' : data.producto_categoria,
					//'producto_precio' : data.producto_precio,
					'producto_precio' : analyticFormat (data.producto_precio),
					//'producto_precio_ofertado' : data.producto_precio_ofertado,
					'producto_precio_ofertado' : analyticFormat (data.producto_precio_ofertado),
					'id_transaccion' : data.id_transaccion,	
					'aplazamiento_importe':	data.aplazamiento_importe,
					'aplazamiento_compras' : data.aplazamiento_compras,			
					
					'producto_tipo' : 'online'		
					
			});
		
		}
		flag="false";
	}
}
	
 function getDefaultDLOPprestamos(data){ 
 
	Object.keys(data).forEach(function (prop) {if (data[prop]=== 'null' || data[prop]=== undefined){data[prop]='';}});
	
	var logado = (data.pageTitle=='PresPersonal')?'nologado':'logado';

	if (data.event ==='PasosOperaciones' ){

	dataLayer.push({
					'url' : window.customPathName +'/'+ data.opTitle,
					'seccion' : data.pageTitle,
					'subseccion' : data.opTitle.split("/")[0],
					'subsubseccion' : data.opTitle.replace ( data.opTitle.split("/")[0]+"/", ""),
					'tipo_pagina' : 'servicio',
					'usuario_estado' : logado,	
					'usuario_id' : data.usuario_id,		
					'usuario_tipo' : data.usuario_tipo,	
					'usuario_fechaNacimiento' : data.usuario_fechaNacimiento,	
					'usuario_formapago'	: data.usuario_formapago,
					'producto_id' : data.producto_id,
					'producto_nombre' : data.producto_nombre,
					'producto_categoria' : data.producto_categoria,
					//'producto_precio' : data.producto_precio,
					'producto_precio' : analyticFormat (data.producto_precio),
					//'producto_precio_ofertado' : data.producto_precio_ofertado,
					'producto_precio_ofertado' : analyticFormat(data.producto_precio_ofertado),
					'id_transaccion' : data.id_transaccion,
				
					'prestamo_destino' : data.prestamo_destino,
					'prestamo_num_meses' : data.prestamo_num_meses,
					//'prestamo_mensualidad' : data.prestamo_mensualidad,
					'prestamo_mensualidad' : analyticFormat (data.prestamo_mensualidad),
											
					 
					'producto_tipo' : 'online',
					'event' : data.event			
			});
		delete data.event;
	} else{
		dataLayer.push({
				'url' : window.customPathName +'/'+ data.opTitle,
				'seccion' : data.pageTitle,
				'subseccion' : data.opTitle.split("/")[0],
				'subsubseccion' : data.opTitle.replace ( data.opTitle.split("/")[0]+"/", ""),
				'tipo_pagina' : 'servicio',
				'usuario_estado' : logado,	
				'usuario_id' : data.usuario_id,		
				'usuario_tipo' : data.usuario_tipo,	
				'usuario_fechaNacimiento' : data.usuario_fechaNacimiento,	
				'usuario_formapago'	: data.usuario_formapago,
				'producto_id' : data.producto_id,
				'producto_nombre' : data.producto_nombre,
				'producto_categoria' : data.producto_categoria,
				//'producto_precio' : data.producto_precio,
				'producto_precio' : analyticFormat (data.producto_precio),
				//'producto_precio_ofertado' : data.producto_precio_ofertado,
				'producto_precio_ofertado' : analyticFormat (data.producto_precio_ofertado),
				'id_transaccion' : data.id_transaccion,
			
				'prestamo_destino' : data.prestamo_destino,
				'prestamo_num_meses' : data.prestamo_num_meses,
				//'prestamo_mensualidad' : data.prestamo_mensualidad,
				'prestamo_mensualidad' : analyticFormat (data.prestamo_mensualidad),
										
				
				'producto_tipo' : 'online',	
		});
		
	}
}

//**************************************
//******Prestamo Personal Externo*******
//**************************************
/*
 *	
 */
 
 
//******************************
//**DataLayer Solicitud Tarjeta*
//******************************
/*
 *	DataLayer Solicitud Tarjeta:datalayer propio para esta sección del portal
 */
//window.customPathName = document.location.pathname;
 function getDatalayerST(data){ 
	Object.keys(data).forEach(function (prop) {if (data[prop]=== 'null' || data[prop]=== undefined){data[prop]='';}});
	dataLayer = [{	
				'url' : window.customPathName +'/'+ data.pageTitle,
				'seccion' : data.pageTitle.split("/")[0],
				'subseccion' :  data.pageTitle.split("/")[1],
				'subsubseccion' :'',
				'tipo_pagina' : 'producto',
				'usuario_estado' : 'nologado',	
				'usuario_tipo' : 'titular',	
				//'usuario_fechaNacimiento' : data.usuario_fechaNacimiento,
				'producto_id' : 'YP_0007',
				'producto_nombre' : 'tarjeta',
				'producto_categoria' : 'tarjeta',
				'producto_precio' : data.producto_precio,
				'producto_precio_ofertado' : data.producto_precio_ofertado,
				'id_transaccion' : data.id_transaccion,
				//'recibir_Tarjeta' : data.recibir_tarjeta,
				'producto_tipo' : 'online'							
			}];
}			
function getEventChoice (choice){	
//Si ha selccionado Cotitular
	if (choice.incluyeCotitular==='yes'){
		getDefaultEventDL(data.pageTitle+'/IncluyeCotitular',data.pageTitle,'incluyeCotitular_Si', 'click');
	}else{
		getDefaultEventDL(data.pageTitle+'/IncluyeCotitular',data.pageTitle,'incluyeCotitular_No', 'click');
	}
//Si ha elegido Seguro 
	getDefaultEventDL(data.pageTitle+'/IncluyeSeguro',data.pageTitle,'incluyeSeguro_'+ choice.incluyeSeguro, 'click');
//Si ha elegido Recibir documentación
if (choice.recibirDocumentacion==='correo'){
		getDefaultEventDL(data.pageTitle+'/RecibirDocumentacion',data.pageTitle,'recibirDocumentacion_Si', 'click');
	}else{
		getDefaultEventDL(data.pageTitle+'/RecibirDocumentacion',data.pageTitle,'recibirDocumentacion_No', 'click');
	}
}


//******************************
//**Mis Datos*
//******************************
/*
 *	Cambio de contraseña
 */
  function dlPasswordProfile(data){
			dataLayer.push({
				'url' : window.customPathName +'/ModificarContraseña/Paso1',
				'seccion' : 'MisDatos',
				'subseccion' : 'ModificarContraseña',
				'subsubseccion' : 'Paso1',
				'tipo_pagina' : 'servicio',
				'usuario_estado' : 'logado',	
				'usuario_id' : data.usuario_id,		
				'usuario_tipo' : data.usuario_tipo,	
				'usuario_fechaNacimiento' : data.usuario_fechaNacimiento,	
				'usuario_formapago'	: data.usuario_formapago,		
				'event' : 'gaEventPage'				
			}); 
 }
 function dlPasswordConfirm(){
		dataLayer.push({
				'url' : window.customPathName +'/ModificarContraseña/Paso2/Confirmacion',
				'seccion' : 'MisDatos',
				'subseccion' : 'ModificarContraseña',
				'subsubseccion' : 'Paso2/Confirmacion',
				'tipo_pagina' : 'servicio',
				'usuario_estado' : 'logado',	
				'usuario_id' : data.usuario_id,		
				'usuario_tipo' : data.usuario_tipo,	
				'usuario_fechaNacimiento' : data.usuario_fechaNacimiento,	
				'usuario_formapago'	: data.usuario_formapago,									
			}); 
 }
 
 /*
 *	Cambio de datos del perfil Titular/Cotitular/DatosBancarios
 */
function dlChangeProfile(data){ 
		dataLayer.push({
				'url' : window.customPathName +'/ModificarDatosPersonales/Confirmacion',
				'seccion' : 'MisDatos',
				'subseccion' : 'ModificarDatosPersonales',
				'subsubseccion' : 'Confirmacion',
				'tipo_pagina' : 'servicio',
				'usuario_estado' : 'logado',	
				'usuario_id' : data.usuario_id,		
				'usuario_tipo' : data.usuario_tipo,	
				'usuario_fechaNacimiento' : data.usuario_fechaNacimiento,	
				'usuario_formapago'	: data.usuario_formapago,		
				'event' : 'gaEventPage'				
			}); 
 } 

 function dlCartDataProfile(data){
		dataLayer.push({
				'url' : window.customPathName +'/ModificarDatosBancarios/Confirmacion',
				'seccion' : 'MisDatos',
				'subseccion' : 'ModificarDatosBancarios',
				'subsubseccion' : 'Confirmacion',
				'tipo_pagina' : 'servicio',
				'usuario_estado' : 'logado',	
				'usuario_id' : data.usuario_id,		
				'usuario_tipo' : data.usuario_tipo,	
				'usuario_fechaNacimiento' : data.usuario_fechaNacimiento,	
				'usuario_formapago'	: data.usuario_formapago,		
							
			}); 
 
 }
 /*
 *	Factura Electrónica, ebilling
 */
 
 function dlServicioEbilling(data, request){
			dataLayer.push({
				'url' : window.customPathName +'/ServicioEbilling/'+request,
				'seccion' : 'MisDatos/ServicioEbilling',
				'subseccion' : request.split("/")[0],				
				'subsubseccion' : request.replace (request.split("/")[0]+"/", ""),
				'tipo_pagina' : 'servicio',
				'usuario_estado' : 'logado',	
				'usuario_id' : data.usuario_id,		
				'usuario_tipo' : data.usuario_tipo,	
				'usuario_fechaNacimiento' : data.usuario_fechaNacimiento,	
				'usuario_formapago'	: data.usuario_formapago,		
				'event' : 'gaEventPage'				
			}); 
 }
 function setStepVar(value){
	if (value=="true"){
		localStorage.setItem("stepVar", "true");
	}else if (value=="false"){
		localStorage.setItem("stepVar", "false");
	}else {
		localStorage.removeItem("stepVar");
	}	
 }
 function checkStepVar(){
	if (localStorage.getItem("stepVar")=="true"){
		return "true";
	}else if (localStorage.getItem("stepVar")=="false"){
		return "false";
	}else {
		return "true";
	}
}
function randomIdT (){
	var max = 9999999999;
	var min = new Date();	
	var min = min.getMilliseconds();
	var rnd = Math.round(Math.random() * (max - min)) + min;
	
	while (rnd.toString().length<10){
		 rnd = '0'.concat(rnd.toString());		
	}
	return rnd;
}
/*setStepVar("true");

onclick="setStepVar("true");

console.log("CheckVar: "+checkStepVar());

console.log("LocalStorage: "+localStorage.getItem("stepVar"));
setStepVar("");
console.log("LocalStorage: "+localStorage.getItem("stepVar"));
*/