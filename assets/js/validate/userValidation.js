$(document).ready(function () {

  $.validator.setDefaults({
    errorClass: 'invalid',
    validClass: "valid",
    errorPlacement: function (error, element) {
      $(element)
        .closest("form")
        .find("label[for='" + element.attr("name") + "']")
        .attr('data-error', error.text());
    },
    submitHandler: function (form) {
      form.submit();
    }
  });

  $('#createUserForm').validate({
    rules: {
      firstName: {
        required: true
      },
      lastName: {
        required: true
      },
      email: {
        required: true,
        email: true
      },
      password: {
        required: true,
        minlength: 6,
      },
      passwordConfirmation: {
        required: true,
        equalTo: '#password',
      }
    }
  })
});



