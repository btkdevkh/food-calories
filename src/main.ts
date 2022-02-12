/// <reference path="./classes/Food.ts" />
/// <reference path="./classes/DeliMeat.ts" />
/// <reference path="./classes/Fruit.ts" />

namespace App {
  // DOM Elements
  const foodFilter = document.getElementById('food_filter')! as HTMLSelectElement
  const foodList = document.getElementById('food_list')! as HTMLTableElement
  const resultDiv = document.querySelector('.result')! as HTMLDivElement

  // Datas
  new Fruit('Apple', 100, 20, 15, 10, './dist/assets/img/apple.png')
  new Fruit('Mango', 120, 30, 25, 20, './dist/assets/img/mango.png')
  new DeliMeat('Tacos', 700, 500, 400, 400, './dist/assets/img/tacos.png')
  new DeliMeat('Grec', 700, 500, 400, 400, './dist/assets/img/grec.png')

  const loadFoods = (food_list: Food[]) => {
    let html: string = ""
    food_list.forEach((f, i) => {
      html += `
        <tr class="text-center">
          <th scope="row">${i+1}</th>
          <td>${f.getName()}</td>
          <td>${f.lipid}</td>
          <td>${f.glucid}</td>
          <td>${f.protein}</td>
          <td>${f.getQuality()}</td>
          <td>
            <img class="border" width="100px" src="${f.getImage()}" />
          </td>
        </tr>
      `
    })

    foodList.innerHTML = html
  }

  loadFoods(Food.foodList)

  // Events
  foodFilter.addEventListener('change', () => {
    const filteredValue = foodFilter.value;

    const filteredFoodList = Food.foodList.filter(f => f.getQuality() === filteredValue)
    filteredFoodList.length > 0 ? 
    loadFoods(filteredFoodList) :
    foodList.innerHTML = `
      <tr class="text-center">
        <td class="text-center text-danger" colspan="7">There are no food in this classe to display</td>
      </tr>
    `

    if(filteredValue === 'all') loadFoods(Food.foodList)
  })
}
