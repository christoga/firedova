function submitForm() {
  var ref = new Firebase("https://firedova.firebaseio.com");

  // Get input value
  var first = $('#first').val(),
      last = $('#last').val();

  if (first === '' || last === '') {
    // Error message
    alert('Input is not filled');
  } else {
    // Success message
    alert('Your name is: ' + first + " " + last)

    ref.push().set({
      firstName: first,
      lastName: last
    });
  }
}
