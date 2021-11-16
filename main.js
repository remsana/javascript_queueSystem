console.log("Arlanda Flygplats");

//DOM

let passengerButton = document.querySelector("#enterPassengerButton");
let fastTrackButton = document.querySelector("#fasttrackButton");
let checkInButton = document.querySelector("#checkInButton");
let passengerName = document.querySelector("#enterNameInput");
passengerName.style.color = "black";
let passengerContent = document.querySelector("#passengerContent");

let passengerArray = [];

printToDom(passengerArray);

  /*----functions-------*/

//1. Printing to DOM
function printToDom(array) {
  array.forEach((item, index) => {
    if (index == 0) {
      let passengerList = document.createElement("li");
      passengerList.className = "list-group-item active";
      passengerList.innerText = (index+1) + ". "+ item;
      passengerList.style.background = "#fff381";
      passengerList.style.color = "black";
      passengerList.style.fontWeight = "bold";
      passengerContent.appendChild(passengerList);
    } else {
      let passengerList = document.createElement("li");
      passengerList.className = "list-group-item";
      passengerList.innerText = (index+1) + ". "+ item;
      passengerContent.appendChild(passengerList);
    }
  });
  if (array.length === 0) {
    let message = document.createElement("li");
    message.textContent = "There are currently no people standing in line!";
    passengerContent.appendChild(message);

    message.style.fontWeight = "bold";
    message.style.color = "#30323d";
    message.style.fontSize = "15px";
    message.style.listStyleType = "none";
    message.style.alignContent = "center";
  }
}

//clearing from DOM
function clearDom() {
  let listOfPassengers = document.querySelectorAll("li");
  listOfPassengers.forEach((element) => {
    element.remove();
  });
}

//buttons - addEventListener

passengerButton.addEventListener("click", () => {
  if (passengerName.value == "") {
    alert("Please enter a name to proceed!");
    passengerName.style.borderColor = "red";
  } else {
    clearDom();
    passengerName.style.borderColor = "black";
    passengerArray.push(passengerName.value);
    printToDom(passengerArray);
    passengerName.value = "";
  }
});

fastTrackButton.addEventListener("click", () => {
  if (passengerName.value == "") {
    alert("Please enter a name to proceed!");
    passengerName.style.borderColor = "red";
  } else {
    clearDom();
    passengerName.style.borderColor = "black";
    passengerArray.unshift(passengerName.value);
    printToDom(passengerArray);
    passengerName.value = "";
  }
});

checkInButton.addEventListener("click", () => {
  clearDom();
  passengerName.value = "";
  passengerArray.shift();
  printToDom(passengerArray);
});
