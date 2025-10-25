    //max number //
// const height = [65, 66, 72, 64, 60, 75, 73, 69];

// function getMax (numbers){
//     let large = numbers [0];
//     for (const num of numbers){
//         if (num > large){
//             large = num;
//         }
//     }
//     return large;
// }
//     const max = getMax (height);
//     console.log ('max value is',max);


    //home work//
    //min number //

// const height = [20, 55, 69, 87, 15, 53, 11, 111, 57];

// function getMin (numbers){
//     let small = numbers [0];
//     for (const num of numbers){
//         if (num < small){
//             small = num;
//         }
//     }
//     return small;
// }
// const min = getMin (height);
// console.log ('min value is:', min);


    //practice task//
    //find the lowest number in the array below.
    
    const height2 = [167, 190, 120, 165, 137];
    function getMin (numbers){
        let small = numbers [0];
        for (const num of numbers){
            if (num < small){
                small = num ;
            }
        }
        return small;
    }
    const min = getMin(height2);
    console.log ('lowest value is :', min);

