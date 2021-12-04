//abstract class
abstract class MyGraphicsPrimitive2D {
  name: string;
  x: number;
  y:number;

  constructor(name:string, x:number, y:number) {
    this.name = 'Primitive2D';
    this.x = x;
    this.y = y;
  }

movePrimitive() {
  console.log('Primitive2D' + ' = ' + (this.x = this.x + 10)  + ' ед') ;
  console.log('смещение ' + 'Primitive2D' + ' = '  + ' 10 ед') ;
}
}

//abstract class MyAreaPrimitive2D extends MyGraphicsPrimitive2D {
class MyAreaPrimitive2D extends MyGraphicsPrimitive2D {
  sqr:number;
  
  constructor(name: string, sqr: number) {
    
    super(name, 1, 1) 
    this.name = 'AreaPrimitive2D';
    this.x = 5;
    this.y = 5;
    this.sqr = sqr;
    
  }

 fillPrimitive() {
  console.log('AreaPrimitive2D' + ' = ' + (this.sqr = this.x * this.y)) 
  console.log('площадь ' + 'AreaPrimitive2D' + ' = ' + (this.sqr)  + ' ед') 
 }
}

class MyCircle extends MyAreaPrimitive2D {
  center:number;
  radius:number;

  constructor(name:string, center:number, radius:number) {
    super(name, 1 );
    this.name = 'Circle';
    this.center = center;
    this.radius = radius;
  }
 
  fillMyCircle() {
    console.log('Circle' + ' = ' + ((this.radius*this.radius)*3.14)  + ' ед') 
  }
 }

 class MyRectangle  extends MyCircle {
  width:number;
  height:number;
  leftUp:number;
  rightDown:number;

  constructor(name:string, width:number, height:number, leftUp:number, rightDown:number ) {
    super(name, 20, 15);
    this.name = 'Rectangle';
    this.height = height;
    this.width = width;
    this.leftUp = leftUp;
    this.rightDown = rightDown;
  }
 
  fillMyRectangle () {
    console.log(this.name + ' = ' + (0.5*(this.height*this.width))  + ' ед') 
  }
 }

//let test:MyGraphicsPrimitive2D = new MyGraphicsPrimitive2D("test", 10, 10) будет ошибка, тк абстрактные классы не могут создавать экземпляры 
let test1:MyAreaPrimitive2D = new MyAreaPrimitive2D("test1", 1)

test1.fillPrimitive()
console.log("Теперь применим смещение и помотрим на fillPrimitive")
test1.movePrimitive()
test1.fillPrimitive()
console.log("fillPrimitive конечно изменилось")

var main = {
  name : "MyGraphicsPrimitive2D",
  child : {
      name : "MyAreaPrimitive2D"
  },
  init : function() {
      this.child.parent = this;
      delete this.init;
      return this;
  }
}.init();

console.log('Имя родительского класса - ' + main.child.parent.name)

let test2:MyCircle = new MyCircle("test2", 20, 15)
test2.movePrimitive()
test2.fillPrimitive()
test2.fillMyCircle()

let test3:MyRectangle = new MyRectangle("test3", 20, 10, 20, 0)
test3.movePrimitive()
test3.fillPrimitive()
test3.fillMyCircle()
test3.fillMyRectangle()
console.log("методы всех родительских классов присутствуют в классе MyRectangle ")









