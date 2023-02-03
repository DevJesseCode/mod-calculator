"use strict";

const selection = document.getElementById("selection");
const toMod = document.getElementById("toMod");
const modElement = document.getElementById("mod");
const answer = document.getElementById("answer");
let functionToPerform
let selected = "selection";
let numberToMod;
let mod;
let number;
let part1;
let part2;

function warnNoSelection() {
    alert(
        'Please select an input. You may do so by clicking on one of the white boxes around "mod".'
    );
}

function changeSelectionToNumber() {
    selection.innerHTML = "Selection: number";
    selected = "number";
}

function changeSelectionToMod() {
    selection.innerHTML = "Selection: mod";
    selected = "mod";
}

function multipliedBy() {
	if (selected === "number") {
		if (functionToPerform) {
			alert(
`An operator is alredy specified.
Delete the already specified operator and try again`
)
		} else {
			part1 = toMod.innerHTML;
			toMod.innerHTML += " * "
			functionToPerform = "multiplication";
		}
        selection.innerHTML = "Selection: number";
    } else if (selected === "mod") {
        alert("You can not use operators in the mod area.")
        selection.innerHTML = "Selection: mod";
    } else if (selected === "selection") {
        warnNoSelection();
        selection.innerHTML = "Selection: selection";
    } else {
        alert(
            "You seem to have manually change the value of the 'selected' variable."
        );
    }
}

function dividedBy() {
	if (selected === "number") {
		if (functionToPerform) {
			alert(
`An operator is alredy specified.
Delete the already specified operator and try again`
)
		} else {
			part1 = toMod.innerHTML;
			toMod.innerHTML += " / "
			functionToPerform = "division";
		}
        selection.innerHTML = "Selection: number";
    } else if (selected === "mod") {
        alert("You can not use operators in the mod area.")
        selection.innerHTML = "Selection: mod";
    } else if (selected === "selection") {
        warnNoSelection();
        selection.innerHTML = "Selection: selection";
    } else {
        alert(
            "You seem to have manually change the value of the 'selected' variable."
        );
    }
}

function subtractedBy() {
	if (selected === "number") {
		if (functionToPerform) {
			toMod.innerHTML += "-"
			alert(
`An operator is alredy specified.
The minus sign will be used to specify a negative value.`
)
		} else if (toMod.innerHTML === "") {
			toMod.innerHTML += "-";
		} else {
			part1 = toMod.innerHTML;
			toMod.innerHTML += " - "
			functionToPerform = "subtraction";
		}
        selection.innerHTML = "Selection: number";
    } else if (selected === "mod") {
        alert("You can not use operators in the mod area.")
        selection.innerHTML = "Selection: mod";
    } else if (selected === "selection") {
        warnNoSelection();
        selection.innerHTML = "Selection: selection";
    } else {
        alert(
            "You seem to have manually change the value of the 'selected' variable."
        );
    }
}

function totalOf() {
	if (selected === "number") {
		if (functionToPerform) {
			alert(
`An operator is alredy specified.
Delete the already specified operator and try again`
)
		} else {
			part1 = toMod.innerHTML;
			toMod.innerHTML += " + "
			functionToPerform = "addition";
		}
        selection.innerHTML = "Selection: number";
    } else if (selected === "mod") {
        alert("You can not use operators in the mod area.")
        selection.innerHTML = "Selection: mod";
    } else if (selected === "selection") {
        warnNoSelection();
        selection.innerHTML = "Selection: selection";
    } else {
        alert(
            "You seem to have manually change the value of the 'selected' variable."
        );
    }
}

function point() {
	if (selected === "number" && (toMod.innerHTML[toMod.innerHTML.length - 1] === "1" || toMod.innerHTML[toMod.innerHTML.length - 1] === "2" || toMod.innerHTML[toMod.innerHTML.length - 1] === "3" || toMod.innerHTML[toMod.innerHTML.length - 1] === "4" || toMod.innerHTML[toMod.innerHTML.length - 1] === "5" || toMod.innerHTML[toMod.innerHTML.length - 1] === "6" || toMod.innerHTML[toMod.innerHTML.length - 1] === "7" || toMod.innerHTML[toMod.innerHTML.length - 1] === "8" || toMod.innerHTML[toMod.innerHTML.length - 1] === "9" || toMod.innerHTML[toMod.innerHTML.length - 1] === "0")) {
        toMod.innerHTML = toMod.innerHTML + ".";
        selection.innerHTML = "Selection: number";
    } else if (selected === "mod") {
        alert("You can not use point in the mod area.")
        selection.innerHTML = "Selection: mod";
    } else if (selected === "selection") {
        warnNoSelection();
        selection.innerHTML = "Selection: selection";
    } else {
        alert(
            "You seem to have manually change the value of the 'selected' variable."
        );
    }
}

