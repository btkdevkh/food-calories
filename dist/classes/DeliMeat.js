import Food, { ClasseNutritional } from "./Food.js";
class DeliMeat extends Food {
    constructor(name, calorie, lipid, glucid, protein, image) {
        super(name, ClasseNutritional.AVG, calorie, lipid, glucid, protein, image);
        DeliMeat.deliMeatList.push(this);
    }
    displayFood() {
    }
}
DeliMeat.deliMeatList = [];
export default DeliMeat;
//# sourceMappingURL=DeliMeat.js.map