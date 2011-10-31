$(document).ready(function()
{
   $('button.tooltip-fancy[title]').qtip({
	   position: {
		  at: 'bottom center'
   	   },
	   style: {
		  classes: 'ui-tooltip-dark ui-tooltip-shadow',
		  tip: {
			corner: true,
			offset:0
		  }
	   }
	});
	
	$('button.tooltip-help[title]').qtip({
	   position: {
		  at: 'bottom center'
   	   },
	   style: {
		  classes: 'tooltip-help ui-tooltip-normal ui-tooltip-shadow ',
		  tip: {
			corner: true,
			offset: 20
		  }
	   }
	});
});
