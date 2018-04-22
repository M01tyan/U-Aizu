function signUp(){
  var form = document.forms.signUp;
  localStorage.setItem('userId', JSON.stringify(form.text.value));
  localStorage.setItem('password', JSON.stringify(form.password.value));
  console.log(localStorage.getItem('userId'));
  consoel.log(localStorage.getItem('password'));
  window.fn.load('home.html');
}