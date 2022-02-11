export var ClasseNutritional;
(function (ClasseNutritional) {
    ClasseNutritional["GOOD"] = "A";
    ClasseNutritional["AVG"] = "B";
    ClasseNutritional["BAD"] = "C";
})(ClasseNutritional || (ClasseNutritional = {}));
class Food {
    constructor(name, quality, calorie, lipid, glucid, protein, image) {
        this.name = name;
        this.quality = quality;
        this.calorie = calorie;
        this.lipid = lipid;
        this.glucid = glucid;
        this.protein = protein;
        this.image = image;
        Food.foodList.push(this);
    }
    getName() { return this.name; }
    getQuality() { return this.quality; }
    getImage() { return this.image; }
    setName(name) { this.name = name; }
    setQuality(quality) { this.quality = quality; }
    setImage(image) { this.image = image; }
}
Food.foodList = [];
export default Food;
//# sourceMappingURL=Food.js.map