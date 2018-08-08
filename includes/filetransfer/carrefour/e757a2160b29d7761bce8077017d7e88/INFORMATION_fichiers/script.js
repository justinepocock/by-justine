// Copyright Oberthur Technologies
"use strict";
var expURL, expTime;
(function($, expURL, expTime) {
	$.fn.extend( {
		register : function(name) {
			this.data("name", name);
			this.addClass("field_to_verify");
			return this;
		},
		is_empty : function() {
			var flag = false;
			this.each(function() {
				if ($(this).data("empty")) {
					flag = flag || $(this).data("empty").call($(this));
				}
			});
			return flag;
		},
		is_invalid : function() {
			var flag = false;
			this.each(function() {
				if ($(this).data("invalid")) {
					flag = flag || $(this).data("invalid").call($(this));
				}
			});
			return flag;
		},
		update_state : function(empty_as_error) {
			var state = false;
			this.each(function() {
				if ($(this).is_invalid()) {
					$(this).change_state(true);
				} else if ($(this).is_empty()) {
					if (empty_as_error) {
						$(this).change_state(true);
					}
				} else {
					$(this).change_state();
				}
				state = state || $(this).is(".erreur")
						|| $(this).parents(".erreur").length;
			});
			return state;
		},
		change_state : function(error) {
			var target;
			if (this.is("div.field")) {
				target = this;
			} else {
				target = this.parents("div.field");
			}
			if (error) {
				target.addClass("erreur");
			} else {
				target.removeClass("erreur");
			}
		}
	});
	$.extend( {
		registered_fields : function() {
			return $(".field_to_verify");
		},
		error_fields : function() {
			var names = [];
			$(".field_to_verify").filter(
					function() {
						return $(this).is("div.field.erreur")
								|| $(this).parents("div.field.erreur").length;
					}).each(function() {
				names.push($(this).data("name"));
			});
			return names;
		}
	});
	var nameExp = new RegExp("^[-a-zA-Z À�?ÂÃÄÅàáâãäåÒÓÔÕÖØòóôõöøÈÉÊËèéêëÌ�?Î�?ìíîïÙÚÛÜùúûüÿÑñÇçÃ€Ã�Ã‚ÃƒÃ„Ã…Ã Ã¡Ã¢Ã£Ã¤Ã¥ÃˆÃ‰ÃŠÃ‹Ã©Ã¨ÃªÃ«._/~]*$", ""),
	//var nameExp = new RegExp("^[-a-zA-Z À�?ÂÃÄÅàáâãäåÈÉÊËéèêë._/~]*$", ""), 
	//mobilePhoneExp = new RegExp("^09([- _.]?[0-9]{2}){4}$"), 
	mobilePhoneExp = new RegExp("^[67]([- _.]?[0-9]{8})$"), 
	fixedPhoneExp = new RegExp("^0[123459]([- _.]?[0-9]{2}){4}$"), butNumericExp = new RegExp(
			"[^0-9]"), 
			//customerNumberExp = new RegExp("[^0-9]"),
			customerNumberExp = new RegExp("[a-zA-z0-9]*"),
			//customerNumberExp = new RegExp("[a-zA-z0-9]{4}$"),
			//customerNumberExp = new RegExp("^0[56]([- _.]?[0-9]{2}){7}$"),
			minYear = 1850, maxYear = 2100, minAnswerLength = 6, maxAnswerLength = 50;
	if (expURL !== undefined) {
		setTimeout(function() {
			location.assign(expURL);
		}, expTime);
	}
	$(document)
			.ready(
					function() {
						$("#lastName").register("Apellidos").data("regexp", nameExp);
						$("#firstName").register("Nombre").data("regexp", nameExp);
						//$("#phoneNumber.mobile, #phone.mobile").register("Número de móvil").data("regexp",mobilePhoneExp);
						$("#phoneNumber").register("Número de móvil").data("regexp",mobilePhoneExp);
						$("#phoneNumber.fixed, #phone.fixed").register(
								"numéro de fixe").data("regexp", fixedPhoneExp);
						$("#day").parents("div.field").register(
								"Fecha de nacimiento");
						$("#question").register("Su pregunta personal");
						$("#response").register("Respuesta");
						//$("input[name='option-paiement']").parents("div.field").register("Opción de pago");
						$("#otp").register("contraseña");
						$("#day").data("init_val", "JJ");
						$("#month").data("init_val", "MM");
						$("#year").data("init_val", "AAAA");
						$("#customerNumber").register("Número de DNI").data("regexp", customerNumberExp);
						$("#lastName, #firstName, #otp, #response, #phone, #phoneNumber, #day, #month, #year, #customerNumber")
								.data(
										"empty",
										function() {
											var value = $(this).val();
											if (this.data("init_val")) {
												return value == ""
														|| value === this
																.data("init_val");
											} else {
												return value == "";
											}
										});
						$("#day").parents("div.field").data("empty", function() {
							return $("#day, #month, #year").is_empty();
						});
//						$("input[name='option-paiement']").parents("div.field")
//								.data("empty", function() {
//									return !this.find(":checked").length;
//								});
						$("#question").data("empty", function() {
							return $("option:first:selected", this).length;
						});
						$("#lastName, #firstName, #phone, #phoneNumber, #customerNumber").data(
								"invalid",
								function() {
									if (this.is_empty()) {
										return false;
									}
									return !this.data("regexp")
											.test(this.val());
								});
						$("#response")
								.data(
										"invalid",
										function() {
											if (this.is_empty()) {
												return false;
											}
											return (this.val().length < minAnswerLength || this
													.val().length > maxAnswerLength);
										});
						$("#day").data(
								"invalid",
								function() {
									if (this.is_empty()) {
										return false;
									}
									var val = this.val(), num_val = parseInt(
											val, 10);
									return butNumericExp.test(val)
											|| num_val < 1 || num_val > 31;
								});
						$("#month").data(
								"invalid",
								function() {
									if (this.is_empty()) {
										return false;
									}
									var val = this.val(), num_val = parseInt(
											val, 10);
									return butNumericExp.test(val)
											|| num_val < 1 || num_val > 12;
								});
						$("#year").data(
								"invalid",
								function() {
									if (this.is_empty()) {
										return false;
									}
									var val = this.val(), num_val = parseInt(
											val, 10);
									return butNumericExp.test(val)
											|| num_val < minYear
											|| num_val > maxYear;
								});
						$("#day")
								.parents("div.field")
								.data(
										"invalid",
										function() {
											if ($("#day, #month, #year").is_invalid()) {
												return true;
											}
											if (this.is_empty()) {
												return false;
											}
											var day = parseInt($("#day").val(),
													10), month = parseInt($("#month")
													.val(), 10) - 1, year = parseInt(
													$("#year").val(), 10), date;
											date = new Date(year, month, day);
											return date.getDate() !== day
													|| date.getMonth() !== month
													|| date.getFullYear() !== year;
										});
						$.registered_fields().change(function() {
							$(this).update_state();
						});
						$("form").submit(
								function(event) {
									if ($.registered_fields()
											.update_state(true)) {
										event.preventDefault();
										var err = $.error_fields();
										if (err.length === 1) {
											$("#erreur").text(
													"Por favor, verifique el campo "
															+ err[0] + ".");
										} else {
											$("#erreur").text(
													"Por favor, verifique los campos "
															+ err.slice(0, -1)
																	.join(", ")
															+ " et "
															+ err.slice(-1)
															+ ".");
										}
									}
								});
						$("#day, #month, #year").focus(function() {
							if ($(this).val() === $(this).data("init_val")) {
								$(this).val("");
							}
						});
						$("#day, #month, #year")
								.keypress(
										function(e) {
											if (!((e.which >= 48 && e.which <= 57)
													|| e.which === 0
													|| e.which === 8 || e.which === 9)) {
												e.preventDefault();
											}
											if (e.which >= 48
													&& e.which <= 57
													&& $(this).val().length >= 1) {
												$(this).data("allowfocusout",
														true);
											} else {
												$(this).data("allowfocusout",
														false);
											}
										});
						$("#day").keyup(
								function() {
									if ($(this).data("allowfocusout")
											&& $(this).val().length >= 2
											&& (!$(this).parents("div.field")
													.update_state() || !$(this)
													.is_invalid())) {
										$("#month").focus();
									}
									$(this).data("allowfocusout", false);
								});
						$("#month")
								.keyup(
										function() {
											if ($(this).data("allowfocusout")
													&& $(this).val().length >= 2
													&& (!$(this).parents(
															"div.field")
															.update_state() || !$(
															this).is_invalid())) {
												$("#year")
														.one(
																'blur',
																function() {
																	$(this)
																			.parents(
																					"div.field")
																			.update_state();
																}).focus();
											}
											$(this)
													.data("allowfocusout",
															false);
										});
						$("#other_phone_link")
								.click(
										function(event) {
											var fields = [];
											$(
													"#lastName, #firstName, #day, #month, #year, #phoneNumber, #response, #phone, #customerNumber")
													.each(
															function() {
																fields
																		.push($(
																				this)
																				.attr(
																						"id")
																				+ "="
																				+ encodeURIComponent($(
																						this)
																						.val()));
															});
											event.preventDefault();
											location.assign($(this)
													.attr("href")
													+ "&" + fields.join("&"));
										});
						$("#not_received_link").hide();
					});
}(jQuery, expURL, expTime));

// input fields' digit only limitation
function isDigitsOnly(evt) {
	var charCode = evt.which || evt.keyCode;
	
	if (charCode >= 48 && charCode <= 57) { // digits
		return true;
	}
	
	if (charCode == 8 || charCode == 46 || charCode == 37 || charCode == 39) { // backspace, delete, left, right arrows
		return true;
	}
	
	return false;
}