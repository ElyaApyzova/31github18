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
    "#88AB8E",
    "#9BB8CD",
    "#FF90BC",
    "#7ED7C1",
    "#DC8686",
    "#776B5D",
    "#F9B572",
    "#BEADFA",
    "#FF8080",
    "#ECEE81",
    "#116A7B",
    "#867070",
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
