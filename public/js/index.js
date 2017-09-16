$(document).ready(function(){
  $("#register-button").on("click", function(){
    var inputarea = "<h2>Enter Account Information:</h2><br>";
    inputarea += "<form>";
    inputarea += "Name:<br>";
    inputarea += "<input type='text' name='name'><br>";
    inputarea += "Username:<br>";
    inputarea += "<input type='text' name='username'><br>";
    inputarea += "Password:<br>";
    inputarea += "<input type='password' name='password'><br>";
    inputarea += "<button class='btn btn-primary' id='register-submit'><h3>Create an account</h3></button>";
    inputarea += "</form>";
    $("#login-area").html(inputarea);
  });
  $("#login-button").on("click", function(){
    var inputarea = "<h2>Enter Login Information</h2><br>";
    inputarea += "<form>";
    inputarea += "Username:<br>";
    inputarea += "<input type='text' name='username'><br>";
    inputarea += "Password:<br>";
    inputarea += "<input type='password' name='password'><br>";
    inputarea += "<button class='btn btn-primary' id='login-submit'><h3>Login</h3></button>";
    inputarea += "</form>";
    $("#login-area").html(inputarea);
  });
});