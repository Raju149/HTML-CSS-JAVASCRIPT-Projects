//inputbox problem solving
const inputBox=document.querySelector(".inputfield input");
const addBtn=document.querySelector(".inputfield button");
inputBox.onkeyup =()=>{
	let userData=inputBox.value;
	if(userData.trim()!=0){
		addBtn.classList.add("active");
	}
	else{
		addBtn.classList.remove("active");
	}
}
//add item

function addItem(){
	var addValue=document.getElementById('enterData').value;
	$('#candiate').append('<li class="listItem">'+addValue+'<span><i class="fas fa-trash"></i></span></li>');
	enterData.value="";
	addBtn.classList.remove("active");
}
//clear all
$("#clear").click(function(){
	$('#candiate').empty();
})

//deleting list item
var close=document.querySelectorAll('span')
for(let i=0;i<close.length;i++){
	close[i].addEventListener("click",()=>{
		close[i].parentElement.style.display="none";
	});
}
//displaying time
function systemTime(){
	let date=new Date();	//getting date
	let hrs=date.getHours();
	let mins=date.getMinutes();
	let secs=date.getSeconds();
	let period="AM";
	if (hrs==0){
		hrs=12;
	}
	if(hrs>12){
			hrs=hrs-12;
			period="PM";
	}
	hrs=hrs<10 ? "0"+hrs:hrs;
	mins=mins<10 ? "0"+mins:mins;
	secs=secs<10 ? "0"+secs:secs;

	let time=hrs+" : "+mins+" : "+secs+" "+period;
	document.getElementById("clock").innerText=time;
	setTimeout(function(){
		systemTime()
	},1000);
};
systemTime();

$("#clear").click(function(){
	$(".modal")
})

/*var inputText=document.querySelector("#enterData");
var btn=document.querySelector(".addItem");
var list=document.querySelector(".todolist")
btn.addEventListener('click',(e)=>{
	if(inputText!=""){
		e.preventDefault();
		var myLi=document.createElement('li');
		myLi.innerHTML=inputText.value;
		list.appendChild(myLi);
		var mySp=document.createElement('span');
		mySp.innerHTML="x"
		myLi.appendChild(mySp);
	}
})
;/*


/*function deleteItem(){
	//var deleteValue=document.getElementById('enterData').value;
	$('.listItem').remove();
}*/

/*$(document).ready(function(){
	$("#clear").click(function(){
		
	});
});*/
