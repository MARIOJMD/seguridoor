let sendConfirmationCode = document.querySelector("#sendConfirmationCode").addEventListener("click", validationCode);

function validationCode(){
  //let confCode = Math.floor(Math.random()*10);
  //console.log(confCode);
  let confCode = 6668945;
  swal.fire({
    title: "¡Correcto!",
    text: `Éste es tu codigo de registro: ${confCode}`,
    icon: "success",
    confirmButtonText: "Continuar"
  });
  return confCode;
}

let verificationButton = document.querySelector("#verificationButton").addEventListener("click", () => {
  let ultimateCodeV = document.querySelector("#ultimateCodeV").value;
  let confCode = 6668945;
  let form = document.querySelector("#form");
  if (form.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation()
  }else if(ultimateCodeV == confCode){
      /*swal.fire({
        title: "¡Correcto!",
        text: `Ahora vamos a iniciar sesión.`,
        icon: "success",
      });*//*.then(
        //form.classList.add("was-validated");
        //setTimeout(() => document.location.href = "./", 2000);
      );*/
    document.location.href = "./";
    }else{console.log("Codigo incorrecto");}
  form.classList.add("was-validated");
  //setTimeout(()=>document.location.href="./", 2000);
});




//recuerda hacer una funcion para el boton de enviar codigo que no se active a menos
//que se seleccione alguno de los dos radius


let cancelVerificationButton = document.querySelector("#cancelVerificationButton").addEventListener("click", alerta);

function alerta(){
  swal.fire({
    title: "¿Seguro?",
    text: `¿Estas seguro de cancelar el registro?`,
    icon: "question",
    cancelButtonText: "Cancelar",
    showCancelButton: true,
    confirmButtonText: "Continuar",
    /*html:`<button class="btn btn-danger">Cancelar</button>
    <button class="btn btn-primary" id="aver">Continuar</button>`*/
  }).then((result) => {
    if (result.value){
      swal.fire({
        title: "¡Continuemos!",
        icon: "success",
      });
    }else {
      document.location.href = "./";
    }
  })
}
