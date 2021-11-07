/*HTML DOMS for search page*/
var slider = document.getElementById("cost-range");
var output = document.getElementById("demo");

output.innerText = slider.value;
slider.oninput = function() {
    output.innerHTML = this.value;
  }

/*Review page*/
const btn = document.querySelector("button");
const post = document.querySelector(".post");
const widget = document.querySelector(".star-widget");
const editBtn = document.querySelector(".edit");
		
btn.onclick = ()=>{
	widget.style.display = "none";
	post.style.display = "block";
	editBtn.onclick = ()=>{
	widget.style.display = "block";
	post.style.display = "none";
	}
return false;
}


 