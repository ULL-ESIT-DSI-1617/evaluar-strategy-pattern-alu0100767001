"use strict";
var Shape = require('./shapesarea.js');

class Triangle extends Shape {
    constructor(figura, options){
        super('Triangle', options)
    }
    
    getArea(){
        let area = .5 * this.options.width * this.options.height;
        return area;
    }
}


class Square extends Shape {
    constructor(figura, options){
        super('Square', options)
    }
    
    getArea(){
        let area = Math.pow(this.options.width, 2);
        return area;
    }
}


class Rectangle extends Shape {
    constructor(figura, options){
        super('Rectangle', options)
    }
    
    getArea(){
        let area = this.options.width * this.options.height;
        return area;
    }
}

module.exports = {
    Triangle: Triangle,
    Square: Square,
    Rectangle: Rectangle
};