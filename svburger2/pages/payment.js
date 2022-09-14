document.getElementById('checkouttotal').innerHTML += window.localStorage.getItem( 'sum');;

const paymentvalidation = ()=>{
    let name = document.forms['paymentinfo']['name'].value;
    let card = document.forms['paymentinfo']['card'].value;
    let type = document.forms['paymentinfo']['type'].value;
    let date = document.forms['paymentinfo']['date'].value;
    let cvv = document.forms['paymentinfo']['cvv'].value;
    if(name == "" || card == "" || type == "" || date == "" || cvv == ""){
        alert('please fill all the details')
        return false;
    }
    if (name.length < 2){
        alert('invalid card name owner')
        return false;
    }
    if (card.length < 10) {
        alert ('invalid card number, type again')
        return false;
    }
    if (cvv.length > 4 || cvv.length < 3) {
        alert ('invalid CVV please check')
        return false;
    }
    else if(true){
        alert('thank you for eating with us, the food soon will be at your place')
        return true;
    } 
}