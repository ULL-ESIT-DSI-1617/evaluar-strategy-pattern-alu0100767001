'use strict';

class Shape {
  constructor(figura, options){
    this.figura_=figura;
    this.options_=options;
  }
}

Shape.figuras = { t: 'Triangle',
                  s: 'Square',
                  r: 'Rectangle'
};


module.exports = function(shape, options) {
  let figuras = this.shape;
  let tipo = figuras.figura;
  let dimension = figuras.options;
  
  var clase = eval(figuras[tipo]);
  new clase(tipo, dimension);
}
