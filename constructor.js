// This in a function inside an object

var student = {
    firstName: "Berkan",
    lastName: "Demiroğ",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

alert (stıdent.fullName());

//Object constructor
//this in an object

function Customer(first, last, city, country, age){
    this.first = first;
    this.last = last;
    this.city = city;
    this.age = age;
    this.country = country;
}

var someCustomer = new Customer("Berkan", "Çelik", "Ardahan", "Türkiye", "21")

alert(someCustomer.country);