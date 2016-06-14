
var colors = ["#e74c3c", "#27ae60", "#2980b9", "#8e44ad"];
var last_index = 0;
var questions = {truth:[
		{shown:false, question:"Hur lång tid har det gått sedan du senast kysste någon?"},
		{shown:false, question:"Har du någonsin varit intresserad av någon i detta rummet?"},
		{shown:false, question:"Vem i detta rummet av motasatt kön (eller andra könet om du är gay), hade du valt att kyssa om du var tvungen?"},
		{shown:false, question:"När kollade du senast på porr?"},
		{shown:false, question:"När onanerade du senast?"},
		{shown:false, question:"Vem var du senast kär i?"},
		{shown:false, question:"Hade du kännt dig bekväm i att låta någon läsa din senaste sms-konversation?"},
		{shown:false, question:"Har du någonsin nätdejtat?"},
		{shown:false, question:"Har du någonsin haft en könssjukdom?"},
		{shown:false, question:"Har du någonsin filmat dig själv i en sexuell situation?"},
		{shown:false, question:"Har du någonsin hört en familjemedlem ha sex? Vem?"},
		{shown:false, question:"Brukar du ljuga om hur många du legat med?"},
		{shown:false, question:"Hur många har du kysst?"},
		{shown:false, question:"Vad är det mest avtändande en partner hade kunnat göra?"},
		{shown:false, question:"Vad är din konstigaste vana?"},
		{shown:false, question:"Hur många har du legat med?"},
		{shown:false, question:"När förlorade du oskulden?"},
		{shown:false, question:"Hur många kondomer har du på dig idag?"},
		{shown:false, question:"Hoppas du få napp ikväll med någon i detta rummet? Vem?"},
		{shown:false, question:"Har du någonsin kännt dig attraherad av någoon av samma kön eller motsatt kön om du är gay?"},
		{shown:false, question:"Har du någonsin haft analsex?"},
		{shown:false, question:"När hade du senast sex?"},
		{shown:false, question:"Har du legat med fler än 15 personer?"},
		{shown:false, question:"Har du någonsin haft ett finger i ditt anus?"},
		{shown:false, question:"Vem skulle du helst ligga med, kungen eller statsministern?"}

	],
	dare: [
		{shown:false, question:"Ta en shot."},
		{shown:false, question:"Kyss personen till vänster om dig på ett ställe som personen till höger om dig får välja."},
		{shown:false, question:"Läs upp de 5 sista sms:en från din senaste konversation."},
		{shown:false, question:"Smiska den som sitter till höger om dig."},
		{shown:false, question:"Bete dig som en apa tills du får nästa fråga."},
		{shown:false, question:"Kom på ett rim till alla deltagares namn."},
		{shown:false, question:"Sitt i knät på personen mitt emot dig till någon av er får nästa fråga."},
		{shown:false, question:"Kyss personen till höger om dig på valfri skinka."},
		{shown:false, question:"Pussa valfri person."},
		{shown:false, question:"Ta av dig tröjan och ha den av i 1 minut."},
		{shown:false, question:"Skicka ett sms med ett meddelande som övriga deltagare bestämmer till ett nummer som personen till höger om dig får välja."},
		{shown:false, question:"Låt övriga deltagre kontrollera din telefons webbhistorik"},
		{shown:false, question:"Gör ditt bästa orgasm-uttryck."},
		{shown:false, question:"Alla dricker."},
		{shown:false, question:"Välj 3 lyckliga personer som får en puss av dig."},
		{shown:false, question:"Jucka på personen till höger om dig i 30 sekunder."},
		{shown:false, question:"Stoppa in så stor del av din hand i munnen och ha kvar den där i 1 minut."},
		{shown:false, question:"Försök placera ena benet bakom huvudet. Du får be om hjälp."},
		{shown:false, question:"Kontrollera andedräkten på personerna till höger & vänster om dig."},
		{shown:false, question:"Låt personen mitt emot dig kontrollera din andedräkt."},
		{shown:false, question:"Moona dina vänner."},
		{shown:false, question:"Sjung den högsta ton du kan i 10 sekunder."},
		{shown:false, question:"Drick 2 shots."},
		{shown:false, question:"Dina 2 bordsgrannar sätter sig i på dina knän tills det är någon av eras tur igen."},
		{shown:false, question:"Lägg ut ett video på din snapshat-story där du sjunger Fyra Bugg & en Coca-Cola"}
	]
};

console.log(questions);

function nextQuestion(choise){
	var next_question; // index of the next question, will be checked so that it hasn't already been shown

	while(true){
		next_question = choise[random(0,choise.length-1)];
		if(!next_question.shown){
			next_question.shown = true;
			break;
		}
	}

	document.getElementById("question").innerHTML = next_question.question;
	checkCompleted(choise);
}




var spin_interval;
var angle = random(0,360);
function spinTheBottle(){
	var speed = 50;
	document.getElementById("bottle").style["-webkit-transform"] = "rotate("+angle+"deg)"; /* Chrome, Safari, Opera */
		document.getElementById("bottle").style.transform = "rotate("+angle+"deg)";
	spin_interval = setInterval(function(){
		angle += speed;
		speed -= 0.3;
		document.getElementById("bottle").style["-webkit-transform"] = "rotate("+angle+"deg)"; /* Chrome, Safari, Opera */
		document.getElementById("bottle").style.transform = "rotate("+angle+"deg)";

		if(speed <= 0){
			clearInterval(spin_interval);
			bottleStopped();
		}
	},20);
}


function bottleStopped(){
	document.getElementById("choise_box").style.display = "inline";
}


document.getElementById("button").addEventListener("click", function(){
	document.getElementById("question_wrapper").style.display = "none";
	document.getElementById("bottle_wrapper").style.display = "inline";
});
document.getElementById("bottle").addEventListener("mousedown", function(){
	document.getElementById("choise_box").style.display = "none";
	spinTheBottle();
});
document.getElementById("truth_btn").addEventListener("mousedown", function(){
	truthOrDareClicked(questions.truth);
});
document.getElementById("dare_btn").addEventListener("mousedown", function(){
	truthOrDareClicked(questions.dare);
});

function truthOrDareClicked(clicked){
	document.getElementById("bottle_wrapper").style.display = "none";
	document.getElementById("question_wrapper").style.display = "inline";
	document.getElementById("choise_box").style.display = "none";
	document.getElementById("bottle").style["-webkit-transform"] = "0deg)"; /* Chrome, Safari, Opera */
	document.getElementById("bottle").style.transform = "rotate(0deg)";
	nextQuestion(clicked);
}





function checkCompleted(u){
	var shown = true;
	for(var i = 0; i < u.length; i++){
		if(!u[i].shown){
			shown = false
		}
	}
	if(shown){
		for(var n = 0; n < u.length; n++){
			u[n].shown = false;
		}
	}
}


/**************COLORS*****************/

setInterval(changeColor, 15000);


function changeColor(){
	var index;
	while(true){
		index = random(0, colors.length-1);
		if(index != last_index)
			break;
	}
	last_index = index;
	document.getElementById("body").style.background = colors[index];
}


function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

