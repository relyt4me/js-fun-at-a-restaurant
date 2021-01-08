class Chef {
  constructor(name, restaurant) {
    this.name = name;
    this.restaurant = restaurant;
  }
  greetCustomer(name, isMorning = false) {
    if (isMorning) {
      return `Good morning, ${name}!`;
    }
    return `Hello, ${name}!`;
  }
}

module.exports = Chef;
