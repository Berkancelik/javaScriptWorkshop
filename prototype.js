var student = {
    firstName: "Berkan",
    lastName: "Demiroğ",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

alert (student.fullName());



function Customer(first, last, city, country, age){
    this.first = first;
    this.last = last;
    this.city = city;
    this.age = age;
    this.country = country;
}

var someCustomer = new Customer("Berkan", "Çelik", "Ardahan", "Türkiye", "21")

Customer.prototype.eMail = "berkan@gmail.com";
Customer.prototype.fullName = function(){
    return this.first + " " + this.last;
};
alert(someCustomer.city);
alert(someCustomer.eMail);
alert(someCustomer.fullName());