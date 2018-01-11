$(document).ready( function(){
	//$('.content').hide() //esconder el home

	$('.sectn-movie').hide();//esconder sección perfil película en sí
	$('.sectn-profile').hide();//esconder sección perfil
  $('.sectn-contacts').hide();//esconder seccion amigos
});//final funcion.ready...no tocar*/

$('#profile').click( function(){
	$('.sectn-profile').show();
	$('.sectn-pop-movies').hide();
	$('.sectn-movie').hide();
  $('.sectn-contacts').hide();
});//final función.click menu perfil nav...no tocar

$('#logo-home').click( function(){
	$('.sectn-pop-movies').show();
	$('.sectn-profile').hide();
	$('.sectn-movie').hide();
  $('.sectn-contacts').hide();
});//final función.click logo-home header ...no tocar

$('#logo-user').click( function(){
	$('.sectn-profile').show();
	$('.sectn-pop-movies').hide();
	$('.sectn-movie').hide();
  $('.sectn-contacts').hide();
});//final función.click logo-user header ...no tocar

$('.img-pop-movie').click( function(){
	$('.sectn-movie').show();
	$('.sectn-pop-movies').hide();
	$('.sectn-profile').hide();
  $('.sectn-contacts').hide();
});//final función.click pop movie ...no tocar

$('#contacts').click( function(){
  $('.sectn-contacts').show();
  $('.sectn-pop-movies').hide();
  $('.sectn-profile').hide();
  $('.sectn-movie').hide();
});//final función.click pop movie ...no tocar

//Al hacer click en el boton de registro con google:
document.getElementById('btnsignUp').addEventListener('click',GoogleSignUp, false);
// Initialize Firebase
var config = {
  apiKey: "AIzaSyCdK7laKVDh6CC4E9yNT_YEHu1wL5JO5-8",
  authDomain: "hackathon-32c71.firebaseapp.com",
  databaseURL: "https://hackathon-32c71.firebaseio.com",
  projectId: "hackathon-32c71",
  storageBucket: "hackathon-32c71.appspot.com",
  messagingSenderId: "194945642297"
};
firebase.initializeApp(config);

//función de ingreso con google
var token = 'none';
var user = 'none';
function GoogleSignUp(){
  if (!firebase.auth().currentUser){  //para saber si el usuario se ha conectado
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    firebase.auth().signInWithPopup(provider).then(function(result) {
      token = result.credential.accessToken;
      user = result.user;
      $('.init').hide() && $('.content').show();
      //sacar el nombre de usuario
      //console.log(user.displayName);
      //sacar la foto de usuario
      //console.log(user.photoURL);
    }).catch(function(error){
      var errorCode = error.code;
      var errorMessage = error.message;
      var errorEmail = error.email;
      var credencial = error.credencial;
      //console.log(errorCode);
      if(errorCode === 'auth/account-exists-with-different-credential'){
        alert('Es el mismo usuario');
      }
    });
  }else{
    firebase.auth().signOut();
  }
}
//función para usar la API de imbd
function apiCall(movie){
	$.getJSON('https://www.omdbapi.com/?apikey=3a181f1c&t=' + encodeURI(movie)).then(function(response){
    console.log(response);
    if(response.Title != undefined){
        $('.foto').html(''); //limpiamos el contenedor
        //dentro de acá debo sacar todos los objetos
        $('.foto').append(
          '<img id = "poster" src=' + response.Poster + '>' +
          '<p id="rating">' + response.imdbRating +'</p>' +
          '<button type="button" class="btn btn-fav">' + 'favoritos' + '</button>'
          )
      }
      //guardar las peliculas vistas por el usuario en firebase
      $('.btn-fav').click(function(){
          movieData.push({
            posterMovie:response.Poster,
            ratingImdb:response.imdbRating,
            //comentario:comentario,
            user:user.displayName,
            profile:user.photoURL,
            idImdb: response.imdbID
          })
      });
    })
}
//hago click en el buscador de peliculas
  $('#submit-movie').click(function(){
    var movieSearch = $('#busqueda').val();
    apiCall(movieSearch);
    //console.log(apiCall(movieSearch));
  });
//guardar en una variable la data de firebase
var movieData = firebase.database().ref('movies');

$('.btn-profile').click(function(){

});
