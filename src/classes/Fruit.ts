/// <reference path="Food.ts" />

namespace App {
  export class Fruit extends Food {
    public static fruitList: Fruit[] = []
  
    constructor(
      name: string, 
      calorie: number, 
      lipid: number, 
      glucid: number, 
      protein: number, 
      image: string
    ) { 
      super(name, ClasseNutritional.GOOD, calorie, lipid, glucid, protein, image) 
      Fruit.fruitList.push(this)
    }
  
    public displayFood(): void {
        
    }
  
  }
}
