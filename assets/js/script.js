/*

*/
//let item = [ 'A', 'B', 'C' ];

//let [item1, item2, item3] = item;

function showItem() {
    return [1, 2, 3];
}

let [item1, item2, item3] = showItem();

console.log(item1, item2, item3);