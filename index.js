let goUp = document.querySelector(".goUp");
let signIn = document.querySelector("button");

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
