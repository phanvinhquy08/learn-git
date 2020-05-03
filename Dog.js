var chalk = require('chalk');
function Dog(name) {
    this.stomatch = [];
    this.name = name;
}
Dog.prototype.eat = function(Cat) {
    this.stomatch.push(Cat)
}
Dog.prototype.sayHi = function() {
    console.log("my name is" + chalk.blue(this.name))
}
module.exports = Dog;