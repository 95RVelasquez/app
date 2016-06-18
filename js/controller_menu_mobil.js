
$(document).ready(function()
 {
	// var ancho = $('nav').width();
 // 	// alert('Ancho:'+ancho);
 // 	if (ancho<1000) {
 // 		$( '.menu').hover(
	// 	  function() {
		  
	// 	 }, function() {
	// 	   $('nav').animate({
	// 	              left:'100%'
	// 	          });

	// 	  }
 //     );
 // 	}
 var ancho = $('nav').width();
 if(ancho<750){
     $('#m_i').click(function() {
      /* Act on the event */
      var contador=1;
      if(contador==1)
      {
        $('nav').animate({
                  left:'100%'
              });
        $('.container_blog').show('slow');
        contador=0;
      }
     });


     $('#m_p').click(function() {
     	/* Act on the event */
     	var contador=1;
     	if(contador==1)
     	{
     		$('nav').animate({
                  left:'100%'
              });
     	}
     });

     $('#m_s').click(function() {
     	/* Act on the event */
     	var contador=1;
     	if(contador==1)
     	{
     		$('nav').animate({
                  left:'100%'
              });
     	}
     });


      $('#m_q').click(function() {
     	/* Act on the event */
     	var contador=1;
     	if(contador==1)
     	{
     		$('nav').animate({
                  left:'100%'
              });
     	}
     });

        $('#m_c').click(function() {
     	/* Act on the event */
     	var contador=1;
     	if(contador==1)
     	{
     		$('nav').animate({
                  left:'100%'
              });
     	}
     });
 }
});
 
 
 	
