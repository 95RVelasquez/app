$(document).ready(main_inmbiliaria);
	var control=0;
function main_inmbiliaria(){
	$('#contact_m').click(function() {
    	/* Act on the event */
    	if (control==0) {
    		$('.form_contactar').show('slow');
    		$('.inicio').hide('slow');
    		$('.serv').hide('slow');
    		$('.nos').hide('slow');
    		control=0;
    	}
    });

    $('#in_m').click(function() {
    	/* Act on the event */
    	if (control==0) {
          $('.form_contactar').hide('slow');
    	  $('.inicio').show('slow');
    	  $('.serv').hide('slow');
    	  $('.nos').hide('slow');
    	  control=0;
    	}
    	
    });

    $('#serv_m').click(function() {
    	/* Act on the event */
    	if(control==0)
    	{
    		$('.form_contactar').hide('slow');
    		$('.inicio').hide('slow');
    		$('.serv').show('slow');
    		$('.nos').hide('slow');
    		control=0;
    	}
    });
    $('#nos_m').click(function() {
    	/* Act on the event */
    	if(control==0)
    	{
    		$('.form_contactar').hide('slow');
    		$('.inicio').hide('slow');
    		$('.serv').hide('slow');
    		$('.nos').show('slow');
    		control=0;
    	}
    });
}