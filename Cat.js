function Cat() {
    this.stomtach = []
}
Cat.prototype.eat = function(Mouse) {
    this.stomtach.push(Mouse)
}
module.export = Cat