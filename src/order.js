const takeOrder = (newOrder, ordersList) => {
  ordersList.length < 3 && ordersList.push(newOrder);
};

const refundOrder = (refundNumber, orderList) => {
  orderList.forEach((order, location) => {
    if (order.orderNumber === refundNumber) {
      orderList.splice(location, 1);
    }
  });
};

const listItems = (orderList) => {
  return orderList.reduce((allItems, order) => {
    if (allItems === ``) {
      return `${order.item}`;
    } else {
      return `${allItems}, ${order.item}`;
    }
  }, ``);
};

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  // searchOrder
};
