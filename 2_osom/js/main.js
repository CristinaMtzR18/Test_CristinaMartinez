
$(document).ready(function(){
    //Para mi select
	$("select").material_select();
	//Para mi formulario
  	Materialize.updateTextFields();

  	//Menu
  	$('.button-collapse').sideNav({
      menuWidth: 300,
      menuHeight: 30,
      edge: 'right', 
      closeOnClick: true, 
      draggable: true 
    }
  );

    //Modal
    $('.modal').modal();

    //carrusel
    $('.carousel').carousel();

});