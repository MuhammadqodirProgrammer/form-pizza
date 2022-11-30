function doc(element) {
  return document.querySelector(element);
}
const myfood = {
  order: null,
  name: null,
  phone: null,
  address: null,
  dough: null,
  size: null,
  onpizza: [],
  add: [],
  total: null,
  acssesories: [],
};

const formEl = doc("#form");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = doc("#validationTooltip01");
  const userphone = doc("#validationTooltip02");
  const useraddress = doc("#validationTooltip03");
  const foodSize = document.getElementsByName("options");
  const onpiza = document.querySelectorAll(".inpizza");
  const add = document.querySelectorAll(".add");
  const option = document.getElementsByTagName("option");
  const order = document.getElementById("order");
  console.dir(order.value);
  let siz, ad, op, onpiz, onpiz1, onpiz2, onpiz3, onpiz4, onpiz5, onpiz6;
  onpiz = onpiz1 + onpiz2 + onpiz3 + onpiz4 + onpiz5 + onpiz6;

  // foodsize =>
  for (item of foodSize) {
    if (item.checked) {
      myfood.size = item.value;
    }
  }
  if (foodSize[0].checked) {
    siz = 10;
  }
  if (foodSize[1].checked) {
    siz = 12;
  }
  if (foodSize[2].checked) {
    siz = 15;
  }

  //  option =>
  for (item of option) {
    if (item.selected) {
      myfood.dough = item.value;
    }
  }
  if (option[0].selected) {
    op = 0;
  }
  if (option[1].selected) {
    op = 10;
  }
  if (option[2].selected) {
    op = 12;
  }
  if (option[3].selected) {
    op = 15;
  }
  // Onpizza=>
  const hd = [];

  for (item of onpiza) {
    if (item.checked) {
      myfood.onpizza.push(item.value);
      // console.log(myfood.onpizza.push(item.value));
    }
  }
  if (onpiza[0].checked) {
    hd.push(Number(5));
  }
  if (onpiza[1].checked) {
    hd.push(Number(5));
  }
  if (onpiza[2].checked) {
    hd.push(Number(5));
  }
  if (onpiza[3].checked) {
    hd.push(Number(5));
  }
  if (onpiza[4].checked) {
    hd.push(Number(5));
  }
  if (onpiza[5].checked) {
    hd.push(Number(5));
  }

  const onp = hd.length * 5;

  myfood.name = username.value;
  myfood.phone = userphone.value;
  myfood.address = useraddress.value;
  myfood.order = order.value;
  console.dir(order);
  // add =>

  for (item of add) {
    if (item.checked) {
      myfood.add.push(item.value);
    }
  }
  if (add[0].checked) {
    ad = 5;
    if (add[1].checked) {
      ad = 10;
    }
  }
  if (add[1].checked) {
    ad = 5;
    if (add[0].checked) {
      ad = 10;
    }
  }

  console.log(onp);
  console.log(hd);
  console.log(hd.length);
  const x = order.value;

  const sum = (ad + siz + op + onp) * x;

  console.log(sum);

  myfood.total = sum;

  // console.dir(option[1].selected)
  document.getElementById("orde").innerHTML = myfood.order;
  document.getElementById("name").innerHTML = myfood.name;
  document.getElementById("phone").innerHTML = myfood.phone;
  document.getElementById("address").innerHTML = myfood.address;
  document.getElementById("dough").innerHTML = myfood.dough;
  document.getElementById("size").innerHTML = myfood.size;
  document.getElementById("onpiza").innerHTML = myfood.onpizza;
  document.getElementById("add").innerHTML = myfood.add;
  document.getElementById("total").innerHTML = myfood.total;

  console.log(myfood);
});


