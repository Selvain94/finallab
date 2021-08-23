function togglePopup(){
  document.getElementById("popup-1").classList.toggle("active");
}

let arrOfStrings =["car", "van", "SUV", "truck", "bikes"];

console.log(arrOfStrings.length);


let obj = {
  name: "Ace Dealership",
  location: "Kuala Lumpur",
  service: "Buy Sell Rent",
};

console.log(obj.name);
console.log(obj["name"]);

function locationWithArgs(first, last){
  console.log(first + " " + last);
}
locationWithArgs("Kuala", "Lumpur");

let services= {
    buy: "buy",
    sell: "sell",
    rent: "rent",
};
alert("buy, sell, rent");