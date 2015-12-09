/* javascript file for registration form */
//giving the alert message to user
function alertId(id) {
    var value = document.getElementById(id).value;
    var divId = id + "Div";
    var div = document.getElementById(divId);
    if (value === "") {
        div.classList.remove('hide');
    }
}
//hiding the alert div after change
function hideAlertDiv(id) {
    var value = document.getElementById(id).value;
    var divId = id + "Div";
    var div = document.getElementById(divId);
    if (value !== "") {
        div.classList.add('hide');
    }
}
//calculating age to display
function getAge() {
    var getDate = document.getElementById('dateofbirth').value;
    var curDate = new Date();
    var date = new Date(getDate);
    var curYear = curDate.getFullYear();
    var year = date.getFullYear();
    var age = curYear - year;
    document.getElementById('age').value = age;
}
//verifying password and re type password
function verifyPassword() {
    var password = document.getElementById('password').value;
    var retypePassword = document.getElementById('retypepassword').value;
    if (password === "") {
        document.getElementById('passwordDiv').classList.remove('hide');
    } else { if (password.length < 6) {
              document.getElementById('passwordwarnDiv').classList.remove('hide');
           } else {
                document.getElementById('passwordDiv').classList.add('hide');
                document.getElementById('passwordwarnDiv').classList.add('hide');
             }
      }
    if (retypePassword === "") {
        document.getElementById('retypepasswordDiv').classList.remove('hide');
    } else { if (password !== retypePassword) {
              document.getElementById('retypepasswordwarnDiv').classList.remove('hide');
           } else {
                document.getElementById('retypepasswordDiv').classList.add('hide');
                document.getElementById('retypepasswordwarnDiv').classList.add('hide');
             }
      }
}
//verifying email is valid or not
function verifyEmail() {
    var email = document.getElementById('email').value;
    if (email === "") {
        document.getElementById('emailDiv').classList.remove('hide');
    } else { if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                document.getElementById('emailDiv').classList.add('hide');
                document.getElementById('emailwarnDiv').classList.add('hide');
           } else {
                document.getElementById('emailwarnDiv').classList.remove('hide');
             }
      }
}
//verifying mobile no length
function verifyMobileno() {
    var mobileno = document.getElementById('mobileno').value;
    if (mobileno === "") {
        document.getElementById('mobilenoDiv').classList.remove('hide');
    } else { if (mobileno.length !== 10) {
                document.getElementById('mobilenowarnDiv').classList.remove('hide');
           } else {
                document.getElementById('mobilenoDiv').classList.add('hide');
                document.getElementById('mobilenowarnDiv').classList.add('hide');
             }
      }
}
//displaying the dateails in popup
function popup() {
    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var name = firstname + " " + lastname;
    var dob = document.getElementById('dateofbirth').value;
    var email = document.getElementById('email').value;
    var username = document.getElementById('username').value;
    var city = document.getElementById('city').value;
    var mobileno = document.getElementById('mobileno').value;
    var password = document.getElementById('password').value;
    var retypePassword = document.getElementById('retypepassword').value;
    var verificationcode = document.getElementById('verificationcode').value;
    var age = document.getElementById('age').value;
    if (firstname === "") {
        document.getElementById('firstnameDiv').classList.remove('hide');
    } else {
          document.getElementById('firstnameDiv').classList.add('hide');
      }
    if (lastname === "") {
        document.getElementById('lastnameDiv').classList.remove('hide');
    } else {
          document.getElementById('lastnameDiv').classList.add('hide');
      }
    if (dob === "") {
        document.getElementById('dateofbirthDiv').classList.remove('hide');
    } else {
          document.getElementById('dateofbirthDiv').classList.add('hide');
      }
    if (city === "") {
        document.getElementById('cityDiv').classList.remove('hide');
    } else {
          document.getElementById('cityDiv').classList.add('hide');
      }
    if (email === "") {
        document.getElementById('emailDiv').classList.remove('hide');
    } else { if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
              document.getElementById('emailDiv').classList.add('hide');
              document.getElementById('emailwarnDiv').classList.add('hide');
             } else {
                  document.getElementById('emailwarnDiv').classList.remove('hide');
               }
      }
    if (username === "") {
        document.getElementById('usernameDiv').classList.remove('hide');
    } else {
          document.getElementById('usernameDiv').classList.add('hide');
      }
    if (mobileno === "") {
        document.getElementById('mobilenoDiv').classList.remove('hide');
    } else { if (mobileno.length !== 10) {
                document.getElementById('mobilenowarnDiv').classList.remove('hide');
             } else {
                  document.getElementById('mobilenoDiv').classList.add('hide');
                  document.getElementById('mobilenowarnDiv').classList.add('hide');
               }
      }
    if (password === "") {
        document.getElementById('passwordDiv').classList.remove('hide');
    } else { if (password.length < 6) {
                document.getElementById('passwordwarnDiv').classList.remove('hide');
             } else {
                  document.getElementById('passwordDiv').classList.add('hide');
                  document.getElementById('passwordwarnDiv').classList.add('hide');
               }
      }
    if (retypePassword === "") {
        document.getElementById('retypepasswordDiv').classList.remove('hide');
    } else { if (retypePassword !== password) {
                document.getElementById('retypepasswordwarnDiv').classList.remove('hide');
             } else {
                  document.getElementById('retypepasswordDiv').classList.add('hide');
                  document.getElementById('retypepasswordwarnDiv').classList.add('hide');
               }
      }
    if (verificationcode === ""){
        document.getElementById('verificationcodeDiv').classList.remove('hide');
    } else {
          document.getElementById('verificationcodeDiv').classList.add('hide');
      }
    if ((firstname !== "") && (lastname !== "") && (dob !== "") && (email !== "") && (username !== "") && (city !== "") && (mobileno !== "") && (password !== "") && (retypePassword !== "") && (verificationcode !== "")) {
        alert("name: " + name + "\nDateofbirth: " + dob + "\n Age: "+ age +"\n Email-id: " + email + "\nusername: "+ username +"\ncity: " + city +"\nmobileno: +91" + mobileno);
        clear();
    }
}
function clear() {
    document.getElementById('firstname').value = "";
    document.getElementById('lastname').value = "";
    document.getElementById('dateofbirth').value = "";
    document.getElementById('email').value = "";
    document.getElementById('username').value = "";
    document.getElementById('city').value = "";
    document.getElementById('mobileno').value = "";
    document.getElementById('password').value = "";
    document.getElementById('retypepassword').value = "";
    document.getElementById('verificationcode').value = "";
    document.getElementById('male').removeAttribute('checked');
    document.getElementById('female').removeAttribute('checked');
    document.getElementById('agreecheckbox').removeAttribute('checked');
    document.getElementById('age').value = "";
}
