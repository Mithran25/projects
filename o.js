function validateForm() {
    var x = document.forms["myForm"]["Uname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
   
    var x = document.forms["myForm"]["Pass"].value;
    if (x == "") {
      alert("Password Required");
      return false;
   
  }
 
}