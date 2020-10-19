module.exports = {


bubble_sorting: (array) => {
    let pivot = 0
    let isSwapped =  true
   do {
    isSwapped = false
    for (let i = 0; i < array.length; i++) {
   
        if(array[i]>array[i+1]) {
            pivot = array[i]
            array[i] = array[i+1]
            array[i+1] = pivot
            isSwapped =true
            
        }
    }
}while(isSwapped);
 
    return array
}



}