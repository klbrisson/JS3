//CHECK IF NUMBER
var isNumber = function(n) {
 return !isNaN(parseFloat(n)) && isFinite(n);
};
var isValid = false;

// PHONE NUMBER
while (isValid === false) {
	var phoneNum = prompt('Please enter your phone number in the following format xxx-xxx-xxxx');
	if (phoneNum.charAt(3) === '-' && phoneNum.charAt(7) === '-' && isNumber(phoneNum.substring(0,2))
		&& isNumber(phoneNum.substring(4,6)) && isNumber(phoneNum.substring(8,11))) {
		isValid = true;
		alert('Thank You! Your phone number is ' + phoneNum);
	}
}


//BIRTH DATE
isValid = false;
while (isValid === false) {	
	var birthDate = prompt('Please enter your birth day in the following format xx/xx/xx');
	if (birthDate.charAt(2) === '/' && birthDate.charAt(5) === '/' && isNumber(birthDate.substring(0,1))
		&& isNumber(birthDate.substring(3,4)) && isNumber(birthDate.substring(6,7))) {
		alert('Thank You! Your birth day is ' + birthDate);
		isValid = true;
	}
}

//POSTAL CODE
isValid = false;
while (isValid === false) {
	var postalCode = prompt('Enter your postal code (xxxxx or xxxxx-xxxx)');
	if ((postalCode.length === 5 && isNumber(postalCode)) || 
		(postalCode.length === 10 && postalCode.charAt(5) === '-' && isNumber(postalCode.substring(0,4)) && isNumber(postalCode.substring(6,9)))) {
		alert('Thank You! Your postal code is ' + postalCode);
		isValid = true;
	}
}

//STATE ABBREVIATION
isValid = false;
	while (isValid === false) {
	var state = prompt('Enter your state abbreviation. Format XX');
	if (state.length === 2 && state === state.toUpperCase()) {
		alert('Thank You! Your state is ' + state);
		isValid = true;
	}
}

//MARRIED
isValid = false;
	while (isValid === false) {
	var married = prompt('Are you married? (Yes or No)').toLowerCase();
	if (married === 'yes') {
		alert('Thank You! You said ' + married + ', you are married');
		isValid = true;
	}
	else if (married === 'no') {
		alert('Thank You! You said ' + married + ', you are not married');
		isValid = true;
	}
	else {
		alert(married + ' is not a valid answer. Please enter yes or no.');
	}
}





