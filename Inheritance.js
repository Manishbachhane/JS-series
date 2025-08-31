class employee {
    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    displayInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Salary: ${this.salary}`);
    }
}
class manager extends employee {
    constructor(name, age, salary) {
        super(name, age, salary);
    }
    displayInfo() {
        super.displayInfo();
        console.log(`name: ${this.name},age: ${this.age},salary: ${this.salary}`);
    }
}

const emp1 = new employee("Alice", 30, 50000);
const mgr1 = new manager("Bob", 40, 80000);
emp1.displayInfo();
mgr1.displayInfo();
