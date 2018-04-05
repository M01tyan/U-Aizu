// This is a JavaScript file
function editSelects(event) {
  if (event.target.value == 'material' || event.target.value == 'underbar') {
    console.log(document.getElementById('choose-sel'));
    document.getElementById('choose-sel').setAttribute('modifier', event.target.value);
  }
}

