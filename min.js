        //min price phone//
// const phones = [
//         {name: 'Samsung', price: 30000, color: 'black'},
//         {name: 'Realme', price: 20000, color: 'black'},
//         {name: 'Xiomi', price: 22000, color: 'black'},
//         {name: 'I-phone', price: 100000, color: 'black'},
//         {name: 'Oppo', price: 18000, color: 'black'},
// ]

    // function getChippestPhone (phones){
    //     let min = phones [0];
    //     for (const phone of phones){
    //         if (phone.price < min.price){
    //             min = phone;
    //         }
    //     }
    //     return min ;
    // }

        // const cheap = getChippestPhone (phones);
        // console.log ('chippest phone is:', cheap);


        //max price phone//
      const phones =[
         {name: 'Samsung', price: 30000, color: 'black'},
        {name: 'Realme', price: 20000, color: 'black'},
        {name: 'Xiomi', price: 22000, color: 'black'},
        {name: 'I-phone', price: 100000, color: 'black'},
        {name: 'Oppo', price: 18000, color: 'black'},
      ]  
            function getMaxPhone (phones){
                let max = phones [0];
                for (const phone of phones){
                    if (phone.price > max.price){
                        max = phone;
                    }
                }
                return max ;
            }
              const highest = getMaxPhone (phones);
              console.log ('highest phone is:', highest);