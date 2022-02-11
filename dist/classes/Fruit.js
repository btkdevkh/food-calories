import Food, { ClasseNutritional } from "./Food.js";
class Fruit extends Food {
    constructor(name, calorie, lipid, glucid, protein, image) {
        super(name, ClasseNutritional.GOOD, calorie, lipid, glucid, protein, image);
        Fruit.fruitList.push(this);
    }
    displayFood() {
    }
}
Fruit.fruitList = [];
export default Fruit;
//# sourceMappingURL=Fruit.js.map