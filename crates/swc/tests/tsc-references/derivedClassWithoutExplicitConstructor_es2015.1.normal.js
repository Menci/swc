class Base {
    constructor(x){
        this.a = 1;
        this.a = x;
    }
}
class Derived extends Base {
    constructor(...args){
        super(...args);
        this.x = 1;
        this.y = 'hello';
    }
}
var r = new Derived(); // error
var r2 = new Derived(1);
class Base2 {
    constructor(x){
        this.a = x;
    }
}
class D extends Base2 {
    constructor(...args){
        super(...args);
        this.x = 2;
        this.y = null;
    }
}
var d = new D(); // error
var d2 = new D(new Date()); // ok
