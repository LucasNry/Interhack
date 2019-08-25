let goUp = document.querySelector(".goUp");
let signIn = document.querySelector("button");
let buttons = document.querySelectorAll(".category-button");
let url = "http://b2c61bb1.ngrok.io/horizontal-plot.png";
let api = "https://0d19b8f7.ngrok.io/api/products";
let container = document.querySelector(".canvas");
let cardTemplate = `<div class="sector-container">
<a href="./Página3.html"
  ><p class="info-titulo">
    Título
  </p></a
>
<p class="info-descricao">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla velit
  justo, mattis eu efficitur at, sollicitudin non magna. Praesent in
  egestas nulla. In hac habitasse platea dictumst. Suspendisse at nisi
  vel velit tempor sollicitudin id vel odio. Fusce aliquet tempor
  libero nec commodo.
</p>
<div class="info-bar">
  <img class="contest" src="./eye.png" alt="view" /><span>:</span>
  <span class="view-count">1232</span>
  <img src="./warning.png" alt="contest" class="contest" /><span
    >:</span
  >
  <span class="contest-counter">322</span>
</div>
</div>`;
let titles = ["", "", ""];
let description = ["", "", ""];

try {
  goUp.addEventListener("click", () => {
    window.scrollTo(0, 0);
  });
} catch (err) {}

const redirect = () => {
  try {
    window.location.href =
      "https://idpcafe.usp.br/idp/profile/SAML2/Redirect/SSO?execution=e2s1";
  } catch (error) {}
};
buttons.forEach(button => {
  button.addEventListener("onmouseover", () => {});
});

// console.log(fetchData(api));

container.innerHTML += `<div class="data-container">
<h1 class="data-title">${"Titúlo"}</h1>
<br /><br />
<img class="chart" src="${url}" alt="chart" />
<br /><br />
<p class="data-description">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nulla
  nunc, commodo a faucibus convallis, aliquam ut quam. Ut in
  vestibulum nulla. Cras rutrum tortor fringilla tellus consectetur
  consectetur. Phasellus facilisis nibh eget orci sodales, at semper
  ante suscipit. Maecenas sollicitudin mi vitae urna aliquam
  venenatis. Vestibulum rhoncus turpis sit amet pellentesque
  dignissim. Phasellus non dui sodales, ultricies lectus nec,
  sollicitudin lorem. Phasellus a risus non tortor tincidunt elementum
  quis porttitor dui. Curabitur ornare, augue et viverra scelerisque,
  leo enim vulputate libero, eu cursus lacus ligula vel eros. Nunc
  purus ante, gravida ut gravida ut, cursus ac nisi. Vestibulum
  lobortis elit vel nunc porta sagittis. Praesent cursus hendrerit
  gravida. Nam feugiat arcu quis tincidunt scelerisque. Fusce finibus
  purus ac leo pretium, vitae scelerisque risus dapibus. Proin eu
  justo quis odio auctor lobortis eu ut erat. Nulla facilisi. Proin
  elit elit, ullamcorper ac mollis a, ullamcorper sit amet nisi. Ut
  interdum odio et mi tristique interdum. Nunc aliquam, risus id
  condimentum semper, magna sapien varius purus, nec cursus tortor
  libero id nunc. Quisque tellus mauris, scelerisque non dictum et,
  ullamcorper non magna. Phasellus maximus a neque ut pulvinar. Aenean
  sed ante sit amet quam dignissim sodales. Sed varius massa quis
  elit.
</p>
</div>`;
