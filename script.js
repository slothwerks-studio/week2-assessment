(function() {

  const user = {
    name: "Grant Chirpus",
    email: "coolguy@gmail.com",
    password: "ILoveCoffee"
  };

  const submitButton = document.getElementById("submitButton");




  var formInputArea = document.getElementById("formInputArea");

  submitButton.onclick = checkLogin;

  function checkLogin() {

    const email = document.getElementById("emailInput").value;
    const password = document.getElementById("passwordInput").value;
    
    // console.log(email);
    // console.log(password);
    
    if (email === user.email && password === user.password) {
      displayWelcome();
    } else {
      wrongInfo();
    }
  }

  function wrongInfo() {
    document.getElementById("wrongPassword").innerHTML = "Login Credentials Incorrect.";
  }

  function displayWelcome() {

    document.getElementById("loginForm").style.width = "460px";
    document.body.style.paddingTop = "80px";
    document.querySelector("h1").innerHTML = "Welcome, Grant Chirpus!";
    document.querySelector("h1").style.marginBottom = "60px";
    const welcomeBlock = document.getElementsByClassName("welcomeBlock")[0];
    document.body.removeChild(welcomeBlock);
    const loginForm = document.getElementById("loginForm");
    loginForm.style.paddingBottom = "10px";
    const formInputArea = loginForm.querySelector("div");
    loginForm.removeChild(formInputArea);
    loginForm.removeChild(submitButton);
    document.getElementsByClassName("subText")[0].innerHTML = '<a href="index.html">Log Out</a>';
    
  }

})();

