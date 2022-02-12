"use strict";
var App;
(function (App) {
    let ClasseNutritional;
    (function (ClasseNutritional) {
        ClasseNutritional["GOOD"] = "A";
        ClasseNutritional["AVG"] = "B";
        ClasseNutritional["BAD"] = "C";
    })(ClasseNutritional = App.ClasseNutritional || (App.ClasseNutritional = {}));
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
    App.Food = Food;
})(App || (App = {}));
/// <reference path="Food.ts" />
var App;
(function (App) {
    class DeliMeat extends App.Food {
        constructor(name, calorie, lipid, glucid, protein, image) {
            super(name, App.ClasseNutritional.AVG, calorie, lipid, glucid, protein, image);
            DeliMeat.deliMeatList.push(this);
        }
        displayFood() {
        }
    }
    DeliMeat.deliMeatList = [];
    App.DeliMeat = DeliMeat;
})(App || (App = {}));
/// <reference path="Food.ts" />
var App;
(function (App) {
    class Fruit extends App.Food {
        constructor(name, calorie, lipid, glucid, protein, image) {
            super(name, App.ClasseNutritional.GOOD, calorie, lipid, glucid, protein, image);
            Fruit.fruitList.push(this);
        }
        displayFood() {
        }
    }
    Fruit.fruitList = [];
    App.Fruit = Fruit;
})(App || (App = {}));
/// <reference path="./classes/Food.ts" />
/// <reference path="./classes/DeliMeat.ts" />
/// <reference path="./classes/Fruit.ts" />
var App;
(function (App) {
    // DOM Elements
    const foodFilter = document.getElementById('food_filter');
    const foodList = document.getElementById('food_list');
    const resultDiv = document.querySelector('.result');
    // Datas
    new App.Fruit('Apple', 100, 20, 15, 10, './dist/assets/img/apple.png');
    new App.Fruit('Mango', 120, 30, 25, 20, './dist/assets/img/mango.png');
    new App.DeliMeat('Tacos', 700, 500, 400, 400, './dist/assets/img/tacos.png');
    new App.DeliMeat('Grec', 700, 500, 400, 400, './dist/assets/img/grec.png');
    const loadFoods = (food_list) => {
        let html = "";
        food_list.forEach((f, i) => {
            html += `
        <tr class="text-center">
          <th scope="row">${i + 1}</th>
          <td>${f.getName()}</td>
          <td>${f.lipid}</td>
          <td>${f.glucid}</td>
          <td>${f.protein}</td>
          <td>${f.getQuality()}</td>
          <td>
            <img class="border" width="100px" src="${f.getImage()}" />
          </td>
        </tr>
      `;
        });
        foodList.innerHTML = html;
    };
    loadFoods(App.Food.foodList);
    // Events
    foodFilter.addEventListener('change', () => {
        const filteredValue = foodFilter.value;
        const filteredFoodList = App.Food.foodList.filter(f => f.getQuality() === filteredValue);
        filteredFoodList.length > 0 ?
            loadFoods(filteredFoodList) :
            foodList.innerHTML = `
      <tr class="text-center">
        <td class="text-center text-danger" colspan="7">There are no food in this classe to display</td>
      </tr>
    `;
        if (filteredValue === 'all')
            loadFoods(App.Food.foodList);
    });
})(App || (App = {}));
//# sourceMappingURL=bundle.js.map