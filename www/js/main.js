function submitForm() {
  var first = $('#first').val();
  var last = $('#last').val();

  if (first === '' || last === '') {
    alert('Input is not filled');
  } else {
    alert('Your name is: ' + first + last)
  }
}
