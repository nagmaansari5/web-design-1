
var i = 0; 			// Start Point
var time = 3000;	// Time Between Switch
var images3 = [];

images3[0] = "Projects/4th/sc.png";
images3[1] = "Projects/5th lab/sc.png";
images3[2] = "Projects/5th lab/sc3.png";
images3[3] = "Projects/5th lab/sc4.png";
images3[4] = "Projects/5th lab/sc5.png";
images3[5] = "Projects/7th/sc.png";
images3[6] = "Projects/signupform/sc.png";
images3[7] = "Projects/1st lab/sc1png.png";
images3[8] = "Projects/1st lab/sc2.png";
images3[9] = "Projects/2nd assignment/sc.png";
images3[10] = "Projects/2nd assignment/sc2.png";
images3[11] = "Projects/3rd lab/sc7.png";
images3[12] = "Projects/3rd lab/sc.png";
images3[13] = "Projects/3rd lab/sc2.png";
images3[14] = "Projects/3rd lab/sc3.png";
images3[15] = "Projects/3rd lab/sc4.png";
images3[16] = "Projects/3rd lab/sc7.png";

 
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
window.onload= changeImg3;