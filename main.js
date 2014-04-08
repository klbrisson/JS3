//CHECK IF NUMBER
var isNumber = function(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
};
var isValid = false;

// PHONE NUMBER
// while (isValid === false) {
// 	if (phoneNum.charAt(3) === '-' && phoneNum.charAt(7) === '-' && isNumber(phoneNum.substring(0,2))
// 		&& isNumber(phoneNum.substring(4,6)) && isNumber(phoneNum.substring(8,11))) {
// 		isValid = true;
// 		alert('Thank You! Your phone number is ' + phoneNum);
// 	}
// }

// PHONE NUMBER FUNCTION
var isPhoneValid = function(phoneNum) {
	if (phoneNum.charAt(3) === '-' && phoneNum.charAt(7) === '-' && isNumber(phoneNum.substring(0,2))
		&& isNumber(phoneNum.substring(4,6)) && isNumber(phoneNum.substring(8,11))) {
		isValid = true;
		return 'Thank You! Your phone number is ' + phoneNum;
	}
	else {
		return 'That is not a valid format';
	}
}
isValid = false;
while(isValid === false) {
	var phoneNumber = prompt('Please enter your phone number in the following format xxx-xxx-xxxx');
	alert(isPhoneValid(phoneNumber));
}



// //BIRTH DATE
// isValid = false;
// while (isValid === false) {	
// 	var birthDate = prompt('Please enter your birth day in the following format MM/DD/YY');
// 	if (birthDate.charAt(2) === '/' && birthDate.charAt(5) === '/' 
// 		&& +birthDate.substring(0,2) > 0 && +birthDate.substring(0,2) <= 12
// 		&& +birthDate.substring(3,5) > 0 && +birthDate.substring(3,5) <= 31) {
// 		alert('Thank You! Your birth day is ' + birthDate);
// 		isValid = true;
// 	}
// }

//BIRTH DATE FUNCTION
var isBirthDateValid = function (birthDate) {
	if (birthDate.charAt(2) === '/' && birthDate.charAt(5) === '/' 
		&& +birthDate.substring(0,2) > 0 && +birthDate.substring(0,2) <= 12
		&& +birthDate.substring(3,5) > 0 && +birthDate.substring(3,5) <= 31) {
		isValid = true;
		return 'Thank You! Your birth day is ' + birthDate;
	}
	else {
		return 'That is not a valid date';
	}
}
isValid = false;
while (isValid === false) {
	var birthDay = prompt('Please enter your birth day in the following format MM/DD/YY');
	alert(isBirthDateValid(birthDay));
}


// //POSTAL CODE
// isValid = false;
// while (isValid === false) {
// 	var postalCode = prompt('Enter your postal code (xxxxx or xxxxx-xxxx)');
// 	if (isNumber(postalCode.substring(0,4)) && (postalCode.length === 5) || (postalCode.length === 10 && postalCode.charAt(5) === '-' && isNumber(postalCode.substring(6,9)))) {
// 		alert('Thank You! Your postal code is ' + postalCode);
// 		isValid = true;
// 	}
// }

//POSTAL CODE FUNCTION
var isPostalCodeValid = function (postalCode) {
	if (isNumber(postalCode.substring(0,4)) && (postalCode.length === 5) || (postalCode.length === 10 && postalCode.charAt(5) === '-' && isNumber(postalCode.substring(6,9)))) {
		isValid = true;
		return 'Thank You! Your postal code is ' + postalCode;
	}
	else {
		return 'That is not a valid format';
	}
}
isValid = false;
while (isValid === false) {
	var zipCode = prompt('Enter your postal code (xxxxx or xxxxx-xxxx)');
	alert(isPostalCodeValid(zipCode));
}


// //STATE ABBREVIATION
// isValid = false;
// 	while (isValid === false) {
// 	var state = prompt('Enter your state abbreviation. Format XX');
// 	if (state.length===2 && state.charCodeAt(0)>=65 && state.charCodeAt(0)<=90 && state.charCodeAt(1)>=65 && state.charCodeAt(1)<=90) {
// 		alert('Thank You! Your state is ' + state);
// 		isValid = true;
// 	}
// }

//STATE ABBREVIATION FUNCTION
var isStateValid = function(state) {
	if (state.length===2 && state.charCodeAt(0)>=65 && state.charCodeAt(0)<=90 && state.charCodeAt(1)>=65 && state.charCodeAt(1)<=90) {
		isValid = true;
		return 'Thank You! Your state is ' + state;
	}
	else {
		return 'That is not a valid format';
	}
}
isValid = false;
while (isValid === false) {
	var state = prompt('Enter your state abbreviation. Format XX');
	alert(isStateValid(state));
}



// //MARRIED
// isValid = false;
// 	while (isValid === false) {
// 	var married = prompt('Are you married? (Yes or No)').toLowerCase();
// 	if (married === 'yes') {
// 		alert('Thank You! You said ' + married + ', you are married');
// 		isValid = true;
// 	}
// 	else if (married === 'no') {
// 		alert('Thank You! You said ' + married + ', you are not married');
// 		isValid = true;
// 	}
// 	else {
// 		alert(married + ' is not a valid answer. Please enter yes or no.');
// 	}
// }

//MARRIED FUNCTION
var isMarriedValid = function (married) {
	if (married === 'yes') {
		isValid = true;
		return 'Thank You! You said ' + married + ', you are married';
	}
	else if (married === 'no') {
		isValid = true;
		return 'Thank You! You said ' + married + ', you are not married';
	}
	else {
		return married + ' is not a valid answer. Please enter yes or no.';
	}
}

isValid = false;
while (isValid === false) {
	var married = prompt('Are you married? (Yes or No)').toLowerCase();
	alert(isMarriedValid(married));
}











