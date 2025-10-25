    //object//
const student = {
    name: 'Rafi',
    id:121,
    address: 'Noakhali',
    isSingle: true,
    friends: ['hasan', 'sami', 'fahim', 'sabbir', 'abir'],
    act: function (){
        console.log ('what about you ?')
    },
    car: {
        brand: 'tesla',
        price: 5000000,
        made: 2025,
        manufacturer: {
            name: 'tesla',
            ceo: 'Elon Mask',
            country: 'USA'
        } 
    }
}
  console.log (student);
// console.log (student.act);
// student.act();  

function add (num1, num2){
    console.log (num1, num2);
    console.log (arguments);
}
  add (12, 13, 45, 89, 78, 80, 99);