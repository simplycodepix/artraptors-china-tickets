$(document).ready(function(){

  "use strict";

  /* additional options toggle */
  
  additionalOptionsToggle();
  component_select();
  menuToggle();
  

});


function menuToggle(){

  $('.sidebar-toogle').on("click", function () {
    $('html').toggleClass('nav_opened');
  });

}


function additionalOptionsToggle(){

  $('button.additional').on('click', function(e){
    e.stopPropagation();
  });

  $('.additional_btn').on("click", function () {
    
    $(this).toggleClass('opened');

    $('.c-search_form__additional').slideToggle(300);


  });

}

function component_select(){
  
  $('.c-search_form__select').on("click", function () {
    
    $('.c-select_box').slideToggle(300);

  });

}


