var Person={
    name: "None",//fake
    email: "None",
    sendEmail: function () {
        alert("Mail sen to :"+ this.name+ "/" + this.email);
        
    }
}

function Customer(name, email) {
    this.name = name;
    this.email = email;
    //Other staff
    
}

function Employee(name, email) {
    this.name = name;
    this.email = email;
    //Other staff
}

Customer.prototype = Person;

var someCustomer = new Customer("Berkan", "berkan@gmail.com");
someCustomer.sendEmail();

Employee.prototype = Person;
var someEmployee = new Employee("ahmet", "ahmet@gmail.com");
someEmployee.sendEmail();

