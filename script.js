// Theme Toggle
const themeBtn = document.getElementById('theme-btn');
const htmlTag = document.documentElement;

themeBtn.addEventListener('click', () => {
  let currentTheme = htmlTag.getAttribute("data-theme");
  let newTheme = currentTheme === "dark" ? "light" : "dark";
  htmlTag.setAttribute("data-theme", newTheme);
  themeBtn.textContent = newTheme === "dark" ? "☀️" : "🌙";
  localStorage.setItem('theme', newTheme);
});

window.onload = () => {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  htmlTag.setAttribute("data-theme", savedTheme);
  themeBtn.textContent = savedTheme === "dark" ? "☀️" : "🌙";
};

// Typing Animation
const typeEffect = document.querySelector('.type-effect');
const text = "Md Asif Ikbal";
let i = 0;
function type() {
  if (i < text.length) {
    typeEffect.innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 100);
  }
}
type();

// Scroll to Top
const topBtn = document.getElementById("topBtn");
window.onscroll = () => {
  if (document.documentElement.scrollTop > 200) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};
function scrollToTop() {
  document.documentElement.scrollTop = 0;
}
