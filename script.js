const loginBtn = document.getElementById("login-btn");
const welcomeNode = document.getElementById("welcome-section");
const btnSection = document.getElementById("btn-section");

let isLogged = false;
let logoutBtn = document.createElement("button");
logoutBtn.textContent = "Logout";

function login() {
  if (isLogged === false) {
    isLogged = true;
    localStorage.setItem("isLogged", isLogged);
    let welcome = document.createElement("h1");
    loginBtn.remove();
    welcome.textContent = "Benvenuto!";
    welcomeNode.appendChild(welcome);
    btnSection.appendChild(logoutBtn);
  }
}

function logout() {
  isLogged = false;
  localStorage.setItem("isLogged", isLogged);
  welcomeNode.innerHTML = "";
  btnSection.innerHTML = "";
  btnSection.appendChild(loginBtn);
}

function check() {
  if (localStorage.getItem("isLogged") === "true") {
    login();
  } else {
    logout();
  }
}

loginBtn.addEventListener("click", login);
logoutBtn.addEventListener("click", logout);
window.addEventListener("load", check);
