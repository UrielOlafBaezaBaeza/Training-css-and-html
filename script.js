function openTabProduct(tabproducts) {
    var i;
    var x = document.getElementsByClassName("tabproducts");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    document.getElementById(tabproducts).style.display = "grid";  
  }