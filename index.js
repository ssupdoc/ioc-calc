const USER_INPUT = 'user-input'
const RESULT = 'result'
const RESULT_LINE = 'result-line'

function calcIOC() {
	let userInput = document.getElementById(USER_INPUT).value
	const userInputLength = userInput && userInput.trim().length
	let record = {}
	for(const letter of userInput) {
		if (letter !== '' || letter != '\n') {
			if (!record[letter]) {
				record[letter] = 1;
			} else {
				record[letter]++;
			}
		}
	}
	const recordLength = Object.keys(record).length
	let numerator = 0
	for(let letter in record) {
		if(record[letter] > 1) {
			numerator += record[letter] * (record[letter] - 1)
		}
	}
	let ioc = 1.0
	if(recordLength > 1) {
		let denominator = userInputLength * (userInputLength - 1)
		ioc = numerator / denominator
	}
	document.getElementById(RESULT_LINE).style.display = 'block'
	let resultArea = document.getElementById(RESULT)
	resultArea.innerText = ioc;
}