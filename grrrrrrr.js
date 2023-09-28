function insertionSort(arr) {
    const n = arr.length;
    
    for (let i = 1; i < n; i++) {
      // Pick the current element to be inserted into the sorted subarray
      const currentElement = arr[i];
      let j = i - 1;
  
      // Move elements of the sorted subarray that are greater than the currentElement
      // to one position ahead of their current position
      while (j >= 0 && arr[j] > currentElement) {
        arr[j + 1] = arr[j];
        j--;
      }
  
      // Insert the currentElement into its correct position
      arr[j + 1] = currentElement;
    }
  }
  
  // Example usage:
  const arr = [12, 11, 13, 5, 6];
  insertionSort(arr);
  console.log(arr); // Output: [5, 6, 11, 12, 13]
  