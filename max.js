const salman = 59;
const rafi = 87;
 
if (salman > rafi){
    // console.log ('salman will get the strawberry');
}
else {
    // console.log ('rafi will eat the strawberry');
}


    //inside a function //
    function getMax (num1, num2){
        if (num1 > num2){
            return num1;
        }
        else {
            return num2;
        }
    }
        // const max = getMax (59, 87);
        // console.log ('max number is:', max);



        // max number //
      const jim = 333;  
      const tim = 434;
      const kim = 419;

      if (jim > tim && jim > kim){
        // console.log ('jim highest scorer');
      }
      else if (tim > jim && tim > kim){
        // console.log ('tim highest scorer');
      }
      else {
        // console.log ('kim highest scorer');
      }


      //inside function //
      function maxOfThree (num1, num2, num3){
        if (num1 > num2 && num1 > num3){
            return num1;
        }
        else if (num2 > num1 && num2 > num3){
            return num2;
        }
        else {
            return num3;
        }
      }
      const maxNumber = maxOfThree (333, 434, 419);
    //   console.log ('highest score is:', maxNumber);



    const max = Math.max (12, 2, 45, 33, 99, 124, 254, 199, 20);
    console.log ('max number is:', max);