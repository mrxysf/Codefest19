function onSubmit() {
  email = document.getElementById("inputEmail").value;
  password = document.getElementById("inputPassword").value;
  console.log(email, password);
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(user => {
      alert("Successfully signed in.");
      //user unique ID
      console.log(user.user.uid);
      //Redirect to home page.
      window.location.replace("../Pages/HomePage.html");
    })
    .catch(function (error) {
      // Handle Errors here.
      console.log("Failed to sign in");
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
      // ...
    });
}
