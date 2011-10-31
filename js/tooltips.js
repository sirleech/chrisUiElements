$(document).ready(function()
{
   $('button.tooltip-fancy[title]').qtip({
	   style: {
		  classes: 'ui-tooltip-dark ui-tooltip-shadow',
		  tip: {
			corner: true,
			offset: 20
		  }
	   }
	});
	
	$('button.tooltip-help[title]').qtip({
	   style: {
		  classes: 'tooltip-help ui-tooltip-normal ui-tooltip-shadow ',
		  tip: {
			corner: true,
			offset: 20
		  }
	   }
	});
});
