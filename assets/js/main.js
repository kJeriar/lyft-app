$(document).ready(function() {
	$("button").click(function() {
		first_name();
		last_name();
		email();
	}); 


function email(){
var emailValue = $("#input-email").val();
if (!(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/).test(emailValue)){
$(".email-container").append('<span> formato de correo no valido</span>');
$("#input-email").val("");
}
}

function first_name(){
    var nameValue = $("#name").val();
			if (!(/^[A-Z][a-z]/).test(nameValue)){
			$(".name-container").append('<span>Nombre inválido.</span>');
			$("#name").val("");
			}
	}

function last_name(){
    var nameValue = $("#name").val();
			if (!(/^[A-Z][a-z]/).test(nameValue)){
			$(".name-container").append('<span>apellido inválido.</span>');
			}
	}
});
