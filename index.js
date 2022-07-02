
var navContainer = document.getElementById("premier-topnav");
var nav = navContainer.getElementsByClassName("nav-item");
for (var i = 0; i < nav.length; i++) {
  nav[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    if (current.length > 0) {
      current[0].className = current[0].className.replace("active", "");
    }
    this.className += "active";
    
  });
  
}
