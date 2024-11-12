window.onscroll = function () {
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

// Function to scroll to the top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}