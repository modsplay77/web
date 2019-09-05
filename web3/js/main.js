window.onload=inicio;
menu_visible=false;
function inicio(){
	document.getElementById("burger").onclick=menu;
}

function menu(){
	if (menu_visible==false){
		document.getElementById("nav").style.visibility="visible";
		menu_visible=true;
	}else{
		document.getElementById("nav").style.visibility="hidden";
		menu_visible=false;
	}
}
