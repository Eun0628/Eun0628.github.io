function isPalindrome() {
	/*
	MOM = yes
	DAD = yes
	racecar = yes
	Helen = no
	hey mom yeh

	word = drow
	*/

	var word = "astronomy";
	var length = word.length;
	// word[2] = t
	var builder = "";
	/*
	builder += "hey";
	builder += " you";
	alert(builder);
	*/
	/*
	for (var n = length - 1; n >= 0; n--) {
		builder += word[n];
	}
	*/
	var palindrome = true;
	for (var i = 0; i < Math.floor(length / 2); i++) {
		if (word[i] != word[length - 1 - i]) {
			palindrome = false;
			break;
		}
	}

	if (palindrome) {
		alert(word + " is a palindrome");
	} else {
		alert(word + " is not a palindrome");
	}
}

function romanDictionary(letter) {
	/*
	I, V, X, L, C, D, M
	1, 5, 10, 50, 100, 500, 1000

	III = 3
	VIII = 8
	LX1 = 61
	IX = 9
	XL = 40
	IV = 4
	MMIV = 2004
	IVMM = invalid number
	IV
	IM
	*/

	switch(letter) {
		case "I":
			return 1;
			break;
		case "V":
			return 5;
			break;
		case "X":
			return 10;
			break;
		case "L":
			return 50;
			break;
		case "C":
			return 100;
			break;
		case "D":
			return 500;
			break;
		default:
			return 1000;
			break;
	}
}

function convertRoman() {
	var sum = 0;
	var roman = "III";
	var length = roman.length;

	for (var n = 0; n < length; n++) {
		if (i < length - 1 && romanDictionary(roman[n]) < romanDictionary(roman[n + 1])) {
			/*
			sum += romanDictionary(roman[n + 1]);
			sum -= romanDictionary(roman[n]);
			n++
			*/
			sum += (-1 * romanDictionary(roman[n]));
		} else {
			sum += romanDictionary(roman[n]);
			continue;
		}
	}
	alert(sum);
}

function enterPlayer(player) {
	var playerName = document.getElementById(player + "Name").value;
	var playerImage = document.getElementById(player + "Image").value;
	var builder = playerName + "<br><img src='images/" + playerImage + ".jpg' />";
	document.getElementById(player + "Info").innerHTML = builder;
}
