var content = "";
db.collection("users")
  .get()
  .then(snapshot => {
    snapshot.docs.forEach(doc => {
      user = doc.data();
      content += `<tr onclick='enlarge(this.childNodes[0].innerHTML, this.childNodes[1].innerHTML, this.childNodes[2].innerHTML)'><td>${
        user.email
      }</td><td>${user.state}</td><td>HEllo</td></tr>`;
    });
  })
  .then(() => {
    console.log(content);
    table = document.getElementById("items");
    table.innerHTML = content;
  });

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log(user.uid);
  } else {
    // No user is signed in.
  }
});

function enlarge(type, address, user) {
  window.location.replace(
    `../Pages/FindingPage.html?address=${address}&user=${user}&type=${type}`
  );
}

function signOut() {
  auth
    .signOut()
    .then(function() {
      alert("Successfully signed out.");
    })
    .catch(function(error) {
      "Couldn't sign out. Error: ", error;
    });
}
