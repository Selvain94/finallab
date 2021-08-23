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

function Calculate() {

  const amount = document.querySelector("#amount").value;

  const rate = document.querySelector("#rate").value;

  const months = document.querySelector("#months").value;

  const interest = (amount * (rate * 0.01)) / months;
    
  const total = ((amount / months) + interest).toFixed(2);

  document.querySelector("#total")
      .innerHTML = "Instalment : (RM)" + total;
}  