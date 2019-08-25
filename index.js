let goUp = document.querySelector(".goUp");
let signIn = document.querySelector("button");
let buttons = document.querySelectorAll(".category-button");
let url = "http://b2c61bb1.ngrok.io/horizontal-plot.png";
let api = "https://0d19b8f7.ngrok.io/api/products";
let container = document.querySelector(".canvas");
let counter = 0;
let cardContainer = document.querySelector(".cards-container");
console.log(cardContainer);

let titles = ["EACH", "FFLCH", "Poli", "ICMC", "FEA"];
let description = [
  "Escola de artes, ciências e humanidades da Universidade de São Paulo. Localizada na zona leste de São Paulo. Possui 11 cursos de graduação, 4129 alunos de graduação matriculados, e mais de 200 docentes.",
  "Faculdade de filosofia, letras e ciências humanas da Universidade de São Paulo, localizada no campus Butantã.12821 alunos matriculados, 433 docentes e 5 cursos de graduação.",
  "Escola Politécnica da Universidade de São Paulo, localizada no campus Butantã. Criada em 1893. Possui 17 cursos de Engenharia, 5057 alunos matriculados e 425 docentes.",
  "Instituto de Ciências Matemáticas e Computação da Universidade de São Paulo, localizada em São Carlos. Possui 2173 alunos matriculados, 131 docentes e 6 cursos de graduação.",
  "Faculdade de Economia de Admnistração da Universidade de São Paulo, localizada no campus Butantã. Possui 3775 alunos matriculados, 135 docentes e 4 cursos de graduação."
];

try {
  goUp.addEventListener("click", () => {
    window.scrollTo(0, 0);
  });
} catch (err) {}

const redirect = () => {
  try {
    window.location.href =
      "https://accounts.google.com/ServiceLogin/identifier?service=CPanel&flowName=GlifWebSignIn&flowEntry=AddSession";
  } catch (error) {}
};
buttons.forEach(button => {
  button.addEventListener("onmouseover", () => {});
});

// console.log(fetchData(api));
try {
  container.innerHTML += `<div class="data-container">
<h1 class="data-title">${titles[0]}</h1>
<br /><br />
<img class="chart" src="./each.png" alt="chart" />
<br /><br />
<p class="data-description">
  ${description[0]}
</p>
</div>`;
} catch (error) {}

titles.forEach(title => {
  cardContainer.innerHTML += `<div class="sector-container">
    <a href="./Página3.html"
      ><p class="info-titulo">
        ${title}
      </p><br></a
    >
    <p class="info-descricao">
      ${description[counter]}
    </p>
    <div class="info-bar">
      <img class="contest" src="./eye.png" alt="view" /><span>:</span>
      <span class="view-count">${Math.floor(
        Math.random() * (1000 - 800 + 800)
      )}</span>
      <img src="./warning.png" alt="contest" class="contest" /><span
        >:</span
      >
      <span class="contest-counter">${Math.floor(
        Math.random() * (600 - 200 + 200)
      )}</span>
    </div>
  </div>`;
  counter++;
});
