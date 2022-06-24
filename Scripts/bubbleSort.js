// Adding bubble sort button functionality

// Accesing` buttom using DOM
var bubbleSortButton = document.querySelector("#button-sort");

// Adding event Listner
bubbleSortButton.addEventListener("click", async() => {
  disableFunctionality();
  await bubbleSort();
  enableFunctionality();
});

// Function for bubble sort
async function bubbleSort() {

  // changing the color of button
  bubbleSortButton.style.backgroundColor = "#FFB703";
  bubbleSortButton.style.color = "#023047";

  // Accessing all the bars
  var bars = document.querySelectorAll(".bars");

  // Implementing Bubble sort Algorithm

  for (let i = 0; i < bars.length - 1; i++) {
    for (let j = 0; j < bars.length - i - 1; j++) {
      // changing background color of the selected bars for comparision
      bars[j].style.background = "#FB8500";
      bars[j + 1].style.background = "#FB8500";

      await holdHere();

      if (parseInt(bars[j].style.height) > parseInt(bars[j + 1].style.height)) {
        swap(bars[j], bars[j + 1]);
      }

      // // changing background color of selected colors back to normal
      bars[j].style.background = "#8ECAE6";
      bars[j + 1].style.background = "#8ECAE6";
    }

    // changing color of sorted bars
    bars[bars.length - i - 1].style.backgroundColor = "#fffe3a";
  }
  bars[0].style.backgroundColor = "#fffe3a";

  // changing the color of button  back to normal
  bubbleSortButton.style.backgroundColor = " #023047";
  bubbleSortButton.style.color = "#FFB703";
}

// // swap functionality

function swap(ele1, ele2) {
  let temp = ele1.style.height;
  ele1.style.height = ele2.style.height;
  ele2.style.height = temp;
}
