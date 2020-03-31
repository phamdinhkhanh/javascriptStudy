// https://openclassrooms.com/en/courses/3523231-learn-to-code-with-javascript/4379006-use-constructor-functions

// 1. Khởi tạo object bằng dictionary
var cake = {
	flavor: "strawberry",
	levels: 2,
	price: "$10",
	occasion: "birthday",

    // Describe the cake
    describe: function () {
        var description = "The " + this.occasion + " cake has a " + this.flavor + " flavor, " + this.levels + " layers, and costs " + this.price + ".";
        return description;
    }
};


console.log(cake.describe());

cake.flavor = "ice cream";
occasion = "wedding";

console.log(cake.describe());


// 2. Khởi tạo object bằng hàm init.
var Pastry = {
  // initialize the pastry
  init: function (type, flavor, levels, price, occasion) {
    this.type = type;
    this.flavor = flavor;
    this.levels = levels;
    this.price = price;
    this.occasion = occasion;
  },

  describe: function () {
    var description = "The " + this.occasion + " cake has a " + this.flavor + " flavor, " + this.levels + " layers, and costs " + this.price + ".";
    return description;
  }
}

var pastry = Object.create(Pastry);
pastry.init("muffin", "blueberry", 3, "$10", "birthday");
console.log("===========================================================")
console.log(pastry.describe())



// Khởi tạo bằng cách add thêm vào prototype

function Pastry(type, flavor, levels, price, occasion) {
  this.type = type;
  this.flavor = flavor;
  this.levels = levels;
  this.price = price;
  this.occasion = occasion;
  this.describe = function () {
  	var description = "The " + this.type + " is a " + this.occasion + "pastry, has a " + this.flavor + " flavor, " + this.levels + " layer(s), and costs " + this.price + ".";
  	return description;
  }
};


console.log("===========================================================")
var muffin = Object.create(Pastry);
muffin.init("muffin", "blueberry", 1, "$2", "breakfast");

var cake = Object.create(Pastry);
cake.init("cake", "vanilla", 3, "$10", "birthday");

console.log(muffin.describe());
console.log(cake.describe());

