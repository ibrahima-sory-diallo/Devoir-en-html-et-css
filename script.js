function validateForm(){
    const inputEmail = document.getElementById('email')
    const inputError = document.getElementById('email-error')
    if( inputEmail.value === ''){
        inputError.textContent = 'Le champ ne doit pas être vide'
        inputError.style.textAlign = 'center'
        inputError.style.color = 'red' 
        inputError.style.fontSize = '20px'
    }
    else if(inputEmail.value.length < 6 ){
        inputError.textContent = 'Le nombre de caractère doit être superieur a 6'
        inputError.style.textAlign = 'center'
        inputError.style.color = 'red'
        inputError.style.fontSize = '20px'
    }
    else{
        inputError.textContent =''
        inputEmail.value = ''
    }
    inputEmail.addEventListener('input', () => {
        inputError.style.display = inputEmail.value === '' ? 'block' : 'none';
    });

    inputEmail.addEventListener('blur', () => {
        inputError.style.display = inputEmail.value === '' ? 'block' : 'none';
    }); 
    const textMessage = document.getElementById('message')
    const textError = document.getElementById('message-error')
    if( textMessage.value === ''){
        textError.textContent = 'Le champ Message ne doit pas être vide'
        textError.style.textAlign = 'center'
        textError.style.color = 'red' 
        textError.style.fontSize = '20px'
    }
    else{
        textError.textContent = ''
        textMessage.value = ''
        alert('Message envoyer avec succes')
    }
    textMessage.addEventListener('input', () => {
        textError.style.display = textMessage.value === '' ? 'block' : 'none';
    });

    inputEmail.addEventListener('blur', () => {
        textError.style.display = textMessage.value === '' ? 'block' : 'none';
    });
    
    return false
}  