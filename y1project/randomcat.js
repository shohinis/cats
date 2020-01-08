var cats = ["static/cat1.jpg", "static/cat2.jpg", "static/cat3.jpg", "static/cat4.jpg", "static/cat5.jpg", "static/cat6.jpg", "static/cat7.jpg", "static/cat8.jpg", "static/cat9.jpg", "static/cat10.jpg", "static/cat11.jpg", "static/cat12.jpg"];
function randomCatGenerator(){
    var index = Math.floor(Math.random()*12);
    return cats[index];
}

document.body.innerHTML = "<img src=\"" + randomCatGenerator() + "\">";      