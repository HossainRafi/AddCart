const decreaseNumber = (incdec, itemprice) => {
  var itemval = document.getElementById(incdec);
  var itemprice = document.getElementById(itemprice);
  if (itemval.value <= 0) {
    itemval.value = 0;
    Swal.fire({
      icon: "warning",
      title: "Negative quantity not allowed!",
    });
  } else {
    itemval.value = parseInt(itemval.value) - 1;
    itemval.style.background = "white";
    itemval.style.color = "black";
    //   itemprice.innerHTML = parseInt(itemprice.innerHTML) - 15;
  }
};

const increaseNumber = (incdec, itemprice) => {
  var itemval = document.getElementById(incdec);
  var itemprice = document.getElementById(itemprice);
  if (itemval.value >= 5) {
    itemval.value = 5;
    Swal.fire({
      icon: "warning",
      title: "Can't purchase more than 5 products!",
    });
    itemval.style.background = "red";
    itemval.style.color = "white";
  } else {
    itemval.value = parseInt(itemval.value) + 1;
    // itemprice.innerHTML = parseInt(itemprice.innerHTML) + 15;
  }
};
