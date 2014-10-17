$.fn.hexed = function(settings) {

	init(this);

	function init(init) {
		var timer = 0;
		$(init).append('<div class="colorSlider"><div id="red"></div><input type="text" id="redHexNum" /></div>');
		$(init).append('<div class="colorSlider"><div id="green"></div><input type="text" id="greenHexNum" /></div>');
		$(init).append('<div class="colorSlider"><div id="blue"></div><input type="text" id="blueHexNum" /></div>');
    $(init).append('<div class="title"> Your Color</div>');
		$(init).append('<div id="swatch" class="ui-widget-content ui-corner-all"></div>');
    $(init).append('<div class="title"> Answer</div>');
    $(init).append('<div id="answer" class="ui-widget-content ui-corner-all"></div>');
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
    
    refreshAnswer();
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

  function refreshAnswer() {
    $( "#answer" ).css( "background-color", getAnswer());
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

  //DIFFICULTY STUFF
  //function to return random number
  function randomIntInc (low, high) {
      return Math.floor(Math.random() * (high - low + 1) + low);
  }

  //convert binary string to hex string
  function convertBinaryToHexadecimal(binaryString)
  {
      var output = '';

      // For every 4 bits in the binary string
      for (i=0; i < binaryString.length; i+=4)
      {
          // Grab a chunk of 4 bits
          var bytes = binaryString.substr(i, 4);

          // Convert to decimal then hexadecimal
          var decimal = parseInt(bytes, 2);
          var hex = decimal.toString(16);

          // Uppercase all the letters and append to output
          output += hex.toUpperCase();
      }

      return output;
  }

  function getAnswer() 
  {
    //If difficulty is 1, each color will have a string of 8 bits that are identical, giving them values of either 00 or FF
    if (settings.difficulty == 1) {
      var first = randomIntInc(0,1).toString(2);
      var color1 = Array(9).join(first);
      var color1hex = convertBinaryToHexadecimal(color1);

      var second = randomIntInc(0,1).toString(2);
      var color2 = Array(9).join(second);
      var color2hex = convertBinaryToHexadecimal(color2);

      var third = randomIntInc(0,1).toString(2);
      var color3 = Array(9).join(third);
      var color3hex = convertBinaryToHexadecimal(color3);

      var colorString = "#" + color1hex + color2hex + color3hex;
    }

    //If Dificulty is 2, each color will have 2 randomized 4 bit strings, allowing them to be 00, 0F, F0, or FF
    else if (settings.difficulty == 2) {
      var color1 = "";
      for  (i=0;i<2;i++) {
        var num = randomIntInc(0,1).toString(2);
        var num1 = Array(5).join(num1);
        color1 += num1;
      }
      var color1hex = convertBinaryToHexadecimal(color1);

      var color2 = "";
      for (i=0;i<2;i++) {
        var num = randomIntInc(0,1).toString(2);
        var num1 = Array(5).join(num1);
        color2 += num1;
      }
      var color2hex = convertBinaryToHexadecimal(color2);

      var color3 = "";
      for (i=0;i<2;i++) {
        var num = randomIntInc(0,1).toString(2);
        var num1 = Array(5).join(num1);
        color3 += num1;
      }
      var color3hex = convertBinaryToHexadecimal(color3);

      var colorString = "#" + color1hex + color2hex + color3hex;
    }
    //At difficulty 3, 4 sets of bitstrings of size two are randomized for each color
    else if (settings.difficulty == 3) {
      var color1 = "";
      for (i=0;i<4;i++) {
        var num = randomIntInc(0,1).toString(2);
        var num1 = Array(3).join(num1);
        color1 += num1;
      }
      var color1hex = convertBinaryToHexadecimal(color1);

      var color2 = "";
      for (i=0;i<4;i++) {
        var num = randomIntInc(0,1).toString(2);
        var num1 = Array(3).join(num1);
        color2 += num1;
      }
      var color2hex = convertBinaryToHexadecimal(color2);

      var color3 = "";
      for (i=0;i<4;i++) {
        var num = randomIntInc(0,1).toString(2);
        var num1 = Array(3).join(num1);
        color3 += num1;
      }
      var color3hex = convertBinaryToHexadecimal(color3);

      var colorString = "#" + color1hex + color2hex + color3hex;
    }
    //At Difficulty 4, all 8 bits are randomized for each color
    else if (settings.difficulty == 4) {
      var color1 = "";
      for (i=0;i<8;i++) {
        var num = randomIntInc(0,1).toString(2);
        color1 += num;
      }
      var color1hex = convertBinaryToHexadecimal(color1);

      var color2 = "";
      for (i=0;i<8;i++) {
        var num = randomIntInc(0,1).toString(2);
        color2 += num;
      }
      var color2hex = convertBinaryToHexadecimal(color2);

      var color3 = "";
      for (i=0;i<8;i++) {
        var num = randomIntInc(0,1).toString(2);
        color3 += num;
      }
      var color3hex = convertBinaryToHexadecimal(color3);

      var colorString = "#" + color1hex + color2hex + color3hex;
    }
  return colorString
  }

};


var settings = {
	"difficulty": 4,
	"turns": 10
};

$("#hexed").hexed(settings);



