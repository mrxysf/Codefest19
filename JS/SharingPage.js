function onSubmit() {
  var currentUser = auth.currentUser;
  type = document.getElementById("inputType").value;
  address = document.getElementById("inputAddress").value;
  description = document.getElementById("inputDescription").value;

  console.log(this.currentUser);
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
    })
    .catch(error => alert("Error writing document: ", error));
}
