    //normal discount//
// function discountPrice (quantity){
//     if (quantity <= 100){
//         const total = quantity * 100;
//         return total;
//     }
//     else if (quantity <= 200){
//         const total = quantity * 90;
//         return total;
//     }
//     else {
//         const total = quantity * 70;
//         return total;
//     }
    
// }
//     const total = discountPrice(150);
//     console.log (total);



    //layer discount//
    //first 100 --> 100
    //101 to 200 --> 90
    //above 200 --> 70
    function layerDiscountTotal (quantity){
        const first100Price = 100;
        const second100Price = 90;
        const above200Price = 70 ;
        if (quantity <= 100){
            const total = quantity * first100Price;
            return total;
        } 
        else if (quantity <= 200){
            const first100Total = first100Price * 100;
            const remainingQuantity = quantity - 100;
            const remainingTotal = remainingQuantity * second100Price;
            const total = first100Total + remainingTotal;
            return total;
        }
        else {
            const first100Total = 100 * first100Price;
            const second100Total = 100 * second100Price;
            const remainingQuantity = quantity - 200;
            const remainingTotal = remainingQuantity * above200Price;
            const total = first100Total + second100Total + remainingTotal;
            return total;
        }

    }
       const total = layerDiscountTotal (225);
       console.log (total);