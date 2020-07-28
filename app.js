const express = require('express');
const bodyParser = require('body-parser');
//const bootstrap = require('bootstrap');
const app = express();
//const port = 3000;
const PORT = (process.env.PORT || 3000);
const url = 'mongodb+srv://admin:admin@cluster0-ajlf2.mongodb.net/test?retryWrites=true&w=majority'; //enlace de coneccion
const mongoose = require('mongoose'); //dependecia
mongoose.connect(url);
const Swal = require('sweetalert2');

var urlencodedParser = bodyParser.urlencoded({extended: false});
var jsonParser = bodyParser.json();

var Schema = mongoose.Schema;
var userSchema = new Schema({ //schema usado para almacenar los datos de los usuarios
  firstName: String,
  lastName: String,
  phoneNumber: Number, //Number
  email: String,
  birthDay: Date,
  password: String,
  //confirmPassword: String
});

var user = mongoose.model('User', userSchema);

app.use('/assets', express.static(__dirname + '/public')); //mapeo de estilo referenciado como assets

app.set('view engine', 'ejs'); //seteo de motor de vistas a ejs

app.get('/', (req, res) => { //ruta para entrar a index
    res.render(`index`);
});

app.get('/firstSignUp', (req, res) => {
  res.render(`firstSignUp`);
});

app.get('/formSignUp', (req, res) =>{
  res.render(`formSignUp`);
});

app.post('/confirmUser', urlencodedParser, (req, res) =>{ //ruta de confirmUser
  let firstName = req.body.firstName; //declarado de variables recolectadas
  let lastName = req.body.lastName;
  let phoneNumber = req.body.phoneNumber;
  let email = req.body.email;
  let birthDay = req.body.birthDay;
  let password = req.body.password;
  let confirmPassword = req.body.confirmPassword;

  let myUser = user({
    firstName: firstName,
    lastName: lastName,
    phoneNumber: phoneNumber,
    email: email,
    birthDay: birthDay,
    password: password,
    //confirmPassword: confirmPassword
  });


  if(password === confirmPassword){//inicio if
    user.find({phoneNumber: req.body.phoneNumber}, function(err, data){
      if(err){
        console.log("Hay un error " + err);
      }else{
        if(data.length > 0 ){
          res.send("El usuario ya existe, por favor vuelva y revise su número y email.");
        }else{
          user.find({email: req.body.email}, function(err, data){
            if(err){
              console.log("Hay un error en email verification " + err);
            }else{
              if(data.length > 0){
                res.send("El usuario ya existe, por favor vuelva y revise su número y email.");
              }else{
                //a ver si guardandolo aqui
                myUser.save().then(user =>{
                  console.log("Todo bien en el save");
                }).catch(err =>{
                  console.log("Error en el save " + err);
                });
                res.render(`confirmUser`);
              }
            }
          });
        }
        //¿guardar usuario aqui?
        
      }
    });

  }else{
    res.send("Las contraseñas no coinciden.");
  }//termina if creo


  /*user.find({email: req.body.email}, function(err, data){ //verificar si ya hay un usuario
    if(err){
      console.log("Error " + err);
    }else{
      if(data.length > 0){
        user.find({phoneNumber: req.body.phoneNumber}, function(err, data){
          if(data.length > 0){
            res.send("El usuario ya existe");
          }else{
            
          }
        });
      }
    }
  });*/
    //verificar si hay un usuario

  /*if(password === confirmPassword){//inicio if //bloque funcioanl
    myUser.save().then(user=>{//inicia .save
      console.log("Todo ok");
    }).catch(err =>{ //catch
      console.log("Algo salió mal" + err);

    }); //catch
    res.render(`confirmUser`);
  }else{
    console.log("Algo salió mal else");
    res.send('Las contraseñas no coinciden, por favor vuelva y verifique');
    //alert("las contraseñas no coinciden");
  }*/ //bloque funcional
});

//inicia profile
app.post('/profileNumber', urlencodedParser,(req,res)=>{
  //let phoneNumber = req.body.phoneNumber;
 let password = req.body.password;
  //res.send(phoneNumber);
  user.find({phoneNumber: req.body.phoneNumber}, function(err, data){
    
    if(err){
      console.log("Hubo un error " + err);
    //res.send("Erro " + err);
    }else{
    if(data.length > 0){
      console.log("todo ok");
//      res.send("tamaño?");
      user.find({password: req.body.password}, function(err, data){
        if(err){
          console.log("Error en password " + err);
        }else{
          if(data.length > 0){
            console.log("todo ok 2");
            user.find({}, function(err, data){
              res.render(`profile`, {data});
            });
            //res.render(`profile`, {data});
          }else{
            res.send("Las credenciales no son correctas");
          }
        }
      });
      //res.render(`profile`, {data});
    }else{
      console.log("que paso master? no hay datos");
      res.send("Credenciales incorrectas");
    }
  }
  });

   
});
//todo dentro de profile
//aqui termina profile

//comienzo login con email
app.post('/profileEmail', urlencodedParser,(req,res)=>{
  let email = req.body.email;
  let password = req.body.password;

  user.find({email: req.body.email}, function(err, data){
    if(err){
      console.log("fue error");
    }else{
    if(data.length > 0){
      console.log("todo ok");
      user.find({password: req.body.password}, function(err, data){
        if(err){
          console.log("Error en password " + err);
        }else{
          if(data.length > 0){
            console.log("todo ok 2");
            user.find({}, function(err, data){
              res.render(`profile`, {data});
            });
            //res.render(`profile`, {data});
          }else{
            res.send("Las credenciales no son correctas");
          }
        }
      });
      //res.render(`profile`, {data});
    }else{
      console.log("que paso master? no hay datos");
      res.send("Credenciales incorrectas");
    }
  }
});
});


app.get('/profile', urlencodedParser, (req,res) =>{
  user.find({}, function(err, data){
    if(err){
      console.log("Error");
      res.send("Ocurrio un error " +err);
    }else{
      res.render(`profile`, {data});
    }
  });
  //res.render(`profile`);
});

app.get('/settings', (req, res)=>{
  res.render(`settings`);
});

app.listen(PORT, () =>{
    console.log(`Escuchando en el puerto ${PORT}`);
});

//app.listen(process.env.PORT || 3000);
