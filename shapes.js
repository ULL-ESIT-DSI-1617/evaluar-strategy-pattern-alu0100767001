'use strict';

class Triangle extends Shape {
    constructor(figura, options){
        super('Triangle', options)
    }
    
    getArea(figura, options){
        let area = .5 * options.width * options.height;
        return area;
    }
}


class Square extends Shape {
    constructor(figura, options){
        super('Square', options)
    }
    
    getArea(figura, options){
        let area = Math.pow(options.width, 2);
        return area;
    }
}


class Rectangle extends Shape {
    constructor(figura, options){
        super('Rectangle', options)
    }
    
    getArea(figura, options){
        let area = options.width * options.height;
        return area;
    }
}