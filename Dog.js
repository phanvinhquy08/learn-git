function Dog(name) {
    this.stomatch = [];
    this.name = name;
}
Dog.prototype.eat = function(Cat) {
    this.stomatch.push(Cat)
}
module.export = Dog;