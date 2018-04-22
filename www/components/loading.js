function login(){
  var form = document.forms.signUp;
  localStorage.setItem('userId', JSON.stringify(form[0].value));
  localStorage.setItem('password', JSON.stringify(form[1].value));
}