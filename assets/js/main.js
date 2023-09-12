/* Clear form after submition */
window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};

document.addEventListener("DOMContentLoaded", function () {
  /* Btn Scroll top */
  const scrollToTopButton = document.getElementById("returnTopBtn");

  const scrollFunc = () => {
    let y = window.scrollY;

    if (y > 0) {
      scrollToTopButton.className = "scrollToTopBtn show";
    } else {
      scrollToTopButton.className = "scrollToTopBtn hide";
    }
  };

  window.addEventListener("scroll", scrollFunc);

  const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;

    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo({ left: 0, top: c - c, behavior: "smooth" });
    }
  };

  scrollToTopButton.onclick = function (e) {
    e.preventDefault();
    scrollToTop();
  };

  /* Swipe */
  function detectSwipe(id, f) {
    let detect = {
        startX: 0,
        startY: 0,
        endX: 0,
        endY: 0,
        minX: 30, // min X swipe for horizontal swipe
        maxX: 30, // max X difference for vertical swipe
        minY: 50, // min Y swipe for vertial swipe
        maxY: 60, // max Y difference for horizontal swipe
      },
      direction = null,
      element = document.getElementById(id);

    element.addEventListener("touchstart", function (event) {
      const touch = event.touches[0];
      detect.startX = touch.screenX;
      detect.startY = touch.screenY;
    });

    element.addEventListener("touchmove", function (event) {
      event.preventDefault();
      const touch = event.touches[0];
      detect.endX = touch.screenX;
      detect.endY = touch.screenY;
    });

    element.addEventListener("touchend", function (event) {
      if (
        // Horizontal move.
        Math.abs(detect.endX - detect.startX) > detect.minX &&
        Math.abs(detect.endY - detect.startY) < detect.maxY
      ) {
        direction = detect.endX > detect.startX ? "right" : "left";
      } else if (
        // Vertical move.
        Math.abs(detect.endY - detect.startY) > detect.minY &&
        Math.abs(detect.endX - detect.startX) < detect.maxX
      ) {
        direction = detect.endY > detect.startY ? "up" : "down";
      }

      if (direction !== null && typeof f === "function") {
        f(element, direction, detect.endY, detect.startY);
      }
    });
  }

  function swipeDirection(element, direction, endY, startY) {
    const inputsCaroussel = element.getElementsByTagName("input");

    for (var i = 0; i < inputsCaroussel.length; i++) {
      if (inputsCaroussel[i].type == "radio" && inputsCaroussel[i].checked) {
        if (direction == "right" && inputsCaroussel[i - 1] !== undefined) {
          return (inputsCaroussel[i].checked = false), (inputsCaroussel[i - 1].checked = "checked");
        }

        if (direction == "left" && inputsCaroussel[i + 1] !== undefined) {
          return (inputsCaroussel[i].checked = false), (inputsCaroussel[i + 1].checked = "checked");
        }

        if (direction == "down") {
          return window.scrollBy({
            top: -(endY - startY) + 300,
            left: 0,
            behavior: "smooth",
          });
        }

        if (direction == "up") {
          return window.scrollBy({
            top: -(endY - startY) - 300,
            left: 0,
            behavior: "smooth",
          });
        }
      }
    }
  }

  detectSwipe("sliderContainer", swipeDirection);
});
