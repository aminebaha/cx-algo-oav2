module.exports = {




sorting_selection:  (tab)=> {


let small
let pivot
for(let i=0;i<tab.length;i++) {
    small = i
    for(let j=i;j<tab.length;j++) {
        if(tab[j]<tab[small]) {
            small = j
        }
    }
    if(small!=i) {
    pivot = tab[i]
    tab[i]  =tab[small]
    tab[small] = pivot
    }
}

return tab



}
}