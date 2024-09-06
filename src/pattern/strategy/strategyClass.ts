/*
Imagine that you have a robot that cleans the house. This robot can clean floors in different ways:
 with a vacuum, mop, or even steam. Each cleaning method is a different algorithm. 
*/

// A common interface for all cleaning algorithms
interface ICleaningStrategy {
    clean(): void;
}
// Vacuuming algorithm
export class VacuumCleanerStrategy implements ICleaningStrategy {
    clean() {
        console.log("تنظيف بالأمكنسة الكهربائية");
    }
}
// Mop cleaning algorithm
export class MopStrategy implements ICleaningStrategy {
    clean() {
        console.log("تنظيف بالممسحة");
    }
}

export class Robot {
    private strategy: ICleaningStrategy;
    constructor(ICleaningStrategy : ICleaningStrategy) {
        this.strategy = ICleaningStrategy;
    }
    cleanFloor() {
        this.strategy.clean();
    }
}