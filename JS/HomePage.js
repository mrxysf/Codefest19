var content = "";
var userList = [];
db.collection("users")
  .get()
  .then(snapshot => snapshot.docs.forEach(doc => userList.push(doc.id)))
  .then(() => {
    for (i = 0; i < userList.length; i++) {
      console.log(userList[i]);
      db.collection("users")
        .doc(userList[i])
        .collection("itemList")
        .get()
        .then(snapshot =>
          snapshot.docs.forEach(doc => {
            data = doc.data();
            console.log(data);
            content += `<tr onclick='enlarge(this.childNodes[0].innerHTML, this.childNodes[1].innerHTML, this.childNodes[2].innerHTML)'><td>${
              data.type
            }</td><td>${data.address}</td><td>${data.description}</td></tr>`;
          })
        )
        .then(() => {
          table = document.getElementById("items");
          table.innerHTML = content;
        });
    }
  });
console.log(userList);

// .get()
// .then(snapshot => {
//   snapshot.docs.forEach(doc => {
//     console.log(doc);
//     user = doc.data();
//     content += `<tr onclick='enlarge(this.childNodes[0].innerHTML, this.childNodes[1].innerHTML, this.childNodes[2].innerHTML)'><td>${
//       user.email
//     }</td><td>${user.state}</td><td>HEllo</td></tr>`;
//   });
// })
// .then(() => {
//   table = document.getElementById("items");
//   table.innerHTML = content;
// });

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
