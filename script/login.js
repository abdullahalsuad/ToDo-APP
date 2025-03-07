const userName = localStorage.getItem("userName");
const form = document.getElementById("nameForm");

if (userName) {
  window.location.href = "../home.html";
} else {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();

    if (name) {
      localStorage.setItem("userName", name);
      window.location.href = "../home.html";
    } else {
      alert("Please enter your name.");
    }
  });
}

