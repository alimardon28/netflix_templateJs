let acardion = document.querySelectorAll(".acardion");
let acardionOpen = document.querySelector(".acardion-open");

let elForm = document.querySelector("#forms");

let elInputEmail = document.querySelector(".input-username");
let elInputPassword = document.querySelector(".input-password");

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  const emailValue = elInputEmail.value;
  const passwordValue = elInputPassword.value;

  fetch("https://reqres.in/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      email: emailValue,
      password: passwordValue,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data?.token) {
        window.localStorage.setItem("token", data.token);

        window.location.replace("index.html");
      } else {
        alert("default holatdagini kirgizing");
      }
    });
});

const signIn = document.querySelector("#signIn");
const modal = document.querySelector(".modal");

signIn.addEventListener("click", () => {
  modal.classList.toggle("active");
});

acardion.forEach((item) => {
  let acardionOpen = item.nextElementSibling;

  item.addEventListener("click", () => {
    item.classList.toggle("active");

    if (acardionOpen.style.maxHeight) {
      acardionOpen.style.maxHeight = null;
    } else {
      acardionOpen.style.maxHeight = acardionOpen.scrollHeight + "px";
    }
  });
});
