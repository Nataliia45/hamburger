function show(hamburger) {
    console.log("Calories: " + hamburger.calculateCalories());
    console.log("Price: " + hamburger.calculatePrice());
  }

  const stuffingOptions = [
    { name: "сир", value: "cheese" },
    { name: "салат", value: "salad" },
    { name: "картопля", value: "potato" },
  ];

  const toppingOptions = [
    { name: "приправа", value: "spice" },
    { name: "майонез", value: "mayo" },
  ];

  const chosenSize = prompt("Який гамбургер ви хочете?\n1. Великий\n2. Маленький");

  const chosenStuffing = prompt("Яку начинку додати?\n" + stuffingOptions.map((option, index) => `${index + 1}. ${option.name}`).join("\n"));

  const chosenTopping = prompt("Яку добавку?\n" + toppingOptions.map((option, index) => `${index + 1}. ${option.name}`).join("\n"));

  let hamburger;

  if (chosenSize === "1") {
    hamburger = new BigHamburger(new Stuffing(chosenStuffing, 0, 0));
  } else if (chosenSize === "2") {
    hamburger = new SmallHamburger(new Stuffing(chosenStuffing, 0, 0));
  }

  if (chosenTopping) {
    hamburger.addTopping(new Topping(chosenTopping, 0, 0));
  }

  if (hamburger) {
    show(hamburger);
  }