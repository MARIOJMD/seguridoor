let cancelRegister = document.querySelector("#cancelRegister").addEventListener("click", cancel);
function cancel(){
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
          icon: "success",
        });
      }else {
        document.location.href = "./";
      }
    });
}

let registerButton = document.querySelector("#register").addEventListener("click", add);

function add(){
  var password = document.querySelector("#password");
  var confirmPassword = document.querySelector("#confirmPassword");
  let form = document.querySelector("#form");
  if (form.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation()
    //form.classList.add("was-validated");
  }else{
   console.log("Todo bien en el regitro")
   // console.log("Error")
  }
  form.classList.add("was-validated");
}


//const express = require('express');
/*const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin@cluster0-qzdwl.mongodb.net/test?retryWrites=true&w=majority');

var Schema = mongoose.Schema;
var userSchema = new Schema({
  name: String,
  surname: String,
  phoneNumber: String,
  eMail: String,
  birthDay: Date,
  password: String,
  confirmPassword: String
});


function addRegister(){ //para mandar los valores, supongo que necesira el myUser
  //aqui dentro para cuando presione el boton se genere myUser y agregue los datos
  //por variables y seguido los mande a la bd
  //Tambien declarar variables que guarden los datos del form


  let firstName = document.querySelector("#firstName");
  let surName = document.querySelector("#lastName");
  let phoneNumber = document.querySelector("#phoneNumber");
  let eMail = document.querySelector("#email");
  let birthDay = document.querySelector("#birthDay");
  let password = document.querySelector("#password");
  let confirmPassword = document.querySelector("#confirmPassword");

  var user = mongoose.model('User', userSchema);

  var myUser = user({
  	name: firstName,
  	surname: surName,
    phoneNumber: phoneNumber,
    eMail: eMail,
    birthDay: birthDay,
    password: password,
    confirmPassword: confirmPassword
  });

    myUser.save((err) => {
    	if(err){
    		  console.log('algo salio mal' + err);
    		}else{
    			console.log('todo ok');
    		}
    	});
}
*/
