var myArr = [5.12, 6.23, 20.59, 18.78, 0.47]
var newArr = [];
for(i = 0; i < myArr.length; i++) {
	var newNum = Math.ceil(myArr[i]);
	newArr.push(newNum);
	console.log(newArr)
}


// 6


function popNum() {
	var numArr = [];
	for(i = 0; i < 10; i++) {
		var randomNum = Math.round(Math.random()*100)
		numArr.push(randomNum);
	}
	return numArr
}
console.log(popNum())

// 7

function getDate() {
	var date = new Date()
	var hour = date.getHours()
	var min = date.getMinutes()
	var sec = date.getSeconds()

	if(hour < 10){
		hour = "0" + hour
	}
	if(min < 10){
		min = "0" + min
	}
	if(sec < 10) {
		sec = "0" + sec
	}
	var showDate = hour + ": " + min + ": " + sec
	document.body.innerHTML = "<h1>" + showDate +"</h1>"
}
console.log(getDate());