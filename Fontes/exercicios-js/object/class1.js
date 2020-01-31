class Launch{
    constructor(name = 'Generic', value = 0){
        this.name = name;
        this.value = value;
    }
}

class FinancialCicle{
    constructor(month, year){
        this.month =  month;
        this.year =  year;
        this.launches = []
    }

    addLauch(...launches){
        launches.forEach(l => this.launches.push(l));
    }

    sumary(){
        let valueConsolidated = 0;
        this.launches.forEach(l => {
            valueConsolidated += l.value
        });

        return valueConsolidated;
    }
}

const salary = new Launch('Salary', 45000);
const electricityBill = new Launch('Light', -220);

const accounting = new FinancialCicle(6, 2018);
accounting.addLauch(salary, electricityBill);
console.log(accounting.sumary());
