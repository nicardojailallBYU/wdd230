const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.getAttribute("data-src");
        const placeholderDuration = 1000; 
  
        if (src) {
          setTimeout(() => {
            img.src = src;
            img.removeAttribute("data-src");
            img.addEventListener("load", () => {
              img.style.opacity = 1;
              img.style.transition = "opacity 0.5s";
            });
            img.addEventListener("error", () => {
              img.style.opacity = 1;
              img.style.transition = "opacity 0.5s";
            });
          }, placeholderDuration);
        }
  
        observer.unobserve(img);
      }
    });
  });
  
  const images = document.querySelectorAll("img[data-src]");
  images.forEach((img) => {
    img.style.opacity = 0;
    imageObserver.observe(img);
  });
  