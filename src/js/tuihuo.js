window.onload=function(){
	var uploadBtn = document.getElementById("uploadBtn");
		var uploadfile = document.getElementById("uploadfile");
		var apply=document.getElementById("apply");
		var popBox=document.getElementById("popBox");
		var close=document.getElementById("close");
		apply.onclick=function(){
			popBox.style.display="block";
		}
		close.onclick=function(){
			popBox.style.display="none";
		}
		uploadBtn.onclick = function() {
			uploadfile.click();
		}
}