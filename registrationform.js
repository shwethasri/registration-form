function alertId(id) {
    var value = document.getElementById(id).value;
    if (value === "") {

        document.getElementById(id+'Div').className.replace('hide','show');
    }
}
function popup() {
  var name = document.getElementById('firstname').value + " " + document.getElementById('lastname').value;
  var dob = document.getElementById('dateofbirth').value;
  var email = document.getElementById('email').value;
  var username = document.getElementById('username').value;
  var city = document.getElementById('city').value;
  var mobileno = document.getElementById('mobileno').value;
  alert("name: " + name + "\nDateofbirth: " + dob +"\n Email-id: " + email + "\nusername: "+ username +"\ncity: " + city +"\nmobileno: " + mobileno);
  clear();
}
function clear() {
    document.getElementById('firstname').value = "";
    document.getElementById('lastname').value = "";
    document.getElementById('dateofbirth').value = "";
    document.getElementById('email').value = "";
    document.getElementById('username').value = "";
    document.getElementById('city').value = "";
    document.getElementById('mobileno').value = "";
}
