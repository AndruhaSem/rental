function generateUserData() {
  return {
    image: `https://avatars.dicebear.com/api/avataaars/${(Math.random() + 1)
      .toString(36)
      .substring(7)}.svg`,
  };
}
function generateOrderNUmber() {
  let number = 0;
  number++;
  return number;
}

module.exports = {
  generateUserData,
  generateOrderNUmber,
};
