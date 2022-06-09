let emailReceiver = 'ftkhl.umam22@gmail.com;'

function clickButton(){
    let name = document.getElementById('input-name').value;
    let email = document.getElementById('input-email').value;
    let phone = document.getElementById('phone-number').value;
    let subject = document.getElementById('choose-subject').value;
    let message = document.getElementById('massage').value;

    console.log(name);

    if (name == null || email == '' || phone == '' || subject == '' || message == ''){
        alert('Mohon Lengkapi Form yang Tersedia');
    }

    else{
        let a = document.createElement('a');
        a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hay, my name ${name}, ${subject}, ${message}`;
    
        a.click();
    }
}