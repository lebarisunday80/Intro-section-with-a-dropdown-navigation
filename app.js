function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  window.onclick = function (e) {
    if (!e.target.matches(".dropbtn")) {
      var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains("show")) {
        myDropdown.classList.remove("show");
      }
    }
  };
  
  function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show");
  }
  
  window.onclick = function (e) {
    if (!e.target.matches(".dropbtn2")) {
      var myDropdown = document.getElementById("myDropdown2");
      if (myDropdown.classList.contains("show")) {
        myDropdown.classList.remove("show");
      }
    }
  };