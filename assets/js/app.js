$(document).ready( function(){
	$('.sectn-movie').hide();//esconder sección perfil película en sí
	$('.sectn-profile').hide();//esconder sección perfil
});//final funcion.ready...no tocar*/

$('#profile').click( function(){
	$('.sectn-profile').show();
	$('.sectn-pop-movies').hide();
	$('.sectn-movie').hide();
});//final función.click menu perfil nav...no tocar

$('#logo-home').click( function(){
	$('.sectn-pop-movies').show();
	$('.sectn-profile').hide();
	$('.sectn-movie').hide();
});//final función.click logo-home header ...no tocar

$('#logo-user').click( function(){
	$('.sectn-profile').show();
	$('.sectn-pop-movies').hide();
	$('.sectn-movie').hide();
});//final función.click logo-user header ...no tocar

$('.img-pop-movie').click( function(){
	$('.sectn-movie ').show();
	$('.sectn-pop-movies').hide();
	$('.sectn-profile').hide();
});//final función.click menu ...no tocar