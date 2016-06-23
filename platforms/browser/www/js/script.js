
var colors = ["#e74c3c", "#27ae60", "#2980b9", "#8e44ad"];
var last_index = 0;
var bottle_is_spinning = false;
var questions;
var question_holder_lang = {english:{
			truth:[
	{shown:false, question:"Have you ever lied about how many poeple you've slept with?"},
	{shown:false, question:"How many poeple have you slept with?"},
	{shown:false, question:"When was the last time you had sex?"},
	{shown:false, question:"When was the last time you kissed someone?"},
	{shown:false, question:"Have you ever heard a family member having sex? Who?"},
	{shown:false, question:"Have you ever filmed yourself in a sexual situation?"},
	{shown:false, question:"Who would you rather kiss in this room?"},
	{shown:false, question:"Who would you rather sleep with, Donald Trump or Michael Moore?"},
	{shown:false, question:"Who would you rather sleep with, Hillary Clinton or Sarah Palin?"},
	{shown:false, question:"How many condoms did you bring here today?"},
	{shown:false, question:"When's the last time you watched porn?"},
	{shown:false, question:"Have you ever been interested in someone in this room who doesn't know it?"},
	{shown:false, question:"Do you have any nudes of yourself in your phone?"},
	{shown:false, question:"Have you ever sent a nude to someone?"},
	{shown:false, question:"Who's the last person you had a crush on?"},
	{shown:false, question:"When was the first time you kissed someone?"},
	{shown:false, question:"Have you ever been or gotten someone pregnant?"},
	{shown:false, question:"When's the last time you got high?"},
	{shown:false, question:"Who was the last person you spoke on the phone with?"},
	{shown:false, question:"When's the last time you masturbated?"},
	{shown:false, question:"What's the most embarrassing thing you've done while being drunk?"},
	{shown:false, question:"Have you ever lied about your age?"},
	{shown:false, question:"Have you ever had plastic surgery?"},
	{shown:false, question:"Do you believe in god?"},
	{shown:false, question:"Have you in the last 12 months taken money from a family member?"},
	{shown:false, question:"Have you ever had a finger inside your own asshole?"},
	{shown:false, question:"have you had sex in the last 30 days?"},
	{shown:false, question:"Who in this room have you slept with"},
	{shown:false, question:"Of the people playing, who's mom would you rather sleep with of you had to choose?"},
	{shown:false, question:"What drugs have you tried?"},
	{shown:false, question:"Have you ever tried cocaine?"},
	{shown:false, question:"Have you ever fallen asleep during class?"},
	{shown:false, question:"When was the last time you showered besides today?"},
	{shown:false, question:"How much do you spend on candy every month?"},
	{shown:false, question:"How much did you spend on alcohol tonight?"}
],

dare:[
	{shown:false, question:"Let the person to your right decide where you should kiss the person to your left."},
	{shown:false, question:"Put as big part of your hand as possible in your mouth, and keep it there for 1 minute."},
	{shown:false, question:"Let the person across the table check your breath."},
	{shown:false, question:"Try putting your leg behind your head, you may ask for help."},
	{shown:false, question:"Let the rest of the group read the 3 last texts you sent."},
	{shown:false, question:"Make out with a ghost for 15 seconds."},
	{shown:false, question:"Make your best orgasm face."},
	{shown:false, question:"Give the 3 people to your left a kiss where ever you want."},
	{shown:false, question:"Take off any piece of clothing and keep it off until it's your turn again."},
	{shown:false, question:"Let the rest of the group check the browser history on your phone."},
	{shown:false, question:"Drink."},
	{shown:false, question:"Smell the armpits of the person to your left."},
	{shown:false, question:"Let everyone hear what a dolphin sounds like."},
	{shown:false, question:"Take a picture with everyone and post it on you snapshat story."},
	{shown:false, question:"Go to Instagram and like the first 5 posts regardless of who posted them."},
	{shown:false, question:"Drink whatever is left in your glass."},
  	{shown:false, question:"Congrats! You get a kiss from either the person to your left or right, your choise."},
  	{shown:false, question:"Call your mom's cell phone long enough for her to hear but not pick up."},
  	{shown:false, question:"If you have a one dollar bill on you, give it to someone else who's playing."},
  	{shown:false, question:"Make your best Donald Trump impression."},
  	{shown:false, question:"Let someone go through your wallet."},
  	{shown:false, question:"Keep your hands inside someone else's pockets for 1 minute. "},
  	{shown:false, question:"You and you neighbours drink."},
  	{shown:false, question:"Kiss any part of the body of the person sitting to your right."},
  	{shown:false, question:"Do your best Hillary Clinton impression."},
  	{shown:false, question:"Pick 2 people and make them take a shot."},
  	{shown:false, question:"Text your mom with a emojie of your choise."}
]
		},


		swedish:{truth:[
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
		{shown:false, question:"Har du någonsin kännt dig attraherad av någon av samma kön eller motsatt kön om du är gay?"},
		{shown:false, question:"Har du någonsin haft analsex?"},
		{shown:false, question:"När hade du senast sex?"},
		{shown:false, question:"Har du legat med fler än 15 personer?"},
		{shown:false, question:"Har du någonsin haft ett finger i ditt anus?"},
		{shown:false, question:"Vem skulle du helst ligga med, kungen eller statsministern?"},
		{shown:false, question:"Vilken politiker tänder du mest på, Gudrun Schyman eller Mona Sahlin?"},
		{shown:false, question:"Vilket är ditt mest pinsamma fylleögonblick?"},
		{shown:false, questions:"Vilka droger har du testat?"},
		{shown:false, question:"När dushade du senast om du inte räknar med idag?"}

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
		{shown:false, question:"Lägg ut ett video på din snapshat-story där du sjunger Fyra Bugg & en Coca-Cola."},
		{shown:false, question:"Låtsas att du är Carola."}
	]} /* end swedish */
};
questions = question_holder_lang.english;

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
	bottle_is_spinning = false;
}


document.getElementById("button").addEventListener("click", function(){
	document.getElementById("question_wrapper").style.display = "none";
	document.getElementById("bottle_wrapper").style.display = "inline";
});
document.getElementById("bottle").addEventListener("mousedown", function(){
	if(!bottle_is_spinning){
		document.getElementById("choise_box").style.display = "none";
		bottle_is_spinning = true;
		spinTheBottle();
	}
	
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



/****************LANG******************/

document.getElementById("flag_sweden").addEventListener("mouseup", function(){
	setLang("swe", true);
});document.getElementById("flag_usa").addEventListener("mouseup", function(){
	setLang("usa", true);
});

function setLang(lang, user_action){
	
	switch(lang){
		case "swe":
			questions = question_holder_lang.swedish;
			document.getElementById("truth_btn").innerHTML = "Sanning";
			document.getElementById("dare_btn").innerHTML = "Konka";
			document.getElementById("button").innerHTML = "Gå vidare";
			break;
		default:
			questions = question_holder_lang.english;
			document.getElementById("truth_btn").innerHTML = "Truth";
			document.getElementById("dare_btn").innerHTML = "Dare";
			document.getElementById("button").innerHTML = "Continue";

	}

	if(user_action){
		//hide lang options
		document.getElementById("lang_wrapper").style.display = "none";
		document.getElementById("bottle_wrapper").style.display = "inline";
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


/************************CACHE***********************/
