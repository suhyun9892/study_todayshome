function app() {
  const topBanner = document.querySelector(".topBanner");
  const topBannerCloseBtn = document.querySelector(".closeBtn");

  topBannerCloseBtn.addEventListener("click", () => topBanner.remove());
}

document.addEventListener("DOMContentLoaded", app);
