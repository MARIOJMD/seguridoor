let initCoding = alerta(); //code function
//var arrayCode = "59ce720c6c40eef6";
function code(){
  //console.log("function code");
 /* var arrayCode = []
  for (let i = 0; i <= 5; i++) {
    let randomCode = Math.floor(Math.random()*10);
    arrayCode.push(randomCode);
  }*/
  alerta();
}

function alerta(){
  let arrayCode = "59ce720c6c40eef6";
  swal.fire({
    title: "¡Bienvenido!",
    text: `Éste es tu codigo de registro: ${arrayCode}`,
    icon: "success",
    confirmButtonText: "Continuar"
  });
}

let cancel = document.querySelector("#cancelButton").addEventListener("click", cancelSignUp);

function cancelSignUp(){
  swal.fire({
    title: "Cancelar",
    text: "¿Seguro que quiere cancelar su registro?",
    icon: "warning",
    showCancelButton: true,
    cancelButtonText: "Cancelar registro",
    confirmButtonText: "Continuar registro",
  }).then((result) =>{
    if (result.value) {
      swal.fire({
        title: "¡Continuemos!",
        icon: "success"
      })
    }else {
      document.location.href = "./";
    }
  });
}

let continueButton = document.querySelector("#continueButton").addEventListener("click", () =>{
  let form = document.querySelector("#form");
  let serialNumberInput = document.querySelector("#serialNumberInput").value;
  //console.log(serialNumberInput);
  let arrayCode = "59ce720c6c40eef6";
  if (form.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation()
//    console.log("validacion = false")
  }else if(serialNumberInput === arrayCode){
      document.location.href="./formSignUp";
    //console.log("validacion codigo")
    }else{
      console.log("El codigo es incorrecto");
    }
   // document.location.href = "./formSignUp" //mandar a la siguiente pagina
  //}
  form.classList.add("was-validated");
});
