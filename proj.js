
var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 3000;	// Time Between Switch
var images2 = [];	// Images Array
var images3 = [];

// Image List
images2[0] = "Projects/1st lab/sc1png.png";
images2[1] = "Projects/1st lab/sc2.png";
// Image List
images[0] = "Projects/2nd assignment/sc.png";
images[1] = "Projects/2nd assignment/sc2.png";

images3[0] = "Projects/3rd lab/sc.png";
images3[1] = "Projects/3rd lab/sc2.png";
images3[2] = "Projects/3rd lab/sc3.png";
images3[3] = "Projects/3rd lab/sc4.png";
images3[4] = "Projects/3rd lab/sc5.png";
images3[5] = "Projects/3rd lab/sc6.png";
images3[6] = "Projects/3rd lab/sc7.png";
 
// Change Image
function changeImg2(){
	document.slide2.src = images[i];

	// Check If Index Is Under Max
	if(i < images2.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg2()", time);
}


// Change Image
function changeImg(){
	document.slide.src = images[i];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", time);
}


// Change Image
function changeImg3(){
	document.slide3.src = images3[i];

	// Check If Index Is Under Max
	if(i < images3.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg3()", time);
}

// Run function when page loads
window.onload=changeImg, changeImg2, changeImg3;

