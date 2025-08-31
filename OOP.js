class student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    displayInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

const student1 = new student("Alice", 22);

student1.displayInfo();
student1.name = "Bob";
student1.age = 23;
student1.displayInfo();

