$.fn.hexed = function(settings) {

	init(this);

	function init(init) {
		var timer = 0;
		$(init).append('<div class="colorSlider"><div id="red"></div><input type="text" id="redHexNum" /></div>');
		$(init).append('<div class="colorSlider"><div id="green"></div><input type="text" id="greenHexNum" /></div>');
		$(init).append('<div class="colorSlider"><div id="blue"></div><input type="text" id="blueHexNum" /></div>');
		$(init).append('<div id="swatch" class="ui-widget-content ui-corner-all"></div>');
		$(init).append('<div class="info">Score: <span id="score">0</span></div>');
		$(init).append('<div class="info">Time: <span id="time">0</span></div>');

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

  
  function refreshSwatch() {
  	// code from jquery ui START
    var red = $( "#red" ).slider( "value" ),
      green = $( "#green" ).slider( "value" ),
      blue = $( "#blue" ).slider( "value" ),
      hex = hexFromRGB( red, green, blue );
    $( "#swatch" ).css( "background-color", "#" + hex );
    // code from jquery ui END

    $("#redHexNum").val(red);
    $("#greenHexNum").val(green);
    $("#blueHexNum").val(blue);
  }

  function startTimer() {
  	timer = setInterval(function(){
  		incrementTimer();
  	}, 100);
  }

  function incrementTimer(){
  	$("#time").html("")
  }
  

  // When the player manually enters a hex number, the program will update the slider
  $("#redHexNum").change(function(){
  	$( "#red" ).slider( "value", $(this).val() );
  });

  $("#greenHexNum").change(function(){
  	$( "#green" ).slider( "value", $(this).val() );
  });

  $("#blueHexNum").change(function(){
  	$( "#blue" ).slider( "value", $(this).val() );
  });

};


var settings = {
	"difficulty": 5,
	"turns": 10
};

$("#hexed").hexed(settings);