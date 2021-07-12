var customer = {
    id: 1,
    contactName:"Berkan Çelik"
}

customer.country= "Turkey";

customer.sayHello = function(){
    alert("Hello"+ this.contactName);
}
customer.sayHello();