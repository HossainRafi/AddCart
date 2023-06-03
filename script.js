const decreaseNumber = (incdec, itemprice) => {
  var itemval = document.getElementById(incdec);
  var itemprice = document.getElementById(itemprice);
  if (itemval.value <= 0) {
    itemval.value = 0;
    alert("Negative quantity not allowed");
  } else {
      itemval.value = parseInt(itemval.value) - 1;
      itemval.style.background = "white";
      itemval.style.color = "black";
  }
};

const increaseNumber = (incdec, itemprice) => {
  var itemval = document.getElementById(incdec);
  var itemprice = document.getElementById(itemprice);
  if (itemval.value >= 5) {
    itemval.value = 5;
    alert("5 Products in stock");
    itemval.style.background = "red";
    itemval.style.color = "white";
  } else {
      itemval.value = parseInt(itemval.value) + 1;
      
  }
};
