//set character statistics
var stats = {
	Bilbo:{"BilboHP": 125, "BilboAP": 12, "BilboCAP": 12},
	Gollum:{"GollumHP": 150, "GollumAP": 15, "GollumCAP": 15},
	Smaug:{"SmaugHP": 200, "SmaugAP": 25, "SmaugCAP": 25},
	Trolls:{"TrollsHP": 100, "TrollsAP": 10, "TrollsCAP": 10}
};

$(document).ready(function() {

//display initial hit points
$("#Bilbo").html("HP: " + stats.Bilbo.BilboHP);
$("#Gollum").html("HP: " + stats.Gollum.GollumHP);
$("#Smaug").html("HP: " + stats.Smaug.SmaugHP);
$("#Trolls").html("HP: " + stats.Trolls.TrollsHP);

//select my character
//click character option from first row
$(document).on("click", ".unchosen",function(){
	//add class to control player char. functions & look
	$(this).addClass("myCharacter");
	//remove unneeded class
	$(".myCharacter").removeClass("unchosen");
	//move to player char. row
	$(".myCharacter").insertAfter(".myChar");
	//add class to control enemy char. function & look
	$(".unchosen").addClass("enemy");
	//remove unneeded class
	$(".enemy").removeClass("unchosen");
	//move to enemy char. row
	$(".enemy").insertAfter(".remEnmy");
});

//select your defender
//click defender option from enemy row
$(document).on("click",".enemy",function(){
	//add class to control defender char. functions & look
	$(this).addClass("defender");
	//remove unneeded class
	$(".defender").removeClass("enemy");
	//move to defender char. row
	$(".defender").insertAfter(".curDef");
});

});


//use while loop instead of for loop?  or maybe .each?

//$(variables).empty

//if (iscalculated) return
//if boolean var is true, end program