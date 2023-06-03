const decreaseNumber = () => {
  let itemval = document.getElementById("textbox");
  if (itemval.value <= 0) {
    itemval.value = 0;
    alert("Negative quantity not allowed");
  } else {
    itemval.value = parseInt(itemval.value) - 1;
  }
};
