document.addEventListener("DOMContentLoaded", () => {
    new Glide(".glideDetailHome", {
      type: "carousel",
      startAt: 0,
      animationTimingFunc: "ease-in-out",
      gap: 100,
      perView: 2
    }).mount();

    new Glide(".glideSimilarHome", {
      type: "carousel",
      startAt: 0,
      animationTimingFunc: "ease-in-out",
      gap: 100,
      perView: 3
    }).mount();
  });