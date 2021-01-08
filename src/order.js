const takeOrder = (newOrder, ordersList) => {
  ordersList.length < 3 && ordersList.push(newOrder);
};

module.exports = {
  takeOrder,
  // refundOrder,
  // listItems,
  // searchOrder
};
