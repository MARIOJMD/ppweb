const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const url = 'mongodb+srv://admin:admin@cluster0-qzdwl.mongodb.net/test?retryWrites=true&w=majority'
const {Schema} = mongoose;
const userSchema = new Schema({
  userName: String,
  password: String
});
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});
var jsonParser = bodyParser.json();
var user = mongoose.model('User', userSchema);
mongoose.connect(url);

mongoose.Promise = global.Promise;

router.get('/', (req, res) =>{
  res.render('index');
});

router.post('/result', urlencodedParser, (req, res)=>{
  //let user = mongoose.model('User',userSchema);
  user.find({}).exec().then((data)=>{
    res.render(`result`, {data}).catch((err) =>{
      res.send("Algo salió mal " + err);
    });
  });

});

router.get('/result', urlencodedParser, (req, res)=>{
  //let user = mongoose.model('User', userSchema);
  user.find({})
  .exec()
    .then((data)=>{
      res.render('result', {data});
    })
    .catch((err)=>{
      res.send('Algo salio mal ' + err);
    });
});


/*
 router.get('/result', (req, res)=>{
 let user = mongoose.model('user', userSchema);
 user.find({}, function(err, data){
  if(err){
  res.send("Algo salió mal " + err);
  }else{
  res.render('result', {data});
  }
 })
 });
 */

router.post('/addResult', urlencodedParser, (req, res)=>{
  let userName = req.body.userName;
  let password = req.body.password;
  let user = mongoose.model('User', userSchema);
  user.find({userName: req.body.userName}).exec().then((data)=>{
    if(data.length > 0){
      res.send("El usuario ya existe");
    }else{
      let myUser = user({
        userName: userName,
        password:password
      });
      myUser.save().then(user=>{
        console.log("Todo bien");
      }).catch(err=>{
        res.send("Algo salió mal " + err);
      });
      res.render(`addResult`);
    };
  }).catch((err)=>{
    res.send("Algo salió mal " + err);
  });
 //find
  
});

router.get('/personData', (req, res)=>{
  res.render(`personData`);
});

router.get('/add', (req, res)=>{
  res.render(`add`);
});

router.post('/delete/:id', (req, res) =>{
  user.findByIdAndRemove({'_id': req.params.id}).exec().then((data)=>{
    res.redirect(`/result`);
  }).catch((err) =>{
    res.send("Algo salió mal " + err);
  })
});

router.post('/update/:id', (req, res)=>{
  user.find({_id: req.params.id}).exec()
    .then((data) =>{
      if(data.length>0){
        res.render(`update`, {data});
      }
    }).catch((err)=>{
      res.send("Algo salió mal " + err);
    });
    
    //si error, error, sino, verifica tamaño, si >0 render
    //update
    //sino, algo mal
  
});

router.post('/actualizar', urlencodedParser, (req, res) =>{ user.findByIdAndUpdate(req.body.id,{
  userName: req.body.userName,
  password: req.body.password
}).exec().then((data)=>{
    res.redirect(`/result`);
}).catch((err)=>{
  res.send("Error " + err);
});
});

module.exports = router;
