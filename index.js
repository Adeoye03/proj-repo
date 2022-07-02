function setActive() {
    linkObj = document.getElementById('premier-topnav').getElementsByTagName('a');
    for(i=0;i<linkObj.length;i++){
        if (document.location.pathname === linkObj[i].getAttribute('href')>=0) {
          linkObj[i].classList.add("active")
        }
    }
        
    }
    window.onload = setActive;