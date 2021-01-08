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

const removeMenuItem = (restaurant, item, menuType) => {
  let itemFound = false;
  restaurant.menus[menuType].forEach((menuItem, index) => {
    if (menuItem.name === item) {
      restaurant.menus[menuType].splice(index, 1);
      itemFound = true;
    }
  });
  if (itemFound) {
    return `No one is eating our ${item} - it has been removed from the ${menuType} menu!`;
  } else {
    return `Sorry, we don't sell ${item}, try adding a new recipe!`;
  }
};

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem,
};
