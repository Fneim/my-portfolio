$(document).ready(function() {
  //smooth crolling event when nav arrows are clicked
  //specific to my html code

  // $("#firstArrow").click(function(event) {
  //   if(this.hash == "") {
  //     event.preventDefault();
  //     var hash = this.hash;
  //
  //     $("html, body").animate({
  //       scrollLeft: $(hash).offset().left
  //     }, 600, function() {
  //       window.location.hash = hash;
  //     });
  //   }
  // })

  $("#firstArrow").click(function(){
      var currentElement = $(this).attr("href")l
      $('html, body').animate({scrollLeft: $(currentElement).offset().left
      }, 800);
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
