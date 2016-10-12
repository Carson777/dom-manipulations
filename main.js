
document.querySelector("#thanks button").addEventListener('click',function(){
  // TASK #1
  alert("yowch! don't click me so hard!")
})

document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2
  var compoundInvestment = document.querySelector('#compoundInvestment')
  var value = compoundInvestment.textContent
  compoundInvestment.textContent = value * 2
})


document.querySelector("#color-circle button").addEventListener('click',function(){
  // TASK #3
  var circle_bw = document.querySelector('#circle-bw')
  if(!(circle_bw.style.backgroundColor === "black")){
  	circle_bw.style.backgroundColor = "black"
  } else {
  	circle_bw.style.backgroundColor = "white"
  }
})

document.querySelector("#blow-up button").addEventListener('click',function(){
  // TASK #4}
  var circle_red = document.querySelector(".circle-red")
  var computedStyle = window.getComputedStyle(circle_red)
  console.log(computedStyle.width)
  if(parseInt(computedStyle.width) < 320){
  	circle_red.style.width = (parseInt(computedStyle.width) * 2) + "px"
  	circle_red.style.height = (parseInt(computedStyle.height) * 2) + "px"
	} else {
		circle_red.style.width = "40px"
		circle_red.style.height = "40px"
	}
})

document.querySelector("#remove button").addEventListener('click',function(){
  // TASK #5
  var list = document.querySelector("#userList")
  var listItems = list.children
  for(var i = 0; i < listItems.length; i++){
  	var currentItem = listItems[i]
  	if(currentItem.classList.contains("inactive")){
  		list.removeChild(currentItem)
      i--
  	}
  }
})


document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #6
  var squareContainer = document.querySelector(".squareContainer")
  var squares = squareContainer.children
  for(var i = squares.length-1; i >= 0; i--){
  		var tempSquare = squares[i]
  		squareContainer.appendChild(tempSquare)
  }
})

document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #7
  var taskList = document.querySelector("#tasks")
  var tasks = taskList.children
  	for(var i = 0; i < tasks.length; i++){
  		var tempTask = tasks[i].textContent
  		tasks[i].textContent = reverser(tempTask)
  	}
})

var reverser = function(inputString){
	var splitString = inputString.split('')
	var reverseArray = splitString.reverse()
	var reverseString = reverseArray.join("")
	return reverseString
}
var counter = 1
document.querySelector("#cycle-image button").addEventListener('click',function(){
  // TASK #8
  var cityImg = document.querySelector("#city-img")
  cityImg.src = "http://lorempixel.com/400/200/city/"
  cityImg.src = cityImg.src + counter
  counter++
})