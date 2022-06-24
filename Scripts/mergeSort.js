// Adding merge Sort functionality

// Accessing button using DOM
var mergeSortButton = document.querySelector("#merge-sort");

// Adding eventListner
mergeSortButton.addEventListener("click", async() => {
  var bars = document.querySelectorAll(".bars");
  disableFunctionality();

  // changing the color of button
  mergeSortButton.style.backgroundColor = "#FFB703";
  mergeSortButton.style.color = "#023047";
  
  await mergeSort(bars, 0, bars.length - 1);

  // changing the color of button  back to normal
  mergeSortButton.style.backgroundColor = " #023047";
  mergeSortButton.style.color = "#FFB703";


  enableFunctionality();
});

async function mergeSort(barArray, l, r) {

 

  if (l >= r) {
    return;
  }
  const m = l + Math.floor((r - l) / 2);
  await mergeSort(barArray, l, m);
  await mergeSort(barArray, m + 1, r);
  await merge(barArray, l, m, r);

  
  
}

async function merge(barArray, low, mid, high) {
  console.log("In merge()");
  console.log(`low=${low}, mid=${mid}, high=${high}`);
  const n1 = mid - low + 1;
  const n2 = high - mid;
  console.log(`n1=${n1}, n2=${n2}`);
  let left = new Array(n1);
  let right = new Array(n2);

  for (let i = 0; i < n1; i++) {
    await holdHere();

    // color
    barArray[low + i].style.background = "orange";
    left[i] = barArray[low + i].style.height;
  }
  for (let i = 0; i < n2; i++) {
    await holdHere();

    // color
    barArray[mid + 1 + i].style.background = "yellow";
    right[i] = barArray[mid + 1 + i].style.height;
  }
  await holdHere();
  let i = 0,
    j = 0,
    k = low;
  while (i < n1 && j < n2) {
    await holdHere();

    // To add color for which two r being compared for merging

    if (parseInt(left[i]) <= parseInt(right[j])) {
      // color
      if (n1 + n2 === barArray.length) {
        barArray[k].style.background = "#00FFDD";
      } else {
        barArray[k].style.background = "lightgreen";
      }

      barArray[k].style.height = left[i];
      i++;
      k++;
    } else {
      // color
      if (n1 + n2 === barArray.length) {
        barArray[k].style.background = "#00FFDD";
      } else {
        barArray[k].style.background = "lightgreen";
      }
      barArray[k].style.height = right[j];
      j++;
      k++;
    }
  }
  while (i < n1) {
    await holdHere();

    // color
    if (n1 + n2 === barArray.length) {
      barArray[k].style.background = "#00FFDD";
    } else {
      barArray[k].style.background = "lightgreen";
    }
    barArray[k].style.height = left[i];
    i++;
    k++;
  }
  while (j < n2) {
    await holdHere();

    // color
    if (n1 + n2 === barArray.length) {
      barArray[k].style.background = "#00FFDD";
    } else {
      barArray[k].style.background = "lightgreen";
    }
    barArray[k].style.height = right[j];
    j++;
    k++;
  }
}
