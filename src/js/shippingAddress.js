window.onload=function(){
	var province = document.getElementById("province");
	var box = document.getElementById("box");
	var clear=document.getElementById('clear');
	var txt=document.getElementById('txt');
	var newDress_box=document.getElementById("newDress_box");
	var addDress1=document.getElementById("addDress1");
	var save=document.getElementById("save");
	var address_box=document.getElementById("address_box").getElementsByTagName("div");


	
	// address_left.onclick=function(){
	// 	address_left.style.cssText="border:2px solid #fb9898";
	// }
	for(var i=0;i<address_box.length;i++){
			address_box[i].onclick=function(){
				for(var i=0;i<address_box.length;i++){
						if(this==address_box[i]){
								address_box[i].style.cssText="border:2px solid #fb9898;";
								address_box[i].style.backgroundPosition=447+'px '+-1222+'px';

						}else{
							address_box[i].style.cssText="";
						}
				}
			}
	}

	addDress1.onclick=function(){
		newDress_box.style.display="block";
	}
	save.onclick=function(){
		newDress_box.style.display="none";
	}

	clear.onclick=function(){
		txt.value="";
	}
	province.onchange= function() {
		box.style.display = "block";
	}
}