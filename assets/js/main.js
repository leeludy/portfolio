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
});
