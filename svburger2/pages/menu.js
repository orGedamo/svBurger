let firstName = window.localStorage.getItem('name');
let fixedName=firstName.slice(1,firstName.length-1);
document.getElementById('name_span').innerHTML= fixedName;

function sendmeal() {
    let fullprice = [];
    let price = [];
    let sum = 0;
    let checkbox = document.getElementsByName('checkbox');
    for (let i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked == true) {
            fullprice.push(checkbox[i].value);
        } 
    }
    fullprice.forEach(str => {
        price.push(Number(str));
      });
      
    for (let i = 0; i < price.length; i++) {
        sum+=price[i];
    }
    // alert('your total is: ' + `${sum}`);
    window.localStorage.setItem('sum', JSON.stringify(sum));
    window.location.href=('payment.html')
}
