import Food, { ClasseNutritional } from "./Food.js";

class DeliMeat extends Food {
  public static deliMeatList: DeliMeat[] = []

  constructor(
    name: string, 
    calorie: number, 
    lipid: number, 
    glucid: number, 
    protein: number, 
    image: string
  ) { 
    super(name, ClasseNutritional.AVG, calorie, lipid, glucid, protein, image) 
    DeliMeat.deliMeatList.push(this)
  }

  public displayFood(): void {
      
  }

}

export default DeliMeat
