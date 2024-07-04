//your JS code here. If required.
let count=document.getElementById("counter")
 let   x=count.innerHTML

function inc(){
	alert(Number(x))
	x++
	count.innerHTML=x
}