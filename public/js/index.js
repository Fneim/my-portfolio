$(document).ready(function() {
  //smooth crolling event when nav arrows are clicked
  //specific to my html code

  function loadContent() {
    setTimeout(function() {
      $("#loader-div").removeClass("h-100");
      $("#loader").css("display", "none");
      $(".container-fluid").css("display","block");
      $(".page-footer").css("display", "block");
    }, 3000);
  }

  window.onload(loadContent());

  //onclick event to send form data field values to the db
  $("#form-btn").click(function(event) {
    event.preventDefault();

    //take values of form fields
    var firstName = $("#fName").val();
    var lastName = $("#lName").val();
    var message = $("#message").val();

    console.log(firstName + " " + lastName + " ");
    console.log(message);

    //create object to hold values
    //objects keys should match with req body parameters in the server
    var newMessage = {
      firstName: firstName,
      lastName: lastName,
      message: message
    };
    console.log(newMessage);

    $.post("/emails", newMessage)
    .done(function(data) {
      console.log(data);
    });
    confirmation();
  });

  //confirm client's request has been sent
  function confirmation() {
    alert("Message sent!");

    //clear form fjelds
    $("#fName").val("");
    $("#lName").val("");
    $("#message").val("");

  }
});
