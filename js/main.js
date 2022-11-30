function $(element) {
    return document.querySelector(element)
}
const myfood ={
     order:null,
     name:null,
     phone:null,
     address:null,
     dough:null,
     size:null,
     onpizza:[],
     add:[],
     total:null,
    acssesories:[],
};

const formEl = $("#form");


formEl.addEventListener("submit", (e) => {
    e.preventDefault()
    const username = $("#validationTooltip01");
    const userphone = $("#validationTooltip02");
    const useraddress = $("#validationTooltip03");
    const foodSize = document.getElementsByName("options")
    const onpiza = document.querySelectorAll(".inpizza")
const child =document.querySelectorAll("#onpizza")
  const add =document.querySelectorAll(".add")
  const option =document.getElementsByTagName("option")
// console.log(foodSize[0].checked);
// console.log(onpiza);
// console.dir(child[0].children[1].children[0].children[0].checked);
// console.dir(child[0].children[2]);

  for(item of foodSize){
    if(item.checked){
        myfood.size =item.value
    }
  }
// if(child[0].children[1].children[0].children[0].checked){
// myfood.onpizza.push()
// }

    myfood.name =username.value
    myfood.phone =userphone.value
    myfood.address =useraddress.value
 
    for(item of onpiza){
        if(item.checked){
            myfood.onpizza.push(item.value)
            // console.log(myfood.onpizza.push(item.value));
        }
    }

    for(item of add){
        if(item.checked){
myfood.add.push(item.value)
        }
    }
    
    for(item of option){
        console.log(item.value);
        if(item.selected){
            myfood.dough =item.value
            // console.log(item.value);
        }
    }

    // console.dir(option[1].selected)
    document.getElementById("name").innerHTML = myfood.name;
    document.getElementById("phone").innerHTML = myfood.phone;
    document.getElementById("address").innerHTML = myfood.address;
    document.getElementById("dough").innerHTML = myfood.dough;
    document.getElementById("size").innerHTML = myfood.size;
    document.getElementById("onpiza").innerHTML = myfood.onpizza;
    document.getElementById("add").innerHTML = myfood.add;
    document.getElementById("total").innerHTML = myfood.total;


    console.log(myfood);

})
// console.log(myfood);


const order = $("#order")
const name = $("#name")
const phone = $("#phone")
const address = $("#address")
const dough = $("#dough")
const size = $("#size")
const add = $("#add")
const total = $("#total")

document.getElementById("name").innerHTML = myfood.name;
document.getElementById("phone").innerHTML = myfood.phone;
document.getElementById("address").innerHTML = myfood.address;
