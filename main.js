var allInputs = JSON.parse(localStorage.getItem("container")) || [];

function validateInputs(element){
    var val = element.value;
    var id = element.id;

    var regex={
        name: /^[A-Za-z ]{3,20}$/,
        email: /^\w{3,15}@gmail\.com$/,
        pass: /^.{6,}$/
}

    if(regex[id].test(val)){
        element.classList.add('is-valid');
        element.classList.remove('is-invalid');
} 
    else{
        element.classList.add('is-invalid');
        element.classList.remove('is-valid');
}
}

function loginInputs(){
    var email=document.getElementById('email').value
    var pass=document.getElementById('pass').value

    var info = { email, pass }
  
  if(email=='' || pass==''){
    document.getElementById('confirmation').innerHTML='All inputs is required'
    confirmation.classList.add('text-danger')
  }
  else{
    var loggedUser = allInputs.find(i => i.email === email && i.pass === pass);

    if(loggedUser){
        localStorage.setItem('loggedName', loggedUser.name);
        window.location.href = 'home.html';
    } 
  else{
    document.getElementById('confirmation').innerHTML='incorrect email or password'
    confirmation.classList.add('text-danger')
  }
  }
}

function signupInputs(){
    var email=document.getElementById('email').value
    var pass=document.getElementById('pass').value
    var name=document.getElementById('name').value

    var info = {name, email, pass}
  
  if(email=='' || pass=='' || name==''){
    document.getElementById('confirmation').innerHTML='All inputs is required'
    confirmation.classList.add('text-danger')
  }
  else{

    if(allInputs.some(i => i.email === email)){
    document.getElementById('confirmation').innerHTML='email already exists'
    confirmation.classList.add('text-danger')
  }
  else{
    allInputs.push(info);
    localStorage.setItem("container", JSON.stringify(allInputs));
    document.getElementById('confirmation').innerHTML='Success!'
    confirmation.classList.remove('text-danger')
    confirmation.classList.add('text-success')
  }
  }
}
    var nameInput = document.getElementById('name')
    var loginBtn = document.getElementById('loginBtn')
    var signupBtn = document.getElementById('signupBtn')
    var login = document.getElementById('login')
    var signup = document.getElementById('signup')

function signupClick(){
    nameInput.classList.remove('d-none')

    login.classList.add('d-none')
    signup.classList.remove('d-none')

    loginBtn.classList.add('d-none')
    signupBtn.classList.remove('d-none')
}

function loginClick(){

    nameInput.classList.add('d-none')

    login.classList.remove('d-none')
    signup.classList.add('d-none')

    loginBtn.classList.remove('d-none')
    signupBtn.classList.add('d-none')
}

function logout(){
    window.location.href = 'index.html';
}