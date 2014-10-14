$.fn.hexed = function(settings) {


	init(this);

	function init(init) {
		$(init).append('<div id="red"></div>');
		$(init).append('<div id="green"></div>');
		$(init).append('<div id="blue"></div>');
		$(init).append('<div id="swatch" class="ui-widget-content ui-corner-all"></div>');

		// code from jquery ui START
		$( "#red, #green, #blue" ).slider({
	      orientation: "horizontal",
	      range: "min",
	      max: 255,
	      value: 127,
	      slide: refreshSwatch,
	      change: refreshSwatch
	    });
	    $( "#red" ).slider( "value", 255 );
	    $( "#green" ).slider( "value", 140 );
	    $( "#blue" ).slider( "value", 60 );
	    // code from jquery ui END
	}

	// code from jquery ui START
	function hexFromRGB(r, g, b) {
    var hex = [
      r.toString( 16 ),
      g.toString( 16 ),
      b.toString( 16 )
    ];
    $.each( hex, function( nr, val ) {
      if ( val.length === 1 ) {
        hex[ nr ] = "0" + val;
      }
    });
    return hex.join( "" ).toUpperCase();
  }
  // code from jquery ui END

  // code from jquery ui START
  function refreshSwatch() {
    var red = $( "#red" ).slider( "value" ),
      green = $( "#green" ).slider( "value" ),
      blue = $( "#blue" ).slider( "value" ),
      hex = hexFromRGB( red, green, blue );
    $( "#swatch" ).css( "background-color", "#" + hex );
  }
  // code from jquery ui END

};


var settings = {
	"difficulty": 5,
	"turns": 10
};

$("#hexed").hexed(settings);