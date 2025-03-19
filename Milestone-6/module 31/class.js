class Student{
    constructor(id,name,department){
        this.id = id;
        this.name = name;
        this.department= department
    };
    credit = 145;
};

const alamgir = new Student(131,'Alamgir Hossain','CSE');
console.log(alamgir);
console.log(alamgir.credit);
console.log(alamgir.name);