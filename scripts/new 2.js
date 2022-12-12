var i = 0;
var images = ["https://images.midilibre.fr/api/v1/images/view/6323778c7091c16033565973/full/image.jpg?v=1",
				"https://upload.wikimedia.org/wikipedia/commons/5/5c/Jordan_elgrafico_1992.jpg",
				"https://download.vikidia.org/vikidia/fr/images/c/c3/Jordan_by_Lipofsky_16577.jpg"] ;
var time = 3000;

function changeImg(){

document.changement.src = images[i];

if (i < images.length - 1) {
i++;
} 
else {
i = 0;
}
setTimeout("changeImg()", time);
}
window.onload = changeImg;