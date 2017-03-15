 // - Functions are written to perform a task.
 // - Functions take data or variables, perform a set of tasks on them, and then return the result.
 // - We can define parameters when calling the function.
 // - When calling a function, we can pass in arguments, which will set the function's parameters.
 // - We can use return to return the result of a function which allows us to call functions anywhere, even inside other functions.

var orderCount = 0;

function takeOrder(topping, crustType) {
  orderCount = orderCount + 1;
  console.log('Order: ' + crustType + ' pizza' + ' topped with ' + topping);
}
function getSubTotal(itemCount) {
  return itemCount * 7.5;
}

takeOrder('bacon', 'thin crust');
takeOrder('chicken', 'thick crust');
takeOrder('beef', 'regular crust');

console.log(getSubTotal(orderCount));

function getTax(){
  return getSubTotal(orderCount) * 0.06;
}

function getTotal() {
  return getSubTotal(orderCount) + getTax();
}

console.log(getTotal());