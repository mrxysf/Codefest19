function onSubmit() {
  email = document.getElementById("inputEmail").value;
  password = document.getElementById("inputPassword").value;
  state = document.getElementById("inputState").value;
  console.log(email, password);
  auth
    .createUserWithEmailAndPassword(email, password)
    .then(user => {
      alert("Successfully signed in.");
      //user unique ID
      console.log(user.user.uid);
      //Write data
      db.collection("users")
        .doc(user.user.uid)
        .set({
          email: email,
          state: state
        })
        .then(() => {
          console.log("Successful");
        })
        .catch(error => alert("Error writing document: ", error));
    })
    .catch(function(error) {
      // Handle Errors here.
      console.log("Failed to sign in");
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
      // ...
    });
}
