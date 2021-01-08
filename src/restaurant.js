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

const addMenuItem = (restaurant, item) => {
  !restaurant.menus[item.type].includes(item)
    ? restaurant.menus[item.type].push(item)
    : console.log("item already exist");
};

module.exports = {
  createRestaurant,
  addMenuItem,
  // removeMenuItem
};
