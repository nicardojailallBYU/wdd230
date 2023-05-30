const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.getAttribute("data-src");
  
        if (src) {
          img.src = src;
          img.removeAttribute("data-src");
          img.addEventListener("load", () => {
            img.style.opacity = 1;
          });
        }
  
        observer.unobserve(img);
      }
    });
  });
  
  const images = document.querySelectorAll("img[data-src]");
  images.forEach((img) => {
    imageObserver.observe(img);
  });