

function convertToSwagText() {

	var textToParse = document.getElementById('textToParse').value;
	var answerDiv = document.getElementById('answerDiv');
	var answerDivStr = '';

	// Test Text
	///abcdefghijklmnopqrstuvwxyz
	///ABCDEFGHIJKLMNOPQRSTUVWXYZ

	var replacementTextMap = new Map([
		////////// Upper case characters //////////
		['A','&Aring;'], ['B','&szlig;'], ['C','&#x20ac;'], ['D','D'],
		['E','&#x00a3;'], ['F','F'], ['G','G'], ['H','H'], ['I','&#x012c;'], 
		['J','J'], ['K','K'], ['L','&#x0141;'], ['M','M'], ['N','&Ntilde;'],
		['O','&Oslash;'], ['P','&#x20bd;'], ['Q','Q'], ['R','R'],
		['S','&#x0160;'], ['T','T'], ['U','&#xDC;'], ['V','V'], ['W','&#x20a9;'],
		['X','X'], ['Y','&#x00a5;'], ['Z','Z'],
		////////// Lower case characters //////////
		['a','&auml;'], ['b','b'], ['c','&#x010d;'], ['d','d'], ['e','&#x0113;'],
		['f','f'], ['g','g'], ['h','h'], ['i','i'], ['j','j'], ['k','k'], 
		['l','&#x019a;'], ['m','m'], ['n','&ntilde;'], ['o','&oslash;'], 
		['p','p'], ['q','q'], ['r','r'], ['s','&#x0161;'], ['t','t'],
		['u','&#x016b;'], ['v','v'], ['w','w'], ['x','x'], ['y','&#x04f1;'], ['z','z']
	]);

	var arrOfText = textToParse.split('');

	for (i = 0; i < arrOfText.length; i++) {

		if (replacementTextMap.has(arrOfText[i])) {

			arrOfText[i] = replacementTextMap.get(arrOfText[i]);
		}
	}

	answerDivStr += '<hr>';
	answerDivStr += arrOfText.join('');

	answerDiv.innerHTML = answerDivStr;
}


function convertFromSwagText() {

	var textToParse = document.getElementById('textToParse').value;
	var answerDiv = document.getElementById('answerDiv');
	var answerDivStr = '';

	// Test Text
	///abcdefghijklmnopqrstuvwxyz
	///ABCDEFGHIJKLMNOPQRSTUVWXYZ

	var replacementTextMap = new Map([
		////////// Upper case characters //////////
		['Å','A'], ['&szlig;','B'], ['&#x20ac;','C'], ['D','D'],
		['&#x00a3;','E'], ['F','F'], ['G','G'], ['H','H'], 
		['&#x012c;','I'], ['J','J'], ['K','K'], ['&#x0141;','L'], 
		['M','M'], ['&Ntilde;','N'], ['&Oslash;','O'], ['&#x20bd;','P'], 
		['Q','Q'], ['R','R'], ['&#x0160;','S'], ['T','T'], 
		['&#xDC;','U'], ['V','V'], ['&#x20a9;','W'], ['X','X'], 
		['&#x00a5;','Y'], ['Z','Z'],
		////////// Lower case characters //////////
		['&auml;','a'], ['b','b'], ['&#x010d;','c'], ['d','d'], 
		['&#x0113;','e'], ['f','f'], ['g','g'], ['h','h'], 
		['i','i'], ['j','j'], ['k','k'], ['&#x019a;','l'], 
		['m','m'], ['&ntilde;','n'], ['&oslash;','o'], 
		['p','p'], ['q','q'], ['r','r'], ['&#x0161;','s'], 
		['t','t'], ['&#x016b;','u'], ['v','v'], 
		['w','w'], ['x','x'], ['&#x04f1;','y'],	['z','z']
	]);

	var arrOfText = textToParse.split('');

	for (i = 0; i < arrOfText.length; i++) {

		if (replacementTextMap.has(arrOfText[i])) {

			arrOfText[i] = replacementTextMap.get(arrOfText[i]);
		}
	}

	answerDivStr += '<hr>';
	answerDivStr += arrOfText.join('');

	answerDiv.innerHTML = answerDivStr;
}