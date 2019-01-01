var prefix = "\nC:\\windows\\system32>"
document.getElementById("prefix-text").innerHTML = prefix;
function cursorBlink() {
	document.getElementById("cursor").innerHTML = "_"
	if(document.getElementById("cursor").style.visibility === "visible") {
		document.getElementById("cursor").style.visibility = "hidden";
	}else{
		document.getElementById("cursor").style.visibility = "visible";
	}
}
document.getElementById("output-text").style.display = "none";
cursorBlink();
setInterval(cursorBlink, 500);

var text = "help";
var time = 200;
var letter = 0;
function typingText() {
	if(letter < text.length) {
		document.getElementById("typing-text").innerHTML += text.charAt(letter);
		letter++;
		setTimeout(typingText,time);
	}else{
		welcomeMessage();
	}
}
setTimeout(typingText,1000);

function welcomeMessage() {
	document.getElementById("output-text").innerHTML = "Welcome to pdl.rip!<br><br>More coming soon!";
	document.getElementById("output-text").style.display = "block";
	newElement();
}
function newElement() {
	var element1 = document.createElement("div");
	element1.setAttribute("id", "prefix-text");
	var contentElement1 = document.createTextNode(prefix);
	element1.appendChild(contentElement1);
	document.body.insertBefore(element1, cursor);
	document.getElementById("prefix-text").innerHTML = prefix;
}