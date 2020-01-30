// using the notation literal
const obj1 = {};
console.log(obj1);

//Object in JS
console.log(typeof Object, typeof new Object);
const obj2 = new Object;
console.log(obj2)

//Functions constructors
function Product(name, price, discount){
    this.name = name;
    this.getPriceWithDiscount = () => {
        return price * (1 - discount);
    }
}

const product1 = new Product('Pencil', 7.99, 0.15);
const product2 = new Product('Notebook', 2998.99, 0.25);
console.log(product1.getPriceWithDiscount(), product2.getPriceWithDiscount());
console.log(typeof product1);

//Function Factory
function createEmployee(name, salaryBase, faults){
    return{
        name,
        salaryBase,
        faults,
        getSalary(){
            return (salaryBase / 30) * (30 - faults);
        }
    }
}

const employee1 = createEmployee('Gustavo', 7980, 4);
const employee2 = createEmployee('Ana', 11400, 1);
console.log(employee1.getSalary(), employee2.getSalary());

// Object.create
const daughter = Object.create(null);
daughter.name = 'Ana';
console.log(daughter);

//A function famous that returns object
const fromJSON = JSON.parse('{"info": "Info msg"}');
console.log(fromJSON.info);