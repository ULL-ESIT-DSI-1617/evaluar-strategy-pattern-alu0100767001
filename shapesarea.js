"use strict";

class Shape {
  constructor(figura, options){
    this.figura_=figura;
    this.width_=this.options.width;
    this.height_=this.options.height;
  }
}

Shape.figuras = { t: 'Triangle',
                  s: 'Square',
                  r: 'Rectangle'
};


module.exports = {
  Shape: Shape
};


module.exports = function(shape, options) {
  var area = 0;
  
  let figuras = this.figuras;
  
  try {
    var clase = eval(figuras);
    var fuente = new clase(this.options);
    var area = fuente.getArea();  
  }
  catch(err){
    return "'" + figuras + "' es una figura desconocida"
  }
  return area;
};