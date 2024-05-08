class Hamburger {
    constructor(size, stuffing) {
      this.size = size;
      this.stuffing = stuffing;
      this.toppings = [];
    }

    addTopping(topping) {
      this.toppings.push(topping);
    }

    calculatePrice() {
      let price = this.size.price + this.stuffing.price;
      this.toppings.forEach((topping) => {
        price += topping.price;
      });
      return price;
    }

    calculateCalories() {
      let calories = this.size.calories + this.stuffing.calories;
      this.toppings.forEach((topping) => {
        calories += topping.calories;
      });
      return calories;
    }
  }

  class BigHamburger extends Hamburger {
    constructor(stuffing) {
      super({ price: 100, calories: 40 }, stuffing);
    }
  }

  class SmallHamburger extends Hamburger {
    constructor(stuffing) {
      super({ price: 50, calories: 20 }, stuffing);
    }
  }
  