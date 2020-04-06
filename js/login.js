// window.onload = function () {
//   checkUser();
// };
// function checkUser() {
//   const loggedInUser = JSON.parse(localStorage.getItem("currentUser"));
//   if (loggedInUser) {
//     window.document.location = `./myTodo.html` + `?userName=${loggedInUser}`;
//     return;
//   }
// }
function validateUser() {
  document.querySelector("#passwordError").innerHTML = "";
  document.querySelector("#userNotFoundError").innerHTML = "";
  const loginInformation = document.querySelector("#loginForm");
  const userName = loginInformation.userName.value;
  const password = loginInformation.password.value;
  const databaseUsers = getDataFromLocalStorage("usersList");
  let validUser = databaseUsers.filter(function (e) {
    if (e.userName == userName) {
      if (e.password == password) {
        return e.userName;
      } else {
        document.querySelector("#passwordError").innerHTML =
          "Incorrect password!";
      }
    }
  });
  if (
    (!validUser || validUser.length == 0) &&
    document.querySelector("#passwordError").innerHTML == ""
  ) {
    document.querySelector("#userNotFoundError").innerHTML = "User not found.";
    return;
  }
  window.user = validUser[0].userName;

  localStorage.setItem("currentUser", JSON.stringify(validUser[0].userName));
  window.document.location =
    `./myTodo.html` + `?userName=${validUser[0].userName}`;
}

function getDataFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
