$(document).ready(function() {
	$("button").click(function() {
		first_name();
		last_name();
		email();
	}); 


function email(){
var emailValue = $("#input-email").val();
if (!(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/).test(emailValue)){
$(".email").append('<span> formato de correo no valido</span>');
$("#input-email").val("");
}
}

function first_name(){
    var nameValue = $("#first_name").val();
			if (!(/^[A-Z][a-z]/).test(nameValue)){
			$(".first_name").append('<span>Nombre inválido.</span>');
			$("#first_name").val("");
			}
	}

function last_name(){
    var nameValue = $("#last_name").val();
			if (!(/^[A-Z][a-z]/).test(nameValue)){
			$(".last_name").append('<span>apellido inválido.</span>');
			}
	}
});
