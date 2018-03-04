$(document).ready(function() {
  //smooth crolling event when nav arrows are clicked
  //specific to my html code

  function loadContent() {
    setTimeout(function() {
      $("#loader").remove();
      $("#landing").fadeOut(1000, function() {
        // $(".about-btn").fadeIn(600).css("display", "inline-block");
        $("body").css({"background-image": "url('./assets/dust_scratches.png')",
                     "background-repeat": "no-repeat", "background-size": "cover"});
        $(".container-fluid").fadeIn(600).css("display", "block");
        $(".page-footer").fadeIn(600).css("display", "block");
        $("#content").fadeIn(600).css({"display": "block", "height":"20px", "width": "50px", "left":"0", "top":"0", "z-index": "2"});
        $(".logo").css("display","block");
      });

    }, 1000);
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
