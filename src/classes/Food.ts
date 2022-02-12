namespace App {
  export enum ClasseNutritional {
    GOOD = 'A',
    AVG = 'B',
    BAD = 'C'
  }
  
  export abstract class Food {
    public static foodList: Food[] = []
  
    constructor(
      protected name: string,
      protected quality: ClasseNutritional,
      public readonly calorie: number,
      public readonly lipid: number,
      public readonly glucid: number,
      public readonly protein: number,
      protected image: string,
    ) { Food.foodList.push(this) }
  
    abstract displayFood(): void
  
    public getName() { return this.name }
    public getQuality() { return this.quality }
    public getImage() { return this.image }
  
    public setName(name: string) { this.name = name }
    public setQuality(quality: ClasseNutritional) { this.quality = quality }
    public setImage(image: string) { this.image = image }
  
  }
}
