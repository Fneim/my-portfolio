$(document).ready(function() {
  //smooth crolling event when nav arrows are clicked
  $(".scrollItem").click(function(event) {
    event.preventDefault();

    var link = $(this).attr("href");
    $("#content").animate({
      scrollLeft: $("#content").scrollLeft() + $(link).offset().left
    }, 1000);
  });

  //onclick event to POST form input
  $("#message-btn").click(function(event) {
    event.preventDefault();

    //takes value of input
    var firstName = $("#fName").val();
    var lastName = $("#lName").val();
    var message = $("#message-btn").val();

    console.log(firstName + " " + lastName + " ");
    console.log(message);

    //object to hold form data
    //keys should match with response value in the server

    var newMessage = {
      firstName: firstName,
      lastName: lastName,
      message: message
    };
    console.log(newMessage);

    //send newMessage object to the server
    $.post("api/email", newMessage)
    .done(function(data) {
      console.log(data);
    });

    confirmation();
  });

  function confirmation() {
    alert("Message sent!");
  }
});
