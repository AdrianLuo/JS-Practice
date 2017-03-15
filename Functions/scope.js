
 // - Scope is the idea in programming that some variables are acessible/inaccessible from other parts of the program.
 // - Global Scope refers to variables that are accessible to every part of the program.
 // - Functional Scope refers to variables created inside functions, which are not accessible outside of its block.

//Global Sope
var laundryRoom = 'Basement';
var mailRoom = 'Room 1A';

function myApartment() {
	//Functional Scope
  	var mailBoxNumber = 'Box 3';
  	laundryRoom = 'In-unit';
  	console.log('Mail box: ' + mailBoxNumber + ', Laundry:' + laundryRoom);
}

console.log('Laundry: ' + laundryRoom + ', Mail' + mailRoom);

myApartment();