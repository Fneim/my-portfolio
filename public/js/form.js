$(document).ready(function() {
  $("#submit-btn").click(function(e) {
    e.preventDefault();
    emailjs.send("gmail","default_response",{
      to_email: $("#email").val().trim,
    name: $("#fullname").val().trim(),
    to_name: "Fargin",
    notes: $("#message").val().trim()
    }).then(function(response) {
      console.log("SUCCESS", response);
    },
    function(error) {
      console.log("FAILED", error);
    })
  });
})
