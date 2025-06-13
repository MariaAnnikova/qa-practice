function checkOrder(available, ordered) {
  let message = "";
  if (ordered === 0) {
    message = "Ваш кошик порожній";
  } else if (ordered > available) {
    message = "На жаль, в наявності немає достатньої кількості товарів";
  } else {
    message = "Ваше замовлення прийнято";
  }
  return message;
}

console.log(checkOrder(100, 0));
console.log(checkOrder(100, 200));
console.log(checkOrder(1000, 100));


const checkOrder2 = (available, ordered) => {
  if (ordered === 0) return "Ваш кошик порожній";
  if (ordered > available) return "На жаль, в наявності немає достатньої кількості товарів";
  return "Ваше замовлення прийнято";
};

console.log(checkOrder2(100, 0));
console.log(checkOrder2(100, 200));
console.log(checkOrder2(1000, 100));
