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

// function addZero(i) {
// 	if(i < 10) {
// 		return "0" + i
// 	} else {
// 		return i
// 	}
// }


function getDate() {
	var date = new Date()
	var hour = date.getHours()
	var min = date.getMinutes()
	var sec = date.getSeconds()
	var month = date.getMonth() + 1
	var day = date.getDate()
	var year = date.getFullYear()


	if(hour < 10){
		hour = "0" + hour
	}
	if(min < 10){
		min = "0" + min
	}
	if(sec < 10) {
		sec = "0" + sec
	}
	if(month < 10) {
		month = "0" + month
	}
	if(day < 10) {
		day = "0" + day
	}


	var displayDate = month + "/ " + day + "/ " + year
	var showTime = hour + ": " + min + ": " + sec


	document.body.innerText = displayDate + " " + showTime;

	setTimeout(function() {
		getDate();
	},1000)
}

getDate();
