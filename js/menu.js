$(document).ready(function(){
	var altura = $('.menu').offset().top;
	var ancho = $('nav').width();
	 // alert("Altura:"+altura);
	 
	
    /********************************/
   
    	$(window).on('scroll', function(){
			if ( $(window).scrollTop() > altura){
				$('.menu').addClass('menu-fixed');
				
			} else {
				$('.menu').removeClass('menu-fixed');

			}
		});
		
   /********************************/
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura){
			$('.menu_bar').addClass('menu-fixed-m');
			if(ancho<750){$('.menu').hide('slow')}
			
		} else {
			$('.menu_bar').removeClass('menu-fixed-m');
		    if(ancho<750){$('.menu').show('slow')}
		}
	});
   /********************************/
  
});

$(document).ready(main);//se ejecuta cuando este cargada la pantalla
//declaramos la  varible contados
 var cont = 1;
 //funcion bton contacto

function main(){
	$('.menu_bar').click(function(){
         
		if(cont == 1){
		  $('.container_blog').hide('slow');
		   
          $('nav').animate({
              left:'0'

          });
          cont = 0;
	} 
    else{
			$('.container_blog').show('slow');
			cont = 1;

             $('nav').animate({
              left:'100%'
              	
          });
		}  
	});
   
};





