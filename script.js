let currentQuote = "";
let currentAuthor = "";

function getRandomQuote() {
  return quotesData[Math.floor(Math.random() * quotesData.length)];
}

function getQuote() {
  const randomQuote = getRandomQuote();

  currentQuote = randomQuote.quote;
  currentAuthor = randomQuote.author;

  document.getElementById("text").textContent = currentQuote;
  document.getElementById("author").textContent = currentAuthor;

  const colors = [
    "#16a085",
    "#27ae60",
    "#2c3e50",
    "#f39c12",
    "#e74c3c",
    "#9b59b6",
    "#FB6964",
    "#342224",
    "#472E32",
    "#BDBB99",
    "#77B1A9",
    "#73A857",
  ];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
  document.body.style.color = randomColor;
  document.querySelectorAll(".button").forEach((button) => {
    button.style.backgroundColor = randomColor;
  });
}

document.addEventListener("DOMContentLoaded", function () {
  getQuote();

  document.getElementById("new-quote").addEventListener("click", getQuote);
});
