//set character statistics
var BilboHP = 125
var BilboAP = 12
var BilboCAP = 12
var GollumHP = 150
var GollumAP = 15
var GollumCAP = 15
var SmaugHP = 200
var SmaugAP = 25
var SmaugCAP = 25
var TrollsHP = 100
var TrollsAP = 10
var TrollsCAP = 10

//set initial hit points
$("#Bilbo").html("HP: " + BilboHP);
$("#Gollum").html("HP: " + GollumHP);
$("#Smaug").html("HP: " + SmaugHP);
$("#Trolls").html("HP: " + TrollsHP);

//select my character
$(".unchosen").click(function(){
	$(this).addClass("myCharacter");
	$(".myCharacter").removeClass("unchosen");
	$(".myCharacter").insertAfter(".myChar");
	$(".unchosen").addClass("enemy");
	$(".enemy").removeClass("unchosen");
	$(".enemy").insertAfter(".remEnmy");
});

//select your defender
$(".enemy").click(function(){
	$(this).addClass("defender");
	$(".defender").removeClass("enemy");
	$(".defender").insertAfter(".curDef");
});
	

	

	

