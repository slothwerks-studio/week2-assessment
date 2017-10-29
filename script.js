(function() {

  var user = {
    name: "Grant Chirpus",
    email: "coolguy@gmail.com",
    password: "ILoveCoffee"
  };

  var welcomeBlock = document.getElementById("welcomeBlock");
  var loginForm = document.getElementById("loginForm");
  var headerMessage = document.getElementById("header");
  var formInputArea = document.getElementById("formInputArea");
  var emailInput = document.getElementById("emailInput");
  var passwordInput = document.getElementById("passwordInput");
  var submitButton = document.getElementById("submitButton");
  var wrongInfoMessage = document.getElementById("wrongPassword");
  var subTextMessage = document.getElementById("subText");

  // console.log(subTextMessage.innerHTML)

  submitButton.onclick = checkLogin;

  function checkLogin() {

    var email = emailInput.value;
    var password = passwordInput.value;
    
    // console.log(email);
    // console.log(password);
    
    if (email === user.email && password === user.password) {
      displayWelcome();
    } else {
      wrongInfo();
    }
  }

  function wrongInfo() {
    wrongInfoMessage.innerHTML = "Login Credentials Incorrect.";
  }

  function displayWelcome() {
    loginForm.style.width = "400px";
    document.body.style.paddingTop = "60px";
    headerMessage.innerHTML = "Welcome, Grant Chirpus!";
    document.body.removeChild(welcomeBlock);
    formInputArea.removeChild(emailInput);
    formInputArea.removeChild(passwordInput);
    formInputArea.removeChild(submitButton);
    loginForm.removeChild(wrongInfoMessage);
    subTextMessage.innerHTML = '<a href="/logout/">Log Out</a>';
    
    subTextMessage.onclick = resetForm;
    
    function resetForm() {
      location.reload();
    }
    
  }

})();

