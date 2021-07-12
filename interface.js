function sendEmail(personInterface) {
    var to = personInterface.eMail;
    var name = personInterface.name;

    var send = function () {
        alert("Mail sen to:" + name + "/"+ to);
    }
    send();
    
}

function Customer(name,eMail) {
    this.name = name;
    this.eMail = eMail;
    //Other staff
}

var someCustomer = new Customer("berkan","berkan@gamil.com");
sendEmail(someCustomer)