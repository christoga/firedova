function submitForm() {
  // Firebase ref
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

    // Push data to firebase
    ref.push().set({
      firstName: first,
      lastName: last
    });
  }
}
