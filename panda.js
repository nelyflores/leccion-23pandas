var img=document.getElementsByClassName("imagen");
console.log(img);
var longitud=img.length;

for(var i=0;i<longitud; i++){
		img[i].addEventListener( 'click', borrar);
	}
	function borrar () {
		this.style.display = "none";
		
	}