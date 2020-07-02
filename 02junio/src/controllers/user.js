const user = require('./../models/userModel');

module.exports = {
  index: async (req, res) => {
    try {
      //let users = await user.find({});
      res.render('index');
    } catch (error) {
      res.send('algo salio mal ' + error);
    }
  },
  add: async(req, res)=>{
    try{
      res.render('add');
    }catch(error){
      res.send('algo salió mal');
    }
  } ,
  delete: async(req, res)=>{
    user.findByIdAndRemove({'_id': req.params.id}).exec()
    then((data) =>{
      res.redirect(`/result`);
    }).catch((err) =>{
      res.send('Algo salió mal ' + err);
    });
  },
  update: async(req, res)=>{
    user.findByIdAndUpdate({_id: req.params.id}).exec()
      .then((data) =>{
        if(data.length > 0){
          res.render(`update`, {data});
        }
      }).catch((err) =>{
        res.send('Algo salió mal ' + err);
      });
  },
  actualizar: async(req, res) => {
    user.findByIdAndUpdate(req.body.id, {
      userName: req.body.userName,
      password: req.body.password
    }).exec().then((data) =>{
      res.redirect(`/result`);
    }).catch((err)=>{
      res.send('Error ' + err);
    });
  }
}
