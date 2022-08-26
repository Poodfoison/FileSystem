// Pi.js - export the constant value of Pi from here

// Currently empty
// Circle.js
const Area = require('./Area'); // import a method called Area() that takes in one parameter radius which returns the area of a circle with the said radius
const Circumference = require('./Circumference'); // import a method called Circumference() that takes in one parameter radius which returns the circumference of a circle with the said radius

let Circle = {
    radius: 5.0,
    circumference: 0.0,
    area: 0.0
};

Circle.circumference = Circumference(Circle.radius);
Circle.area = Area(Circle.radius);

module.exports = Circle;
// Area.js - has one method Area() that takes in one parameter radius and returns the area of a circle with the said radius, make sure to use the constant value from Pi.js

// Also empty
// Circumference.js - has one method Circumference() that takes in one parameter radius and returns the area of a circle with the said circumference, make sure to use the constant value from Pi.js

// Also empty