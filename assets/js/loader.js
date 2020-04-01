
// set delay 10s
var delay = 10000;

function loader(){
	$('.header').hide();
	$('#loading').modal('show');
	setTimeout(function(){
		$('#loading').modal('hide');
		$('.header').show();
	},delay);
	
};