// index
function newC() {
    window.location.href=('singup.html')  
}
function exsit() {
    window.location.href=('singin.html')   
}


//singup
const singupVlidation = ()=>{
    let special = /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
    const firstname = document.forms['customerinfo']['firstname'].value;
    let lastname = document.forms['customerinfo']['lastname'].value;
    let email = document.forms['customerinfo']['email'].value;
    let password = document.forms['customerinfo']['password'].value;
    let password2 = document.forms['customerinfo']['password2'].value;
    let gmail = '@gmail.';
    let yahoo = '@yahoo.';
    if (firstname == "" || lastname == "" || email == "" || password == "" || password2 == "") {
        alert('please fill all the details')
    }
    if(firstname.length <2 || firstname.length>20){
        alert('invalid first name, please correct')
        return false;
    }
    if(lastname.length <2 || lastname.length>20){
        alert('invalid last name, please correct')
        return false;
    }
    if(email.indexOf(gmail) == -1 && email.indexOf(yahoo) == -1 ){
        alert('invalid Email address, please use Gmail or Yahoo address only')
        return false;
    }
    if(password.length <2 && password.length >10 || password.search(special) == -1){
        alert('password must be 2-10 characters including special sing')
        return false;
    }
    if(password2 != password || password2 == "") {
        alert('invalid confirmation, try again')
        return false;
    }
    else if(true){
        window.location.href="singin.html";
        return true;
    } 
}


//singin
const singinVlidation = ()=>{debugger;
    let customerEmail = document.getElementById('emailsingin').value;
    let customerPassword = document.getElementById('passwordsingin').value; 
    fetch('/singin',{
        headers:{
          'Accept' : 'application/json',
          'Content-Type': 'application/json'
        },
        method:'post',
        body: JSON.stringify({
          email: customerEmail,
          password: customerPassword
        })
        }).then((res)=>{return res.json()}).then((data)=>{ 
          if(data==null){
              alert('email dosent exsist please try again')
            //   return;
          }
          else if(data.password!=customerPassword){
              alert('wrong password')
          }
          else{
            window.localStorage.setItem('name',JSON.stringify(data.firstname));
            window.location.href="menu.html";
            return true;
          }
})}

