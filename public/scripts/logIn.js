let noAccount = document.querySelector("#noAccount").addEventListener("click", redirection);
function redirection(){
document.location.href = "./firstSignUp.html"
}

let phoneButton = document.querySelector("#phoneButton").addEventListener("click", () =>{
  let formulario = document.querySelector("#phoneForm");
  let divSelect = document.querySelector("#divSelect");
  let emailForm = document.querySelector("#emailForm");
  formulario.classList.remove("invisible");
  divSelect.classList.remove("visible");
  divSelect.classList.add("invisible");
  formulario.classList.add("visible");
  emailForm.classList.remove("visible");
  emailForm.classList.add("invisible");
});

let emailButton = document.querySelector("#emailButton").addEventListener("click", () =>{
  let formulario = document.querySelector("#emailForm");
  let divSelect = document.querySelector("#divSelect");
  let phoneForm = document.querySelector("#phoneForm");
  formulario.classList.remove("invisible");
  divSelect.classList.remove("visible");
  divSelect.classList.add("invisible");
  formulario.classList.add("visible");
  phoneForm.classList.remove("visible");
  phoneForm.classList.add("invisible");
});

let logInPhoneCancel = document.querySelector("#logInPhoneCancel").addEventListener("click", () => {
  let formulario = document.querySelector("#phoneForm");
  let divSelect = document.querySelector("#divSelect");
  formulario.classList.remove("visible");
  formulario.classList.add("invisible");
  divSelect.classList.remove("invisible");
  divSelect.classList.add("visible");
});
let logInEmailCancel = document.querySelector("#logInEmailCancel").addEventListener("click", () => {
  let formulario = document.querySelector("#emailForm");
  let divSelect = document.querySelector("#divSelect");
  formulario.classList.remove("visible");
  formulario.classList.add("invisible");
  divSelect.classList.remove("invisible");
  divSelect.classList.add("visible");
});

let logInPhoneLogIn = document.querySelector("#logInPhoneLogIn").addEventListener("click", () => {
  let numberLogIn = document.querySelector("#numberLogIn");
  let phoneNumber = document.querySelector("#phoneNumber");
  let password = document.querySelector("#password");
  
  if(numberLogIn.checkValidity() === false){
    event.preventDefault();
    event.stopPropagation();
  }else{
  console.log("Todo correcto en el login");
  }
  numberLogIn.classList.add("was-validated");

});

let logInEmailLogIn = document.querySelector("#logInEmailLogIn").addEventListener("click", () => {
  let form = document.querySelector("#form");
  let email = document.querySelector("#email");
  let password = document.querySelector("#password");

  if(form.checkValidity() == false){
    event.preventDefault();
    event.stopPropagation();
  }else{
    console.log("Todo correcto en el login Email");
  }
  form.classList.add("was-validated");
});


