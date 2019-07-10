$(document).ready(function() {
  console.log("ready");

  $("#year").text(new Date().getFullYear());

  $("#work-section").css("display", "none");
  $("#contact-section").css("display", "none");

  $(".nav-link").on("click", function(e) {
    e.preventDefault();

    if ($(this).attr("id") === "about") {
      console.log("about");
      $("#about-section").css("display", "block");
      $("#work-section").css("display", "none");
      $("#contact-section").css("display", "none");
    } else if ($(this).attr("id") === "work") {
      console.log("work");
      $("#about-section").css("display", "none");
      $("#work-section").css("display", "block");
      $("#contact-section").css("display", "none");
    } else if ($(this).attr("id") === "contact") {
      console.log("contact");
      $("#about-section").css("display", "none");
      $("#work-section").css("display", "none");
      $("#contact-section").css("display", "block");
    }
  });
});
