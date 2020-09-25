document.addEventListener("DOMContentLoaded", () => {
    new Glide(".glideBanner", {
      type: "carousel",
      startAt: 0,
      animationTimingFunc: "ease-in-out",
      perView: 1
    }).mount();
  });