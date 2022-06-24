// Adding insertion sort functionality

// Accessing button using DOM
var insertionSortButton = document.querySelector("#insertion-sort");

// Adding event Listner
insertionSortButton.addEventListener("click", async() => {
  disableFunctionality();
  await insertionSort();
  enableFunctionality();
});

// Adding insertion sort function

async function insertionSort() {

  // changing the color of button
  insertionSortButton.style.backgroundColor = "#FFB703";
  insertionSortButton.style.color = "#023047";

  // Accessing bars
  var bars = document.querySelectorAll(".bars");
  console.log(bars);

  // coloring the 0th element
  bars[0].style.backgroundColor = "yellow";

  // Implementing insertion sort functionality
  for (let i = 1; i < bars.length; i++) {
    // changing color of selected bar
    bars[i].style.backgroundColor = "#FB8500";

    let j = i - 1;
    let temp = bars[i].style.height;

    await holdHere();
    while (j >= 0 && parseInt(bars[j].style.height) > parseInt(temp)) {
      
      // changing color of selected bar
      bars[j].style.backgroundColor = "#FB8500";


      bars[j + 1].style.height = bars[j].style.height;

      
      await holdHere();
      j--;

      // coloring the sorted area
      for (let k = i; k >= 0; k--) {
        bars[k].style.backgroundColor = "yellow";
      }
    }


    bars[j + 1].style.height = temp;

    bars[i].style.backgroundColor = "yellow";
  }

   // changing the color of button  back to normal
   insertionSortButton.style.backgroundColor = " #023047";
   insertionSortButton.style.color = "#FFB703";
 
}
