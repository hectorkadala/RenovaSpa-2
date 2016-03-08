$(document).ready(function(){


	//funcion para entrar a la cuenta 
	$("body").on("click","#cuenta",function(){
		$.ajax({
			url:"php/login.php",
			success:function(rspta){
				$(".modal").html(rspta).modal('show');
				openVentana();
			}
		});
	});
	
	//funcion para enviar formulario
	$("body").on("click","#entrar",function(){
		alert("Hola de nuevo");
		var dtsFormLogin = $("#login").serialize();
			$.ajax({
				data:dtsFormLogin,
				type:'POST',
				url:"php/conexionLogin.php",
				cache:false,
				success: function(rspta){
					/*if (rspta="Usuario y/o contraseña incorrectos") {
						$("#respLogin").slideDown("slow");
						$("#respLogin").html(function(){
							$("#respLogin").html(rspta).css({"color":"rgba(255,255,255,1)", "float":"left", "width":"100%", "text-align": "center", "margin-top":"15px"});
							setTimeout(ocultarLogin,3000);
						});

						function ocultarLogin(){
							$("#respLogin").slideUp("slow");
						}
					}
					else{*/
						window.location.href="index.php";
					//}
				}

			});
	});
});

function openVentana(){	
	$(".modal , .ventana").fadeIn();
}
function closeVentana(){
	$(".ventana , .modal").slideUp("fast");
}
//ocultar el modal al presionar la tecla ESC
$(document).keyup(function(event){
    if(event.which==27)
    {
        $(".ventana , .modal").slideUp();
    }
});
