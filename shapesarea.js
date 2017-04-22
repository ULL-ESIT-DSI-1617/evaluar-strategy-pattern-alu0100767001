/*"use strict";

var Shape = require('./shapes.js').Shape;
var Triangle = require('./shapes.js').Triangle;
var Square = require('./shapes.js').Square;
var Rectangle = require('./shapes.js').Rectangle;

var figuras = { Triangle: 'Triangle',
                Square: 'Square',
                Rectangle: 'Rectangle'
};

module.exports = function(shape, options) {
  var area = 0;

    try {
      var clase = eval(figuras.shape);
      var fuente = new clase(options.width, options.height);
      area = fuente.getArea();  
      console.log("El área del " + shape + " es: " + area);
    }
    catch(err){
      console.log("'" + shape + "' es una figura desconocida");
    }
  
  
};*/

"use strict";

var Shape = require('./shapes.js').Shape;
var Triangle = require('./shapes.js').Triangle;
var Square = require('./shapes.js').Square;
var Rectangle = require('./shapes.js').Rectangle;

var figuras = {
	Triangle: 'Triangle',
	Square: 'Square',
	Rectangle: 'Rectangle'
};

module.exports = function(shape, options) {
	var area = 0;

	try {
		let clase = eval(figuras[shape]);
		let nuevo = new clase(options.width, options.height);
		area = nuevo.getArea();
		console.log("El área del " + shape + " es: ");
	}
	catch(err) {
		console.log("'" + shape + "' es una figura desconocida");
	}
 
	return area;
};