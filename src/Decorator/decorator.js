// Decorator 类的装饰器  用来修饰类的行为


function Man() {
    this.def = 2;
    this.atk = 3;
    this.hp = 3;
}

Man.prototype =  {
    toString : function () {
        return `防御力:${this.def},攻击力:${this.atk},血量:${this.hp}`
    }
}

var Decorator = function (man) {
    this.man = man;
}

Decorator.prototype.toString = function () {
    return this.man.toString()
}

var DecorateArmour = function (man) {
    var moreDef = 100;
    man.def += moreDef;
    Decorator.call(this,man);
}

DecorateArmour.prototype = new Decorator();




export { DecorateArmour, Man }



