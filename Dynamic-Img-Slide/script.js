var URL = "/pics/";
var id = 100000; // default

function display(){
  var displayID = document.getElementById("displayID");
  var text = "ID:"+String(id);
  displayID.innerHTML = text;
}

function prevImg(){
  if(id > 100000){
    id--;
  }
  const Img = document.getElementById("image");
  Img.src = URL+String(id)+".jpg";
  display();
};
function nextImg(){
  if(id <= 100020){
    id++;
  }
  const Img = document.getElementById("image");
  Img.src = URL+String(id)+".jpg";
  display();
};

function search(){
  var text = document.getElementById("searchBar").value;
  const Img = document.getElementById("image");
  id = parseInt(text);
  Img.src = URL+String(id)+".jpg";
  display();
}

function init(){
  const Img = document.getElementById("image");
  Img.src = URL+String(id)+".jpg";
  display();
}