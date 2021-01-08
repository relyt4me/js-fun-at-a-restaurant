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

module.exports = {
  takeOrder,
  refundOrder,
  // listItems,
  // searchOrder
};
