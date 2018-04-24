function login(){
  var form = document.forms.signUp;
  localStorage.setItem('userId', JSON.stringify(form[0].value));
  localStorage.setItem('password', JSON.stringify(form[1].value));
  localStorage.setItem('beforeDate', JSON.stringify(0));
  fn.load('loading.html');
}

document.addEventListener('init', function(event) {
  if(event.target.id == "loading"){
    if(localStorage.getItem('userId') == null) {
      setTimeout(function() {fn.load('firstLogin.html')}, 2000);
    } else {
      openSystem();
      setTimeout(function (){fn.load('home.html');}, 2000);
    }
  }
});