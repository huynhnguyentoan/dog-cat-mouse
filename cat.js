function Cat(params) {
    this.stomach = [];
}

Cat.prototype.eat = function (mouse) {
    this.stomach.push(mouse);
}

module.export = Cat;