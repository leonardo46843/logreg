const container = document.querySelector(".container");
const registerLink = document.querySelector(".reg-link");
const loginLink = document.querySelector(".log-link");

registerLink.onclick = () => {
  container.classList.add("active");
};

loginLink.onclick = () => {
  container.classList.remove("active");
};
