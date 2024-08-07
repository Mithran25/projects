function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
   
    var x = document.forms["myForm"]["DOB"].value;
    if (x == "") {
      alert("DOB Required");
      return false;
   
    }

    var x = document.forms["myForm"]["gender"].value;
    if (x == "") {
      alert("gender required");
      return false;
    }
   
    var x = document.getElementById("Addr").value;
    if (x == "") {
      alert("address Required");
      return false;
   
    }

    var x = document.forms["myForm"]["Email"].value;
    if (x == "") {
      alert("Email must be filled out");
      return false;
    }
   
    var x = document.forms["myForm"]["Cont"].value;
    if (x == "") {
      alert("Contact Required");
      return false;
   
    }

    var x = document.forms["myForm"]["Iname"].value;
    if (x == "") {
      alert("Institution Required");
      return false;
   
    }

    var x = document.forms["myForm"]["Deg"].value;
    if (x == "") {
      alert("Degree Required");
      return false;
   
    }

    var x = document.forms["myForm"]["Bran"].value;
    if (x == "") {
      alert("Branch Required");
      return false;
   
    }

    var x = document.forms["myForm"]["yr"].value;
    if (x == "") {
      alert("Year Required");
      return false;
   
    }

    var x = document.forms["myForm"]["Sem"].value;
    if (x == "") {
      alert("Semester Required");
      return false;
    
    }
 
}
