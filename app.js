const hexCharacters = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];

const quotes = [
  "Il y a deux façons d'écrire des programmes sans erreurs; seulement la troisième fonctionne.",
  "Pour comprendre ce qu'est la récursivité, il faut d'abord comprendre ce qu'est la récursivité.",
  "Si à première vue tu ne réussis pas, alors débogage, débogage et débogage !",
  "Le meilleur moyen de prédire l'avenir du web, c'est de le coder.",
  "Le meilleur moyen de se débarrasser d'un bug, c'est de le transformer en fonctionnalité.",
  "Je ne déteste pas le CSS, je l'apprécie à sa juste valeur.",
  "Un bon programmeur est celui qui regarde des deux côtés avant de traverser une rue à sens unique.",
  "La théorie, c'est quand on sait tout et que rien ne fonctionne. La pratique, c'est quand tout fonctionne et que personne ne sait pourquoi. Ici, nous avons réuni théorie et pratique : Rien ne fonctionne... et personne ne sait pourquoi !",
  "Le langage de programmation que vous appréciez le plus est généralement celui dans lequel vous étiez le plus compétent.",
];

const btn = document.querySelector("#btn");
const main = document.querySelector("main");
const quotation = document.querySelector("#citation");
const icon = document.querySelector("#quote");

function generateColor() {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    const randomHex =
      hexCharacters[Math.floor(Math.random() * hexCharacters.length)];
    hexColor = hexColor + randomHex;
  }
  icon.style.color = hexColor;
  btn.style.backgroundColor = hexColor;
  main.style.backgroundColor = hexColor;
}
btn.addEventListener("click", function () {
  generateColor();
  generateQuotes();
});

function generateQuotes() {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  quotation.textContent = randomQuote;
}
