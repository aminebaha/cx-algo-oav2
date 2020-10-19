
module.exports = {
sort_insertion: (array,value)=> {
    
    let pivot
    let j
    for(i = 1; i < array.length; i++) {
      pivot = array[i]
      j = i - 1
      
      while (array[j] > pivot) {
        
        array[j+1] = array[j]
        j--
      }
      
      array[j+1] = pivot
    }
    return array
  }

}