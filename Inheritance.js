function Person(firstName,lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

function Student(favoriteCourse) {
    this.favoriteCourse = favoriteCourse
}

Student.prototype = new Person("Berkan", "Çelik")

var berkan = new Student("Programming");

alert(berkan.firstName + " "+ berkan.lastName +"loves" + berkan.favoriteCourse);