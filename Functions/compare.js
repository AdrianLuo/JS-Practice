var myPlaces = ['Japan','Taiwan','Korea'];
var friendPlaces = ['Japan','Hong Kong','Paris'];

for (var i = 0; i < myPlaces.length; i++) {
  console.log(myPlaces[i]);
  for (var j = 0; j < friendPlaces.length; j++) {
    if (myPlaces[i] === friendPlaces[j]) {
			 console.log('Match: ' + myPlaces[i]);
    }
  }
}