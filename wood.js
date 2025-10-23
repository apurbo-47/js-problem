        //calculate wood requirment//
        function woodQuantity (chairQuantity, tableQuantity, bedQuantity){
            const perChairWood = 3;
            const perTableWood = 10;
            const perBedWood = 50;

            const chairTotalWood = chairQuantity * perChairWood;
            const tableTotalWood = tableQuantity * perTableWood;
            const bedTotalWood = bedQuantity * perBedWood;

            const totalWood = chairTotalWood + tableTotalWood + bedTotalWood;
            return totalWood;
        }

        const wood = woodQuantity (6, 1, 1);
        // console.log ('wood needed', wood);


        //calculate shopping requirment//
      function clothQuantity (shirtQuantity, pantQuantity, shoeQuantity){
        const perShirt = 500;
        const perPant = 700;
        const perShoe = 900;

        const shirtTotalPrice = shirtQuantity * perShirt;
        console.log ('shirt total price:', shirtTotalPrice);

        const pantTotalPrice = pantQuantity * perPant;
        console.log ('pant total price:', pantTotalPrice);

        const shoeTotalPrice = shoeQuantity * perShoe;
        console.log ('shoe total price:', shoeTotalPrice);

        const totalPrice = shirtTotalPrice + pantTotalPrice + shoeTotalPrice;
        return totalPrice;
      }  

      const cloth = clothQuantity (3, 2, 1);
      console.log ('total shopping:',cloth);
