var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var title = document.getElementById('title');
var img = document.getElementById('img');
var text = document.getElementById('text');
var knife = document.getElementById('knife');
var key = document.getElementById('key');

function home() {
	option1.innerHTML = "Ga naar buiten"; //sleutel nodig voor de deur
	option1.setAttribute('onclick','door()')
	option2.innerHTML = "Ga naar boven";
	option2.setAttribute('onclick','up()')
	option3.innerHTML = "Ga naar de kelder";
	option3.setAttribute('onclick','down()')
	title.innerHTML = "Woonkamer";
	text.innerHTML = "Je wordt wakker op de bank en er is helemaal niemand in het huis.";
	img.src = "img/woonkamer.jpg";
	console.log("Woonkamer")
}

function door() {
	if (key == true) {
		garden();
	} else {
		alert("Je hebt een sleutel nodig voor deze deur.");
	}
}

function up() {
	option1.innerHTML = "Terug naar beneden";
	option1.setAttribute('onclick','home()') 
	option2.innerHTML = "Ga naar de zolder";
	option2.setAttribute('onclick','upup()')
	option3.innerHTML = "";
	title.innerHTML = "Bovenverdieping";
	text.innerHTML = "Je bent naar boven gegaan. Het is een hele grote rotzooi boven en er ligt veel bloed op de grond.";
	img.src = "img/boven.jpg";
	console.log("Bovenverdieping")
}

function upup() {
	key.style.display = "block";
	option1.innerHTML = "Terug naar de bovenverdieping";
	option1.setAttribute('onclick','up()') 
	option2.innerHTML = "Pak de sleutel op"; //sleutel oppakken
	option2.setAttribute('onclick','sleutel()')
	option3.innerHTML = "";
	title.innerHTML = "Zolder";
	text.innerHTML = "Je bent naar de zolder gegaan. Je ziet daar een sleutel liggen.";
	img.src = "img/zolder.jpg";
	console.log("Zolder")
}

function sleutel() {
	key.style.display = "none";
	key = true;
	option2.innerHTML = "";
}

function down() {
	knife.style.display = "block";
	option1.innerHTML = "Terug naar boven gaan"; 
	option1.setAttribute('onclick','home()')
	option2.innerHTML = "Pak het mes op"; //mes oppakken
	option2.setAttribute('onclick', 'mes()')
	option3.innerHTML = "";
	title.innerHTML = "Kelder";
	text.innerHTML = "Je bent naar de kelder gegaan. Je ziet daar een mes liggen met bloed erop.";
	img.src = "img/kelder.jpg";
	console.log("Kelder")
}

function mes() {
	knife.style.display = "none";
	knife = true;
	option2.innerHTML = "";
}

function garden() {
	option1.innerHTML = "Ga terug naar binnen"; 
	option1.setAttribute('onclick','home()')
	option2.innerHTML = "Ga kijken bij de persoon op straat";
	option2.setAttribute('onclick','person()')
	option3.innerHTML = "Ga naar het huis van je buren";
	option3.setAttribute('onclick','home2()')
	title.innerHTML = "Tuin";
	text.innerHTML = "Je bent naar buiten gegaan. Je ziet dat iedereen in de straat uit zijn huis is gegaan. Alle deuren van de huizen staan open. Je ziet iemand op de straat liggen.";
	img.src = "img/tuin.jpg";
	console.log("Tuin")
}

function person() {
	option1.innerHTML = "Ga terug naar de tuin"; 
	option1.setAttribute('onclick','garden()')
	option2.innerHTML = "Ga naar het huis van je buren";
	option2.setAttribute('onclick','home2()')
	option3.innerHTML = "";
	title.innerHTML = "Persoon op straat";
	text.innerHTML = "Je bent bij de persoon op straat gaan kijken. Je ziet dat de persoon dood is.";
	img.src = "img/persoon.jpg";
	console.log("Persoon op straat")
}

function home2() {
	option1.innerHTML = "Ga terug naar buiten";
	option1.setAttribute('onclick','garden()') 
	option2.innerHTML = "Ga naar boven";
	option2.setAttribute('onclick','home2up()')
	option3.innerHTML = "";
	title.innerHTML = "Huis van je buren";
	text.innerHTML = "Je bent naar het huis van je buren gegaan. Je ziet een bloedspoor de trap op gaan.";
	img.src = "img/buren1.jpg";
	console.log("Huis van je buren")
}

function home2up() {
	option1.innerHTML = "Ga terug naar beneden"; 
	option1.setAttribute('onclick','home2()')
	option2.innerHTML = "Ga de slaapkamer in";
	option2.setAttribute('onclick','home2sleep()')
	option3.innerHTML = "";
	title.innerHTML = "Bovenverdieping buren";
	text.innerHTML = "Je bent naar boven gegaan. Je ziet de deur van de slaapkamer open staan.";
	img.src = "img/buren2.jpg";
	console.log("Bovenverdieping buren")
}

function home2sleep() {
	option1.innerHTML = "Ga terug naar beneden"; 
	option1.setAttribute('onclick','home2()')
	option2.innerHTML = "Ga naar de overburen";
	option2.setAttribute('onclick','home3()')
	option3.innerHTML = "";
	title.innerHTML = "Slaapkamer buren";
	text.innerHTML = "Je bent naar de slaapkamer gegaan. Je ziet je buurman op bed liggen. Hij schrikt opeens wakker. Hij vertelt dat er een zombievirus is uitgebroken en iedereen is geëvacueerd is. Maar hij zegt dat hij nog iemand had gezien in het huis van de overburen.";
	img.src = "img/buren3.jpg";
	console.log("Slaapkamer buren")
}

function home3() {
	option1.innerHTML = "Ga terug naar buiten"; 
	option1.setAttribute('onclick','garden()')
	option2.innerHTML = "Ga naar de persoon toe"; //als je het mes hebt ga je naar het win scherm, anders ga je naar het game over scherm.
	option2.setAttribute('onclick', 'end()')
	option3.innerHTML = "";
	title.innerHTML = "Huis van de overburen";
	text.innerHTML = "Je bent naar het huis van de overburen gegaan. Je ziet iemand op de bank liggen met bloed op zijn gezicht.";
	img.src = "img/buren4.jpg";
	console.log("Huis van de overburen")
}

function end() {
	if (knife == true) {
		win();
	} else {
		gameover();
	}
}

function win() {
	option1.innerHTML = "Start opnieuw"; //dit laat de game opnieuw beginnen
	option1.setAttribute('onclick', 'refresh()')
	option2.innerHTML = ""; 
	option3.innerHTML = "";
	title.innerHTML = "Winnaar";
	text.innerHTML = "De persoon bleek een zombie te zijn, maar je hebt hem gedood met je mes.";
	img.src = "img/win.jpg";
	console.log("Win")
}

function gameover() {
	option1.innerHTML = "Start opnieuw"; //dit laat de game opnieuw beginnen
	option1.setAttribute('onclick', 'refresh()')
	option2.innerHTML = ""; 
	option3.innerHTML = "";
	title.innerHTML = "Game Over";
	text.innerHTML = "De persoon bleek een zombie te zijn, maar je hebt geen mes opgepakt dus je bent dood gegaan.";
	img.src = "img/gameover.jpg";
	console.log("Game Over")
}

function refresh() {
	location.reload();
}