function updateDisplay(value) {
    if (selected === "number") {
        toMod.innerHTML = toMod.innerHTML + value;
        numberToMod = toMod.innerHTML;
        selection.innerHTML = "Selection: number";
    } else if (selected === "mod") {
        modElement.innerHTML = modElement.innerHTML + value;
        mod = modElement.innerHTML;
        selection.innerHTML = "Selection: mod";
    } else if (selected === "selection") {
        warnNoSelection();
        selection.innerHTML = "Selection: selection";
    } else {
        alert(
            "You seem to have manually change the value of the 'selected' variable."
        );
    }
}

function deleteLast() {
    if (selected === "number") {
        let newDisplay = "";
        let newDisplay2 = "";
        for (let i = 0; i < toMod.innerHTML.length - 1; i++) {
			newDisplay = newDisplay + toMod.innerHTML[i];
        }
		if (newDisplay[newDisplay.length - 1] === "*" || newDisplay[newDisplay.length - 1] === "/" || newDisplay[newDisplay.length - 1] === "+" || newDisplay[newDisplay.length - 1] === "-") {
			for (let i = 0; i < newDisplay.length - 2; i++) {
			newDisplay2 = newDisplay2 + newDisplay[i];
			}
			newDisplay = newDisplay2;
			functionToPerform = undefined;
		}
        toMod.innerHTML = newDisplay;
		numberToMod = toMod.innerHTML;
    }
    if (selected === "mod") {
        let newDisplay = "";
        for (let i = 0; i < modElement.innerHTML.length - 1; i++) {
            newDisplay = newDisplay + modElement.innerHTML[i];
        }
        modElement.innerHTML = newDisplay;
		mod = modElement.innerHTML;
    }
}

function calculateMod() {
	console.log("Started.")
	if (functionToPerform) {
		console.log("There is a function to perform.")
		part2 = ""
		if (functionToPerform === "addition") {
			console.log(part1);
			for (let i = numberToMod.indexOf("+") + 2; i < numberToMod.length; i++) {
				part2 = part2 + numberToMod[i];
				console.log(part2);
			}
			number = Number(part1) + Number(part2);
			console.log(number);
			mod = Number(mod);
			console.log(mod);
			if (number > mod) {
				for (
					number = number;
					number > mod;
					number -= mod
				) {
					console.log(number);
				}
				answer.innerHTML = number + " (mod " + mod + ")";
			}
			if (number === mod) {
				answer.innerHTML = 0 + " (mod " + mod + ")";
			} else if (number < 0) {
				for (number = number; number < 0; number += mod) {
				
				};
				answer.innerHTML = number + " (mod " + mod + ")";
			} else {
				answer.innerHTML = number + " (mod " + mod + ")";
			}
		}
		if (functionToPerform === "subtraction") {
			console.log(part1);
			for (let i = numberToMod.indexOf("-") + 2; i < numberToMod.length; i++) {
				part2 = part2 + numberToMod[i];
				console.log(part2);
			}
			number = Number(part1) - Number(part2);
			console.log(number);
			mod = Number(mod);
			console.log(mod);
			if (number > mod) {
				for (
					number = number;
					number > mod;
					number -= mod
				) {
					console.log(number);
				}
				answer.innerHTML = number + " (mod " + mod + ")";
			}
			if (number === mod) {
				answer.innerHTML = 0 + " (mod " + mod + ")";
			} else if (number < 0) {
				for (number = number; number < 0; number += mod) {
				
				};
				answer.innerHTML = number + " (mod " + mod + ")";
			} else {
				answer.innerHTML = number + " (mod " + mod + ")";
			}
		}
	} else {
		console.log("There is no function to perform.")
		number = Number(numberToMod);
		mod = Number(mod);
		if (number > mod) {
			for (
				number = Number(numberToMod);
				number >= mod;
				number -= mod
			) {
				console.log(number);
			}
			answer.innerHTML = number + " (mod " + mod + ")";
		} else if (number === mod) {
			answer.innerHTML = 0 + " (mod " + mod + ")";
		} else if (number < 0) {
			for (number = number; number < 0; number += mod) {
				
			};
			answer.innerHTML = number + " (mod " + mod + ")";
		} else {
			answer.innerHTML = number + " (mod " + mod + ")";
		}
	}
}

console.warn("This calculator does not solve the mods of division operations.");
console.warn(
    "For example: You would get '(1.125 mod 7)' as the answer for 9 / 8 (mod 7) whereas the answer is 2 (mod 7) "
);
