var selection = document.getElementById("selection")
var selected = "selection"
var toMod = document.getElementById("toMod")
var modElement = document.getElementById("mod")
var answer = document.getElementById("answer")
var numberToMod
var mod
var number

function warnNoSelection() {
	alert('Please select an input. You may do so by clicking on one of the white boxes around "mod".')
}

function changeSelectionToNumber() {
	selection.innerHTML = "Selection: number"
	selected = "number"
}

function changeSelectionToMod() {
	selection.innerHTML = "Selection: mod"
	selected = "mod"
}

function updateDisplay(value) {
	if (selected === "number") {
		toMod.innerHTML = toMod.innerHTML + value
		numberToMod = toMod.innerHTML
	}
	if (selected === "mod") {
		modElement.innerHTML = modElement.innerHTML + value
		mod = modElement.innerHTML
	}
}

function deleteLast() {
	let newDisplay = ""
	if (selected === "number") {
	for (let i = 0; i < toMod.innerHTML.length - 1; i++) {
		newDisplay = newDisplay + toMod.innerHTML[i]
	}
	toMod.innerHTML = newDisplay
	}
	if (selected === "mod") {
	for (let i = 0; i < modElement.innerHTML.length - 1; i++) {
		newDisplay = newDisplay + modElement.innerHTML[i]
	}
	modElement.innerHTML = newDisplay
	}
}

function getNumber(source) {
	number = ""
	for (let i = 0; i < source.length; i++) {
		number = number + source[i]
		console.log(number)
	}
	return Number(number)
}

function getMod(source) {
	mod = ""
	for (let i = 0; i < source.length; i++) {
		mod = mod + source[i]
		console.log(mod)
	}
	return Number(mod)
}

function calculateMod() {
	number = getNumber(numberToMod)
	mod = getMod(mod)
	if (number > mod) {
		for (number = number; number > mod; number = number - mod) {
		console.log(number)
    }
	}
    if (number === mod) {
        answer.innerHTML = (0 + " (mod " + mod + ")")
    } else {
        answer.innerHTML = (number + " (mod " + mod + ")")
    }
}

console.warn("This calculator does not solve the mods of division operations.")
console.warn("For example: You would get '(1.125 mod 7)' as the answer for 9 / 8 (mod 7) whereas the answer is 2 (mod 7) ")