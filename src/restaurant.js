const createRestaurant = (name) => {
  return {
    name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: [],
    },
  };
};

module.exports = {
  createRestaurant,
  // addMenuItem,
  // removeMenuItem
};
