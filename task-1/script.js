"use strict"

var divImgBig = document.querySelector(".container").appendChild(document.createElement("div"));
divImgBig.classList.add("img-big");
var imgBig = divImgBig.appendChild(document.createElement("img"));

for (var i = 1; i < 4; i++) {
    document.getElementById("p" + i).onclick = getImgBig;
}

function getImgBig(e) {
    imgBig.src = "img/big/p0" + e.target.id[1] + ".jpg";
}

imgBig.onerror = function() {
    alert("Error loading " + this.src);
}
