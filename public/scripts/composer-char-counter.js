console.log('Composer char counter script loaded.');

$(document).ready(function() {
  $(".new-tweet textarea").on("input", function() {
    // Get the length of the input value
    const inputLength = $(this).val().length;
    // Calculate remaining characters
    const remainingChars = 140 - inputLength;
    // update the counter
    const counterElement = $(".counter");
    counterElement.text(remainingChars);
    // counter color change on negative counter
    if (remainingChars < 0) {
      counterElement.addClass("counter-negative");
      return;
    }
    counterElement.removeClass("counter-negative");
  });
});