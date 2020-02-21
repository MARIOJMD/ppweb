function Emitter(){
  this.events ={}
}//funcion constructora

Emitter.prototype.on = function(type, listener){//recibo dos parametros, su
  this.events[type] = this.events[type] || []; //es una validacion para iniciar
  this.events[type].push(listener);//agregar algo al array
}

Emitter.prototype.emit = function(type){//accedo a la funcion
  if(this.events[type]){//nos regresa algo
    this.events[type].forEach(function(listener){//ejecuta
      listener();
    });
  }
}

module.exports = Emitter;
