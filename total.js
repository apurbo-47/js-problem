const numbers = [300, 100, 700, 1200];
        console.log (numbers)
// const products = [
//     {name: 'shampoo', price: 300},
//     {name: 'chiruni', price: 100},
//     {name: 'shirt', price: 700},
//     {name: 'pant', price: 1200}
// ]

//     function getShoppingTotal (products){
//         let sum = 0 ;
//         for (const product of products){
//             sum = sum + product.price;
//         }
//         return sum;
//     }
//         const total = getShoppingTotal (products);
        // console.log ('total spend: ', total);


        // shopping cart //
//         const products = [
//     {name: 'shampoo', price: 300, quantity:2},
//     {name: 'chiruni', price: 100, quantity:3},
//     {name: 'shirt', price: 700,quantity:5},
//     {name: 'pant', price: 1200,quantity:1},
// ]
//     function cartTotal (products){
//         let total = 0;
//         for (const product of products){
//             // console.log (product);
//             const thisProductCost = product.price * product.quantity;
//             total = total + thisProductCost;
//         }
//         //  return total;
//     }
//         const shoppingCost = cartTotal(products);
        // console.log ('total cost: ',shoppingCost);

    
        //practice//
        const products =[
            {name: 'laptop', price: 35000, quantity:1},
            {name: 'tablet', price: 15000, quantity:2},
            {name: 'mobile', price: 20000, quantity:3},
        ]
          function totalCost (products){
            let total = 0;
            for (const product of products){
                console.log (product);
                const thisProductCost = product.price * product.quantity;
                total = total + thisProductCost;
            }
            return total;
          }
           const total = totalCost (products);
           console.log ('total cost :', total);

    