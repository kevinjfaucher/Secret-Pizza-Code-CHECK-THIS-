

function makePizza(pizzaArray, type, size, calories, cost, isVegetarian) {
    // Construct the pizza object
    const newPizza = {
      type: type,
      size: size,
      calories: calories,
      cost: cost,
      isVegetarian: isVegetarian
    };
  
    // Add the new pizza object to the end of the provided array
    pizzaArray.push(newPizza);
  }
  
  // Example usage:
  let pizzas = [
    { type: "Pepperoni", size: "Large", calories: 1200, cost: 15.99, isVegetarian: false },
    { type: "Margherita", size: "Medium", calories: 800, cost: 12.99, isVegetarian: true }
  ];
  
  makePizza(pizzas, "BBQ Chicken", "Large", 1100, 16.99, false);
  
  console.log(pizzas);
  
