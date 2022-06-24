// Adding generate bars functionality

// Accessing generate bar id from button using DOM
var generateBars = document.querySelector("#generate-bars");

// Adding eventListner
generateBars.addEventListener("click",() => generateArray(70));


// Adding reload functionality so that whenever page reload the bars should generated
window.addEventListener("load", generateArray(70));

// Adding generateArray function
function generateArray(size) {
  // Accessing bar-area using dom
  var barArea = document.querySelector("#bar-area");

//   whenever you click on generate button all previous bars will vanish and new bar will be created
  barArea.innerHTML = "";

  // Adding bars
  for (let i = 0; i < size; i++) {
    // calculating random height for every bar
    let height = Math.floor(Math.random() * 100);

    // create a bar
    let bar = document.createElement("div");

    // adding css class to bar
    bar.classList.add("bars");

    // Adding height to bar
    bar.style.height = `${height * 5}px`;

    // Appending bar to barArea
    barArea.appendChild(bar);
  }
}


// Adding array size changer functionality

// Accessing the size ranger
var sizeChanger = document.querySelector("#array-size");

// Adding event AddingListener;
sizeChanger.addEventListener("change" , arraySizechanger);

// for setting the size
var size;

// adding array size changer functionality
function arraySizechanger(){

  // Actual size of the range will be given to size
  size = sizeChanger.value;

  // size will be passed to generate array method
generateArray(size);
  
}


// Adding speed changer functionality
var speed;

// Adding event Listner to speed Ranger
var speedRanger = document.querySelector("#speed-range");
speedRanger.addEventListener("change" , holdHere);

// Adding speed change function
function holdHere(){

  speed = speedRanger.value;
  return new Promise((resolve) => setTimeout(resolve , speed));
}




// Adding button disable functionality

function disableFunctionality(){

  // Accessing all the button and input ranger except speed ranger

  generateBars.disabled = true;
  bubbleSortButton.disabled = true;
  insertionSortButton.disabled = true;
  mergeSortButton.disabled = true;
  selectionSortButton.disabled = true;

  // input ranger
  sizeChanger.disabled = true;
}

function enableFunctionality(){

  // Accessing all the button and input ranger except speed ranger
  generateBars.disabled = false;
  bubbleSortButton.disabled = false;
  insertionSortButton.disabled = false;
  mergeSortButton.disabled = false;
  selectionSortButton.disabled = false;

  // input ranger
  sizeChanger.disabled = false;
}