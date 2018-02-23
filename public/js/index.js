$(document).ready(function() {
  //smooth crolling event when nav arrows are clicked
  //specific to my html code

  $("#scrollable").mouseover(function(event) {
    event.preventDefault();
    $("#scrollable").animate({
      scrollLeft: $("#scrollable").scrollLeft() + $(link).offset().left
    }, 1000);

  });

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

    //send newMessage object to the server
    //the route /api/email receives newMessage object
    //server executes code to post to the db
    // $.ajax({
    //   url:"/api/emails",
    //   type: "POST",
    //   datatype: "json",
    //   data: {
    //     "objectData": newMessage
    //   },
    //   contentType: "application/json",
    //   cache:false,
    //   timeout:5000,
    //   complete: function() {
    //     console.log("Message sent!");
    //   },
    // });

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
