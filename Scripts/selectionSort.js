// Adding selection Sort functionality

// Accessing button using DOM
var selectionSortButton = document.querySelector("#selection-sort");

// Adding event listner
selectionSortButton.addEventListener("click", async() => {
  disableFunctionality();
  await selectionSort();
  enableFunctionality();
});

// Adding selection Sort function

async function selectionSort() {

  // changing the color of button
  selectionSortButton.style.backgroundColor = "#FFB703";
  selectionSortButton.style.color = "#023047";

  // accessing bars
  var bars = document.querySelectorAll(".bars");

  // Implementing selection sort algorithm
  for (let i = 0; i < bars.length - 1; i++) {
    // changing color of bar that is to be swapped
    bars[i].style.backgroundColor = "#FB8500";

    let minIndex = i;

    for (let j = i + 1; j < bars.length; j++) {
      // changing color of bar that is selected
      bars[j].style.backgroundColor = "#FB8500";

      await holdHere();
      if (
        parseInt(bars[j].style.height) < parseInt(bars[minIndex].style.height)
      ) {
        if (minIndex != i) {
          // changing color of min index
          bars[minIndex].style.backgroundColor = "#8ECAE6";
        }
        minIndex = j;
      } else {
        // if we found that height is greater in comparision return color back to normal
        bars[j].style.backgroundColor = "#8ECAE6";
      }
    }

    await holdHere();
    swap(bars[i], bars[minIndex]);

    // changing color of min Index back to normal
    bars[minIndex].style.backgroundColor = "#8ECAE6";

    // changing color of sorted bar
    bars[i].style.backgroundColor = "yellow";
  }

  //   changing the color of last Element
  bars[bars.length - 1].style.backgroundColor = "yellow";

  // changing the color of button  back to normal
  selectionSortButton.style.backgroundColor = " #023047";
  selectionSortButton.style.color = "#FFB703";
}

function swap(ele1, ele2) {
  let temp = ele1.style.height;
  ele1.style.height = ele2.style.height;
  ele2.style.height = temp;
}
