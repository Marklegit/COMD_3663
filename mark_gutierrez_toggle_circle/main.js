let toggleShape = () => {
	const changeShape = document.querySelector(".shape");
	//const textChange = document.querySelector(".textFill");
	const titleChange = document.querySelector(".title");
	changeShape.style.height = "200px";
	changeShape.style.width = "200px";
	changeShape.style.backgroundImage = "linear-gradient(black, red, yellow)";
	changeShape.style.margin = "10px auto 10px";
	if(changeShape.style.borderRadius === ""){
		changeShape.style.borderRadius = "50%"
		changeShape.style.backgroundColor = "red";
		changeShape.style.backgroundImage = "";
		changeShape.style.border = "";
		//textChange.innerHTML = "Japan";
		titleChange.innerHTML = "Japan"
	} else {
		changeShape.style.borderRadius = "";
		changeShape.style.backgroundColor = "gold";
		changeShape.style.border = "1px solid black";
		//textChange.innerHTML = "Germany"
		titleChange.innerHTML = "Germany";
	}
}

function clearContent(){
	window.location.reload();
}

const toggleBtn = document.querySelector(".toggle_btn");
toggleBtn.addEventListener("click", toggleShape);

const refreshBtn = document.querySelector(".refresh_browser");
refreshBtn.addEventListener("click", clearContent);