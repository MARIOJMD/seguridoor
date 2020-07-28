let btn = document.querySelector("#panicButton").addEventListener("click", panicAction);
function panicAction(){
  Swal.fire({
    icon: 'question',
    title: '¿Activar el boton de pánico?',
    showCancelButton: true,
    cancelButtonText: "No",
    confirmButtonText: "Si"
  }).then((result)=>{
    if(result.value){
      var snd = new Audio("./assets/audio/alarm.mp3");
      snd.play();
    }
  });
}

let logOut = document.querySelector("#logOut").addEventListener("click", () =>{
  Swal.fire({
  title: "Cerrar sesión",
    text: "¿Estas seguro de cerrar sesión?",
    icon: "question",
    showCancelButton: true,
    cancelButtonText: "Salir",
    confirmButtonText: "No",
  }).then((result) =>{
    if(result.value){
      Swal.fire({
        title: "¡Genial!",
        icon: "success",
      });
    }else{
      document.location.href="./";
    }
  });
  //document.location.href="./"
});
