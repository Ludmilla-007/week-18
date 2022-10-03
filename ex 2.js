let errors = [];
function checkValidity(input){
    let validity = input.validity;
    if (validity.valueMissing){
        errors.push('Поле' + input.placeholder + 'не заполнено');
    }
    if(validity.patternMismatch){
        errors.push('Неверный формат заполнения');
    }
    if(validity.rangeOverflow){
        let max = getAttributeValue(input, 'max');
        errors.push('Максимальное значение не может быть больше чем' + max);
    }
    if (validity.rangeUnderflow){
        let min = getAttributeValue(input, 'min');
        errors.push('Минимальное значение не может быть больше чем' +min);
    }
}

function checkAll(){
    errors = [];
    let inputs = document.querySelectorAll("input");
    for (let input of inputs){
        checkValidity(input);
    }
    document.getElementById('errorMessage').innerHTML = errors.join('.<br>');
}
/*function check (){
    let surname = document.getElementById("name");
    let name = document.getElementById("surname");
    let login = document.getElementById("login");
    let password = document.getElementById("password");
    let phonenumber = document.getElementById("phonenumber");
    
    document.getElementById('errorMessage').innerHTML="";
    
    if (name.value==''){
    document.getElementById('errorMessage')
    .innerHTML+="Заполните поле Имя <br>";
    }
    
    if (surname.value==''){
    document.getElementById('errorMessage')
    .innerHTML+="Заполните поле Фамилия <br>";
    }
    
    if (login.value==''){
    document.getElementById('errorMessage')
    .innerHTML+="Заполните поле Логин <br>";
    }
    
    if (password.value==''){
    document.getElementById('errorMessage')
    .innerHTML+="Заполните поле Пароль <br>";
    }
    
    if (phonenumber.value==''){
    document.getElementById('errorMessage')
    .innerHTML+="Заполните поле Номер телефона <br>";
    }
    
    if (name.value!=''){
    document.getElementById('welcome')
    alert (`Hello, ${name.value}!`);
            }
        
        }*/