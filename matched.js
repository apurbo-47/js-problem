const products = [
    {id: 1 , name: 'i phone' , price:100000},
    {id: 2 , name: 'xiomi phone' , price:15000},
    {id: 3 , name: 'lenovo laptop' , price:30000},
    {id: 4 , name: 'dell laptop' , price:50000},
    {id: 5 , name: 'samsung phone' , price:30000},
    {id: 6 , name: 'mac book air' , price:120000},
];
 for (const product of products){
    console.log (product);
 }

function matchedProducts (products, search){
    const matched = [];
    for (const product of products){
        if (product.name.toLowerCase().includes(search)){
            matched.push (product);
        }
    }
    return matched ;
}
const result = matchedProducts (products, 'phone');
console.log (result);