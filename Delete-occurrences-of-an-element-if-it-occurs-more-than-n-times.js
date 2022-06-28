function deleteNth(arr,n){
  // ...
    let newArr = [];
  function countDuplicates(item) {
    let count = 0;
    
    for (let i = 0; i < newArr.length; i++) {
      if (item === newArr[i]) {
        count++;
      }
    }
    return count;
  }
///////////////////////////////////////////////////////////////   
  for (let i = 0; i < arr.length; i++) {
    if ( countDuplicates(arr[i]) < n ) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
