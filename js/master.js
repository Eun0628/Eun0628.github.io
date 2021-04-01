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

function simpleSqrt() {
	var num = document.getElementById("sqrt").value;
	var perfectSquare = 0;
	var sqrt = 0;

	while (perfectSquare <= num) {
		perfectSquare += (sqrt + sqrt) + 1;
		sqrt++;
	}

	alert(sqrt - 1);

	/*
	Given x
	Return INTEGER value of the sqrt, rounded DOWN
	x = 4 -> 2
	x = 5 -> 2
	x = 50 -> 7

	0, 1, 4, 9, 16, 25, 36, 49
	0
	1 = 0 + 1
	4 = 1 + 3
	9 = 4 + 5
	16 = 9 + 7
	n = (n - 1) + (2x + 1 or x + x + 1)
	*/
}

function enterPlayer(player) {
	var playerName = document.getElementById(player + "Name").value;
	var playerImage = document.getElementById(player + "Image").value;
	var builder = playerName + "<br><img src='images/" + playerImage + ".jpg' />";
	document.getElementById(player + "Info").innerHTML = builder;
}

var turn = "O";
var counterSquare = 0;
var gameover = false;

function changeSquare(element) {
	var player1Image = document.getElementById("player1Image").value;
	var player2Image = document.getElementById("player2Image").value;

	if (player1Image == "#" || player2Image == "#") {
		alert("Please set the avatars first!");
	} else {
		if (gameover) {
			alert("Game has ended. Please reset board.");
		} else {
			var player1Name = "O";
			var player2Name = "X";

			if (document.getElementById("player1Name").value) {
				player1Name = document.getElementById("player1Name").value;
			}

			if (document.getElementById("player1Name").value) {
				player2Name = document.getElementById("player2Name").value;
			}

			if (document.getElementById(element).innerHTML.length == 0) {
				counterSquare++;

				if (turn == "O") {
					document.getElementById(element).innerHTML = "<img src='images/" + player1Image + ".jpg' />";

					if (checkHorizontal(player1Image) || checkVertical(player1Image) || checkDiagonal(player1Image)) {
						alert(player1Name + " is the winner! Please reset board.");
						gameover = true;
					} else {
						turn = "X";
					}
				} else {
					document.getElementById(element).innerHTML = "<img src='images/" + player2Image + ".jpg' />";

					if (checkHorizontal(player2Image) || checkVertical(player2Image) || checkDiagonal(player2Image)) {
						alert(player2Name + " is the winner! Please reset board.");
						gameover = true;
					} else {
						turn = "O";
					}
				}

				if (counterSquare == 9) {
					gameover = true;
				}
			} else {
				alert("This square is already taken!!")
			}
		}
	}
}

function checkHorizontal(playerImage) {
	var square0 = document.getElementById("square0").innerHTML;
	var square1 = document.getElementById("square1").innerHTML;
	var square2 = document.getElementById("square2").innerHTML;
	var square3 = document.getElementById("square3").innerHTML;
	var square4 = document.getElementById("square4").innerHTML;
	var square5 = document.getElementById("square5").innerHTML;
	var square6 = document.getElementById("square6").innerHTML;
	var square7 = document.getElementById("square7").innerHTML;
	var square8 = document.getElementById("square8").innerHTML;

	return ((square0 == square1 && square1 == square2 && square2 == square0 && square0.indexOf(playerImage) > -1) || (square3 == square4 && square4 == square5 && square3 == square5 && square3.indexOf(playerImage) > -1) || (square6 == square7 && square7 == square8 && square6 == square8 && square6.indexOf(playerImage) > -1))
}

function checkVertical(playerImage) {
	var square0 = document.getElementById("square0").innerHTML;
	var square1 = document.getElementById("square1").innerHTML;
	var square2 = document.getElementById("square2").innerHTML;
	var square3 = document.getElementById("square3").innerHTML;
	var square4 = document.getElementById("square4").innerHTML;
	var square5 = document.getElementById("square5").innerHTML;
	var square6 = document.getElementById("square6").innerHTML;
	var square7 = document.getElementById("square7").innerHTML;
	var square8 = document.getElementById("square8").innerHTML;

	return ((square0 == square3 && square3 == square6 && square0 == square6 && square0.indexOf(playerImage) > -1) || (square1 == square4 && square4 == square7 && square1 == square7 && square1.indexOf(playerImage) > -1) || (square2 == square5 && square5 == square8 && square2 == square8 && square2.indexOf(playerImage) > -1))
}

function checkDiagonal(playerImage) {
	var square0 = document.getElementById("square0").innerHTML;
	var square1 = document.getElementById("square1").innerHTML;
	var square2 = document.getElementById("square2").innerHTML;
	var square3 = document.getElementById("square3").innerHTML;
	var square4 = document.getElementById("square4").innerHTML;
	var square5 = document.getElementById("square5").innerHTML;
	var square6 = document.getElementById("square6").innerHTML;
	var square7 = document.getElementById("square7").innerHTML;
	var square8 = document.getElementById("square8").innerHTML;

	return ((square0 == square4 && square4 == square8 && square0 == square8 && square0.indexOf(playerImage) > -1) || (square2 == square4 && square4 == square6 && square2 == square6 && square2.indexOf(playerImage) > -1))
}

function checkSquare() {
	var innerHTML = document.getElementById("square0").innerHTML;
	alert(innerHTML.length);
}

function reset() {
	for (var n = 0; n < 9; n++) {
		var element = document.getElementById("square" + n);
		element.innerHTML = "";
	}
	gameover = false;
	counterSquare = 0;
	turn = "O";
}

/*
function changeSquare(element) {
	if (document.geyElementById(element).innerHTML.length == 0) {
		counterSquare++;
		if (turn == "O") {
			document.getElementById(element).innerHTML = "<img src='images/" + playerImage + ".jpg'/>"
			turn = "X";
		} else {
			document.getElementById(element).innerHTML = "<img src='images/" + playerImage + ".jpg'/>"
			turn = "O";
		}

		if (counterSquare = 9) {
			alert("Game Over!");
		}
		
	} else {
		alert("This Square is already Taken!");
	}
}

function checkSquare() {
	var innerHTML = document.getElementById("square0").innerHTML;
	alert(innerHTML.length);
}

var word = "hello Rei";
var position = word.indexOf("Rei");

var innerHTML = "<img src";
var position = innerHTML.indexOf("Rei");
*/
