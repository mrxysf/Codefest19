function onSubmit() {
  var currentUser = auth.currentUser;
  type = document.getElementById("inputType").value;
  address = document.getElementById("inputAddress").value;
  description = document.getElementById("inputDescription").value;

  db.collection("users")
    .doc(currentUser.uid)
    .collection("itemList")
    .add({
      type: type,
      address: address,
      description: description
    })
    .then(ref => {
      console.log("Successful ID:", ref.id);
      window.location.replace("../Pages/HomePage.html");
    })
    .catch(error => alert("Error writing document: ", error));
}
