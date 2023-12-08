let count = 0;

$(document).ready(function() {
  const value = $("#value");
  const btns = $(".btn");

  btns.on("click", function(e) {
    const styles = $(this).attr("class");

    if (styles.includes("decrease")) {
      count--;
    } else if (styles.includes("increase")) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      value.css("color", "green");
    } else if (count < 0) {
      value.css("color", "red");
    } else {
      value.css("color", "#222");
    }

    value.text(count);
  });
});